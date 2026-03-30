import { NextResponse } from "next/server";

import {
  buildInvestorCommunicationLog,
  buildInvestorCommunicationRecord,
  buildInvestorProfileFromLead,
  canDeliverPrivateCommunication,
  dispatchInvestorCommunication,
  getInvestorRelationsConfig,
  relationshipStates
} from "@/lib/investor-relations";

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isAuthorized(request, config) {
  if (!config.apiKey) {
    return true;
  }

  const incomingKey = request.headers.get("x-investor-relations-key") || request.headers.get("authorization") || "";
  const normalizedIncoming = incomingKey.startsWith("Bearer ") ? incomingKey.slice(7).trim() : incomingKey.trim();
  return normalizedIncoming === config.apiKey;
}

function normalizeRecipients(body) {
  if (body?.lead) {
    return [buildInvestorProfileFromLead(body.lead)];
  }

  if (Array.isArray(body?.leads) && body.leads.length > 0) {
    return body.leads.map((lead) => buildInvestorProfileFromLead(lead));
  }

  if (Array.isArray(body?.recipients) && body.recipients.length > 0) {
    return body.recipients.map((recipient) => {
      if (recipient?.leadId || recipient?.leadStatus || recipient?.relationshipState) {
        return buildInvestorProfileFromLead(recipient);
      }

      return recipient;
    });
  }

  const recipient = {
    name: clean(body?.recipientName) || clean(body?.name),
    email: clean(body?.recipientEmail) || clean(body?.email),
    relationshipState: clean(body?.relationshipState) || clean(body?.leadStatus) || relationshipStates.prospect,
    leadId: clean(body?.leadId),
    owner: clean(body?.owner),
    consentToPrivateUpdates:
      body?.consentToPrivateUpdates === undefined ? true : Boolean(body?.consentToPrivateUpdates)
  };

  return recipient.name || recipient.email ? [recipient] : [];
}

export async function POST(request) {
  try {
    const config = getInvestorRelationsConfig();

    if (!isAuthorized(request, config)) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    const body = await request.json();
    const templateKey = clean(body?.templateKey);
    const recipients = normalizeRecipients(body);

    if (!templateKey) {
      return NextResponse.json({ message: "Missing communication template." }, { status: 400 });
    }

    if (recipients.length === 0) {
      return NextResponse.json({ message: "At least one private recipient is required." }, { status: 400 });
    }

    const record = buildInvestorCommunicationRecord({
      communicationId: clean(body?.communicationId),
      templateKey,
      sourceLeadId: clean(body?.sourceLeadId),
      sourceCampaign: clean(body?.sourceCampaign),
      owner: clean(body?.owner) || config.owner,
      sentAt: clean(body?.sentAt),
      recipients,
      context: {
        reportingPeriod: clean(body?.reportingPeriod),
        distributionDate: clean(body?.distributionDate),
        announcementTitle: clean(body?.announcementTitle),
        portfolioNote: clean(body?.portfolioNote),
        subject: clean(body?.subject),
        body: clean(body?.body)
      }
    });

    if (!canDeliverPrivateCommunication(record)) {
      return NextResponse.json(
        {
          message: "This communication can only be sent to qualified or existing investors.",
          communication: record
        },
        { status: 403 }
      );
    }

    const hasConfiguredDestinations = Boolean(
      config.communicationsWebhookUrl ||
        config.notificationWebhookUrl ||
        config.auditWebhookUrl ||
        config.archiveWebhookUrl
    );

    if (process.env.VERCEL_ENV === "production" && !hasConfiguredDestinations) {
      return NextResponse.json(
        {
          message: "Investor communications are not configured for production yet.",
          communication: record
        },
        { status: 503 }
      );
    }

    const deliveryOutcome = await dispatchInvestorCommunication(record);
    const log = buildInvestorCommunicationLog(record, deliveryOutcome);
    const failedDeliveries = deliveryOutcome.failedDeliveries.filter((item) => item.skipped !== true);

    if (hasConfiguredDestinations && failedDeliveries.length > 0) {
      return NextResponse.json(
        {
          message: "The investor communication could not be delivered right now.",
          communication: record,
          log,
          deliveryOutcome
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      communication: record,
      log,
      deliveryOutcome,
      message: "Private investor communication queued successfully."
    });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to process the communication right now." },
      { status: 500 }
    );
  }
}
