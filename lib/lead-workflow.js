import { scoreLead } from "@/lib/lead-qualification";

const DEFAULT_OWNER = "Investor Relations";

function normalize(value) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

function titleCase(value) {
  return typeof value === "string" && value.trim() ? value.trim() : "";
}

function buildLeadId() {
  return `lead_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function classifyLead(input = {}) {
  const base = scoreLead(input);
  const accreditedStatus = normalize(input.accreditedStatus);
  const investmentRange = titleCase(input.investmentRange) || "Not sure yet";
  const priority = base.prioritize || investmentRange === "$250k-$500k" || investmentRange === "$500k+";

  let leadStage = "new";
  if (accreditedStatus === "no" && base.leadTier === "low") {
    leadStage = "declined";
  } else if (base.leadTier === "high") {
    leadStage = "qualified";
  } else if (base.leadTier === "medium") {
    leadStage = "reviewing";
  } else {
    leadStage = "reviewing";
  }

  return {
    ...base,
    leadStage,
    leadPriority: priority ? "high" : "normal"
  };
}

export function buildFollowUpSequence(lead) {
  const qualifies = lead.leadStage === "qualified";

  return [
    {
      key: "acknowledgment",
      step: 1,
      status: "new",
      owner: lead.leadOwner,
      subject: "Thank you for reaching out to Yellow Rose Capital",
      purpose: "Confirm receipt and set expectations for a private follow-up.",
      body:
        "Thank you for your note. We have received your inquiry and will review it as part of our private investor process. If there appears to be a fit, our team will follow up directly."
    },
    {
      key: "qualification_review",
      step: 2,
      status: qualifies ? "qualified" : "reviewing",
      owner: lead.leadOwner,
      subject: "Investor qualification review",
      purpose: "Confirm fit before sharing confidential materials.",
      body:
        "We are reviewing your inquiry to determine whether the opportunity is a fit for a private conversation. If so, we will follow up with the next steps and any confidential materials that are appropriate for your situation."
    },
    {
      key: "private_materials_handoff",
      step: 3,
      status: qualifies ? "active_conversation" : "reviewing",
      owner: lead.leadOwner,
      subject: "Private materials handoff",
      purpose: "Move qualified investors into the confidential materials flow.",
      body:
        "If the investor remains a fit after review, the team can provide confidential offering materials and continue the conversation privately."
    }
  ];
}

export function buildLeadRecord(input = {}) {
  const leadCore = classifyLead(input);
  const leadOwner = titleCase(process.env.LEAD_OWNER_NAME) || DEFAULT_OWNER;
  const leadId = buildLeadId();
  const sourcePage = titleCase(input.sourcePage) || "/contact";
  const source = titleCase(input.source) || "website_contact_form";

  return {
    leadId,
    leadOwner,
    leadStatus: leadCore.leadStage,
    leadPriority: leadCore.leadPriority,
    leadScore: leadCore.leadScore,
    leadTier: leadCore.leadTier,
    source,
    sourcePage,
    route: sourcePage,
    ...leadCore,
    nextActions: buildFollowUpSequence({
      ...leadCore,
      leadOwner
    }),
    operationalNotes: [
      "Lead is intended for private investor follow-up only.",
      "Do not send public solicitation language.",
      "Use confidential materials only if the investor is qualified."
    ],
    createdAt: new Date().toISOString()
  };
}

export function buildWorkflowSummary(lead) {
  return {
    leadId: lead.leadId,
    leadOwner: lead.leadOwner,
    leadStatus: lead.leadStatus,
    leadPriority: lead.leadPriority,
    leadScore: lead.leadScore,
    leadTier: lead.leadTier,
    nextAction: lead.nextActions[0],
    handoffState: lead.leadStatus === "qualified" ? "private_materials_ready" : "review_in_progress",
    funnelStage: lead.leadStatus === "qualified" ? "qualified" : "reviewing"
  };
}

export function getRoutingConfig() {
  return {
    crmWebhookUrl: process.env.LEAD_CRM_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL || "",
    notificationWebhookUrl: process.env.LEAD_NOTIFICATION_WEBHOOK_URL || "",
    followUpWebhookUrl: process.env.LEAD_FOLLOWUP_WEBHOOK_URL || "",
    auditWebhookUrl: process.env.LEAD_AUDIT_WEBHOOK_URL || "",
    leadOwner: titleCase(process.env.LEAD_OWNER_NAME) || DEFAULT_OWNER
  };
}

export async function postJson(url, payload) {
  if (!url) {
    return { ok: false, skipped: true };
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText
  };
}

export async function dispatchLeadWorkflow(lead) {
  const config = getRoutingConfig();
  const deliveryResults = [];

  const intakePayload = {
    channel: "intake",
    lead,
    workflow: buildWorkflowSummary(lead)
  };

  const auditPayload = {
    channel: "audit",
    leadId: lead.leadId,
    leadOwner: lead.leadOwner,
    leadStatus: lead.leadStatus,
    leadPriority: lead.leadPriority,
    leadScore: lead.leadScore,
    leadTier: lead.leadTier,
    source: lead.source,
    sourcePage: lead.sourcePage,
    nextActions: lead.nextActions
  };

  const notificationPayload = {
    channel: "notification",
    leadId: lead.leadId,
    leadOwner: lead.leadOwner,
    leadStatus: lead.leadStatus,
    leadPriority: lead.leadPriority,
    leadScore: lead.leadScore,
    leadTier: lead.leadTier,
    investorType: lead.investorType,
    accreditedStatus: lead.accreditedStatus,
    investmentRange: lead.investmentRange,
    messagePreview: typeof lead.message === "string" ? lead.message.slice(0, 160) : "",
    flag: lead.leadPriority === "high" ? "urgent" : "normal"
  };

  const followUpPayload = {
    channel: "follow_up",
    leadId: lead.leadId,
    leadOwner: lead.leadOwner,
    leadStatus: lead.leadStatus,
    leadPriority: lead.leadPriority,
    leadScore: lead.leadScore,
    leadTier: lead.leadTier,
    sequence: lead.nextActions,
    templates: {
      acknowledgment: lead.nextActions[0],
      qualificationReview: lead.nextActions[1],
      privateMaterials: lead.nextActions[2]
    }
  };

  if (config.crmWebhookUrl) {
    deliveryResults.push({
      destination: "crm",
      ...((await postJson(config.crmWebhookUrl, intakePayload)) || {})
    });
  } else {
    deliveryResults.push({ destination: "crm", ok: false, skipped: true });
  }

  if (lead.leadPriority === "high" && config.notificationWebhookUrl) {
    deliveryResults.push({
      destination: "notification",
      ...((await postJson(config.notificationWebhookUrl, notificationPayload)) || {})
    });
  } else if (lead.leadPriority === "high") {
    deliveryResults.push({ destination: "notification", ok: false, skipped: true });
  }

  if (config.followUpWebhookUrl) {
    deliveryResults.push({
      destination: "follow_up",
      ...((await postJson(config.followUpWebhookUrl, followUpPayload)) || {})
    });
  } else {
    deliveryResults.push({ destination: "follow_up", ok: false, skipped: true });
  }

  if (config.auditWebhookUrl) {
    deliveryResults.push({
      destination: "audit",
      ...((await postJson(config.auditWebhookUrl, auditPayload)) || {})
    });
  } else {
    deliveryResults.push({ destination: "audit", ok: false, skipped: true });
  }

  const failedDeliveries = deliveryResults.filter((item) => item.skipped !== true && item.ok === false);

  return {
    deliveryResults,
    failedDeliveries,
    summary: {
      leadId: lead.leadId,
      leadOwner: lead.leadOwner,
      leadStatus: lead.leadStatus,
      leadPriority: lead.leadPriority,
      leadScore: lead.leadScore,
      leadTier: lead.leadTier,
      destinations: deliveryResults.map((item) => item.destination)
    }
  };
}

export function buildAcknowledgementCopy(lead) {
  const intro =
    lead.leadStatus === "qualified"
      ? "Thank you for reaching out. Your inquiry has been received and appears to be a potential fit for a private conversation."
      : "Thank you for reaching out. Your inquiry has been received and will be reviewed as part of our private investor process.";

  return {
    subject: "Thank you for reaching out to Yellow Rose Capital",
    body:
      `${intro} If appropriate, we will follow up with confidential materials and next steps. ` +
      "This website is provided for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities."
  };
}
