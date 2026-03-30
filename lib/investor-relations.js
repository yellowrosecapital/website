const DEFAULT_OWNER = "Investor Relations";

export const relationshipStates = {
  prospect: "prospect",
  qualified: "qualified",
  subscribed: "subscribed",
  activeInvestor: "active_investor",
  inactive: "inactive"
};

export const communicationTypes = {
  investorUpdate: "investor_update",
  distributionNotice: "distribution_notice",
  quarterlySummary: "quarterly_summary",
  privateAnnouncement: "private_announcement"
};

const PRIVATE_SEGMENTS = new Set([
  relationshipStates.qualified,
  relationshipStates.subscribed,
  relationshipStates.activeInvestor
]);

const TEMPLATE_LIBRARY = {
  [communicationTypes.investorUpdate]: {
    title: "Investor update",
    subject: "Yellow Rose Capital investor update",
    audience: "qualified_and_existing_investors",
    allowedStates: [
      relationshipStates.qualified,
      relationshipStates.subscribed,
      relationshipStates.activeInvestor
    ],
    summary:
      "A private update on portfolio activity, underwriting discipline, and operational notes for qualified or existing investors.",
    body:
      "This private update is intended for qualified or existing investors only. It summarizes current activity, portfolio direction, and a few operational notes that help keep investors informed without turning the communication into a public solicitation."
  },
  [communicationTypes.distributionNotice]: {
    title: "Distribution notice",
    subject: "Yellow Rose Capital distribution notice",
    audience: "existing_investors",
    allowedStates: [relationshipStates.subscribed, relationshipStates.activeInvestor],
    summary:
      "A private notice used when a distribution is ready or when the team needs to confirm private payment details.",
    body:
      "This private notice is reserved for existing investors. It is used to communicate a distribution event, relevant timing, and any administrative items that may be required to process the notice privately."
  },
  [communicationTypes.quarterlySummary]: {
    title: "Quarterly summary",
    subject: "Yellow Rose Capital quarterly investor summary",
    audience: "qualified_and_existing_investors",
    allowedStates: [
      relationshipStates.qualified,
      relationshipStates.subscribed,
      relationshipStates.activeInvestor
    ],
    summary:
      "A periodic reporting summary covering portfolio context, operating notes, and investor communications.",
    body:
      "This quarterly summary is intended for qualified or existing investors. It provides a concise private reporting overview and reinforces the firm's relationship-based communication process."
  },
  [communicationTypes.privateAnnouncement]: {
    title: "Private announcement",
    subject: "Private investor announcement from Yellow Rose Capital",
    audience: "qualified_and_existing_investors",
    allowedStates: [
      relationshipStates.qualified,
      relationshipStates.subscribed,
      relationshipStates.activeInvestor
    ],
    summary:
      "A private announcement used for investor-only operational updates, timing changes, or confidential notices.",
    body:
      "This private announcement is intended for qualified or existing investors only. It should be used for private operational updates and confidential notices, not for public website distribution."
  }
};

function normalize(value) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

function titleCase(value) {
  return typeof value === "string" && value.trim() ? value.trim() : "";
}

function buildId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function asArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (value === undefined || value === null || value === "") {
    return [];
  }

  return [value];
}

function normalizeRelationshipState(value) {
  const normalized = normalize(value);

  if (normalized === relationshipStates.qualified) return relationshipStates.qualified;
  if (normalized === relationshipStates.subscribed) return relationshipStates.subscribed;
  if (normalized === relationshipStates.activeInvestor) return relationshipStates.activeInvestor;
  if (normalized === relationshipStates.inactive) return relationshipStates.inactive;

  return relationshipStates.prospect;
}

function resolveOwner(value) {
  return titleCase(value) || process.env.INVESTOR_RELATIONS_OWNER_NAME || process.env.LEAD_OWNER_NAME || DEFAULT_OWNER;
}

function resolveTemplate(templateKey) {
  const normalizedKey = normalize(templateKey);
  return TEMPLATE_LIBRARY[normalizedKey] || null;
}

function resolveSegment(relationshipState) {
  const state = normalizeRelationshipState(relationshipState);

  if (state === relationshipStates.qualified) return "qualified";
  if (state === relationshipStates.subscribed) return "subscribed";
  if (state === relationshipStates.activeInvestor) return "active_investor";
  return state;
}

export function buildInvestorProfile(input = {}) {
  const relationshipState = normalizeRelationshipState(
    input.relationshipState || input.leadStatus || input.investorStatus
  );

  return {
    investorId: titleCase(input.investorId) || buildId("inv"),
    leadId: titleCase(input.leadId) || "",
    relationshipState,
    investorSegment: resolveSegment(relationshipState),
    owner: resolveOwner(input.owner),
    name: titleCase(input.name) || "Investor",
    email: titleCase(input.email) || "",
    phone: titleCase(input.phone) || "",
    accreditedStatus: titleCase(input.accreditedStatus) || "",
    consentToPrivateUpdates:
      input.consentToPrivateUpdates === undefined ? true : Boolean(input.consentToPrivateUpdates),
    source: titleCase(input.source) || "private_relationship",
    createdAt: titleCase(input.createdAt) || new Date().toISOString()
  };
}

export function buildInvestorProfileFromLead(lead = {}) {
  return buildInvestorProfile({
    investorId: lead.investorId || lead.leadId || lead.id,
    leadId: lead.leadId || lead.id,
    relationshipState: lead.relationshipState || lead.leadStatus || lead.investorStatus,
    owner: lead.owner || lead.leadOwner,
    name: lead.name || lead.fullName || lead.contactName,
    email: lead.email || lead.contactEmail,
    phone: lead.phone || lead.contactPhone,
    accreditedStatus: lead.accreditedStatus,
    consentToPrivateUpdates: lead.consentToPrivateUpdates,
    source: lead.source || lead.sourcePage,
    createdAt: lead.createdAt
  });
}

export function buildInvestorCommunicationTemplate(templateKey, context = {}) {
  const template = resolveTemplate(templateKey);
  if (!template) {
    return null;
  }

  const reportingPeriod = titleCase(context.reportingPeriod) || "the current period";
  const distributionDate = titleCase(context.distributionDate) || "the scheduled payment date";
  const announcementTitle = titleCase(context.announcementTitle) || "private investor update";
  const portfolioNote = titleCase(context.portfolioNote) || "";

  const bodyByType = {
    [communicationTypes.investorUpdate]: [
      template.body,
      `Reporting period: ${reportingPeriod}.`,
      portfolioNote ? `Portfolio note: ${portfolioNote}.` : "Any detailed portfolio notes remain within the private investor process."
    ].join(" "),
    [communicationTypes.distributionNotice]: [
      template.body,
      `Distribution timing: ${distributionDate}.`,
      "Please review the private payment and administrative instructions associated with this notice."
    ].join(" "),
    [communicationTypes.quarterlySummary]: [
      template.body,
      `Quarterly reporting period: ${reportingPeriod}.`,
      "The team will continue to share private reporting details through the appropriate investor channel."
    ].join(" "),
    [communicationTypes.privateAnnouncement]: [
      template.body,
      `${announcementTitle}.`,
      portfolioNote ? `Additional context: ${portfolioNote}.` : "Additional details should remain in private investor channels."
    ].join(" ")
  };

  return {
    templateKey: normalize(templateKey),
    title: template.title,
    subject: context.subject ? titleCase(context.subject) : template.subject,
    audience: template.audience,
    allowedStates: template.allowedStates,
    summary: template.summary,
    body: context.body ? titleCase(context.body) : bodyByType[normalize(templateKey)] || template.body,
    complianceNotes: [
      "Private communication only.",
      "Do not distribute to the public.",
      "Keep detailed economics and offering language in private materials."
    ]
  };
}

export function buildInvestorCommunicationRecord(input = {}) {
  const template = resolveTemplate(input.templateKey);
  if (!template) {
    throw new Error("Unsupported investor communication template.");
  }

  const recipients = asArray(input.recipients).map((recipient, index) => {
    const profile = buildInvestorProfile({
      ...recipient,
      owner: recipient?.owner || input.owner,
      leadId: recipient?.leadId || input.leadId,
      relationshipState: recipient?.relationshipState || recipient?.leadStatus || input.relationshipState,
      source: recipient?.source || input.source
    });

    return {
      recipientId: profile.investorId || buildId("recipient"),
      sequence: index + 1,
      ...profile
    };
  });

  const communication = buildInvestorCommunicationTemplate(input.templateKey, input.context);
  const owner = resolveOwner(input.owner);
  const communicationId = titleCase(input.communicationId) || buildId("com");
  const sentAt = titleCase(input.sentAt) || new Date().toISOString();

  return {
    communicationId,
    communicationType: normalize(input.templateKey),
    communicationTitle: communication.title,
    subject: communication.subject,
    body: communication.body,
    audience: communication.audience,
    allowedStates: communication.allowedStates,
    summary: communication.summary,
    owner,
    sourceLeadId: titleCase(input.sourceLeadId) || "",
    sourceCampaign: titleCase(input.sourceCampaign) || "private_investor_relations",
    recipients,
    recipientCount: recipients.length,
    deliveryStatus: "queued",
    deliveryResult: "pending",
    deliveryTargets: [],
    sentAt,
    createdAt: sentAt,
    communicationHistory: recipients.map((recipient) => ({
      communicationId,
      recipientId: recipient.recipientId,
      recipientName: recipient.name,
      recipientEmail: recipient.email,
      relationshipState: recipient.relationshipState,
      investorSegment: recipient.investorSegment,
      sentAt,
      templateKey: normalize(input.templateKey),
      owner,
      deliveryStatus: "queued"
    })),
    compliance: {
      publicIndexing: false,
      requiresQualification: true,
      optInRequired: true
    },
    complianceNotes: communication.complianceNotes
  };
}

export function canDeliverPrivateCommunication(record) {
  const recipients = asArray(record?.recipients);
  if (recipients.length === 0) {
    return false;
  }

  return recipients.every((recipient) => {
    const state = normalizeRelationshipState(recipient.relationshipState || recipient.leadStatus);
    if (!PRIVATE_SEGMENTS.has(state)) {
      return false;
    }

    if (recipient.consentToPrivateUpdates === false) {
      return false;
    }

    if (state === relationshipStates.inactive || state === relationshipStates.prospect) {
      return false;
    }

    return true;
  });
}

export function getInvestorRelationsConfig() {
  return {
    owner: resolveOwner(process.env.INVESTOR_RELATIONS_OWNER_NAME || process.env.LEAD_OWNER_NAME),
    apiKey: process.env.INVESTOR_RELATIONS_API_KEY || "",
    communicationsWebhookUrl: process.env.INVESTOR_COMMUNICATIONS_WEBHOOK_URL || "",
    auditWebhookUrl: process.env.INVESTOR_COMMUNICATIONS_AUDIT_WEBHOOK_URL || "",
    notificationWebhookUrl: process.env.INVESTOR_COMMUNICATIONS_NOTIFICATION_WEBHOOK_URL || "",
    archiveWebhookUrl: process.env.INVESTOR_COMMUNICATIONS_ARCHIVE_WEBHOOK_URL || "",
    allowPublicFallback: process.env.NODE_ENV !== "production"
  };
}

async function postJson(url, payload) {
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

export async function dispatchInvestorCommunication(record) {
  const config = getInvestorRelationsConfig();
  const deliveryResults = [];

  const payload = {
    channel: "investor_relations",
    communication: record,
    history: record.communicationHistory
  };

  if (config.communicationsWebhookUrl) {
    deliveryResults.push({
      destination: "communications",
      ...(await postJson(config.communicationsWebhookUrl, payload))
    });
  } else {
    deliveryResults.push({ destination: "communications", ok: false, skipped: true });
  }

  if (config.notificationWebhookUrl && record.recipientCount > 0) {
    deliveryResults.push({
      destination: "notification",
      ...(await postJson(config.notificationWebhookUrl, payload))
    });
  } else if (record.recipientCount > 0) {
    deliveryResults.push({ destination: "notification", ok: false, skipped: true });
  }

  if (config.auditWebhookUrl) {
    deliveryResults.push({
      destination: "audit",
      ...(await postJson(config.auditWebhookUrl, payload))
    });
  } else {
    deliveryResults.push({ destination: "audit", ok: false, skipped: true });
  }

  if (config.archiveWebhookUrl) {
    deliveryResults.push({
      destination: "archive",
      ...(await postJson(config.archiveWebhookUrl, payload))
    });
  } else {
    deliveryResults.push({ destination: "archive", ok: false, skipped: true });
  }

  const failedDeliveries = deliveryResults.filter((item) => item.skipped !== true && item.ok === false);
  const deliveredAt = new Date().toISOString();

  return {
    deliveryResults,
    failedDeliveries,
    summary: {
      communicationId: record.communicationId,
      communicationType: record.communicationType,
      owner: record.owner,
      recipientCount: record.recipientCount,
      audience: record.audience,
      deliveredAt,
      destinations: deliveryResults.map((item) => item.destination)
    }
  };
}

export function buildInvestorCommunicationLog(record, deliveryOutcome = {}) {
  const recipients = asArray(record?.recipients);
  const deliveredAt = new Date().toISOString();
  const deliveryResults = asArray(deliveryOutcome.deliveryResults);
  const successfulDeliveries = deliveryResults.filter((item) => item.ok === true);
  const failedDeliveries = deliveryResults.filter((item) => item.skipped !== true && item.ok === false);
  const skippedDeliveries = deliveryResults.filter((item) => item.skipped === true);
  const deliveryStatus =
    successfulDeliveries.length > 0
      ? failedDeliveries.length > 0
        ? "partial"
        : "sent"
      : skippedDeliveries.length === deliveryResults.length
        ? "skipped"
        : "failed";

  return {
    communicationId: record.communicationId,
    communicationType: record.communicationType,
    communicationTitle: record.communicationTitle,
    subject: record.subject,
    owner: record.owner,
    sourceLeadId: record.sourceLeadId,
    recipientCount: record.recipientCount,
    audience: record.audience,
    sentAt: record.sentAt || deliveredAt,
    deliveredAt,
    deliveryStatus,
    deliverySummary: deliveryOutcome.summary || {},
    recipientDeliveryRecords: recipients.map((recipient) => ({
      communicationId: record.communicationId,
      recipientId: recipient.recipientId,
      recipientName: recipient.name,
      recipientEmail: recipient.email,
      relationshipState: recipient.relationshipState,
      investorSegment: recipient.investorSegment,
      templateKey: record.communicationType,
      deliveryStatus,
      sentAt: record.sentAt || deliveredAt
    })),
    recipients: recipients.map((recipient) => ({
      recipientId: recipient.recipientId,
      name: recipient.name,
      email: recipient.email,
      relationshipState: recipient.relationshipState,
      investorSegment: recipient.investorSegment,
      leadId: recipient.leadId
    })),
    compliance: record.compliance,
    complianceNotes: record.complianceNotes
  };
}
