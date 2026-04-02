import { NextResponse } from "next/server";

import {
  buildAcknowledgementCopy,
  buildLeadRecord,
  dispatchLeadWorkflow,
  getRoutingConfig
} from "@/lib/lead-workflow";
import { getContactEmailConfig, sendContactInquiryEmail } from "@/lib/contact-email";

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const routingConfig = getRoutingConfig();
    const contactEmailConfig = getContactEmailConfig();
    const isProductionDeployment = process.env.VERCEL_ENV === "production";

    if (body?.company) {
      return NextResponse.json({ message: "Request rejected." }, { status: 400 });
    }

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !isValidEmail(email) || !message) {
      return NextResponse.json(
        { message: "Please provide your name, a valid email address, and a brief message." },
        { status: 400 }
      );
    }

    const lead = buildLeadRecord({
      name,
      email,
      phone: typeof body?.phone === "string" ? body.phone.trim() : "",
      investorType: typeof body?.investorType === "string" ? body.investorType.trim() : "",
      accreditedStatus: typeof body?.accreditedStatus === "string" ? body.accreditedStatus.trim() : "",
      investmentRange: typeof body?.investmentRange === "string" ? body.investmentRange.trim() : "",
      message,
      source: "website_contact_form",
      sourcePage: "/contact"
    });

    if (isProductionDeployment && !contactEmailConfig.configured) {
      return NextResponse.json(
        {
          message:
            "The contact email delivery is not configured yet. Please add SMTP settings before accepting inquiries.",
          leadId: lead.leadId,
          leadOwner: lead.leadOwner,
          leadStatus: lead.leadStatus,
          leadPriority: lead.leadPriority,
          leadScore: lead.leadScore,
          leadTier: lead.leadTier
        },
        { status: 503 }
      );
    }

    const workflow = await dispatchLeadWorkflow(lead);
    const emailDelivery = await sendContactInquiryEmail(lead);
    const hasConfiguredDestinations = Boolean(
      contactEmailConfig.configured ||
        routingConfig.crmWebhookUrl ||
        routingConfig.notificationWebhookUrl ||
        routingConfig.followUpWebhookUrl ||
        routingConfig.auditWebhookUrl
    );
    const failedDeliveries = workflow.failedDeliveries.filter((item) => item.skipped !== true);

    if (isProductionDeployment && !hasConfiguredDestinations) {
      return NextResponse.json(
        {
          message:
            "The lead workflow is not configured yet. Please add an email, CRM, or inbox destination before accepting inquiries.",
          leadId: lead.leadId,
          leadOwner: lead.leadOwner,
          leadStatus: lead.leadStatus,
          leadPriority: lead.leadPriority,
          leadScore: lead.leadScore,
          leadTier: lead.leadTier,
          workflow
        },
        { status: 503 }
      );
    }

    if (hasConfiguredDestinations && failedDeliveries.length > 0) {
      return NextResponse.json(
        {
          message: "The inquiry could not be routed right now. Please try again or contact the team another way.",
          leadId: lead.leadId,
          leadOwner: lead.leadOwner,
          leadStatus: lead.leadStatus,
          leadPriority: lead.leadPriority,
          leadScore: lead.leadScore,
          leadTier: lead.leadTier,
          workflow
        },
        { status: 502 }
      );
    }

    if (contactEmailConfig.configured && !emailDelivery.ok) {
      return NextResponse.json(
        {
          message:
            "The contact inquiry email could not be sent right now. Please try again or contact the team another way.",
          leadId: lead.leadId,
          leadOwner: lead.leadOwner,
          leadStatus: lead.leadStatus,
          leadPriority: lead.leadPriority,
          leadScore: lead.leadScore,
          leadTier: lead.leadTier,
          workflow,
          emailDelivery
        },
        { status: 502 }
      );
    }

    const acknowledgement = buildAcknowledgementCopy(lead);

    return NextResponse.json({
      ok: true,
      leadId: lead.leadId,
      leadOwner: lead.leadOwner,
      leadStatus: lead.leadStatus,
      leadPriority: lead.leadPriority,
      leadTier: lead.leadTier,
      leadScore: lead.leadScore,
      workflow,
      emailDelivery,
      acknowledgement,
      message:
        "Thanks for reaching out. Your inquiry has been received and the team will review it and respond if there appears to be a fit."
    });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to process the inquiry right now." },
      { status: 500 }
    );
  }
}
