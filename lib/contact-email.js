import nodemailer from "nodemailer";

const CONTACT_EMAIL_RECIPIENTS = ["nick@sellmysanantoniohouse.com", "jacob@mdrealty.com"];
const CONTACT_EMAIL_SUBJECT = "New Investor - Yellow Rose Capital";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizePort(value) {
  const parsed = Number.parseInt(String(value ?? ""), 10);

  return Number.isFinite(parsed) && parsed > 0 ? parsed : 587;
}

function formatField(value) {
  const trimmed = typeof value === "string" ? value.trim() : "";

  return trimmed || "Not provided";
}

function buildPlainTextEmail(lead) {
  return [
    "New investor inquiry received through the Yellow Rose Capital contact form.",
    "",
    `Name: ${formatField(lead.name)}`,
    `Email: ${formatField(lead.email)}`,
    `Phone: ${formatField(lead.phone)}`,
    `Investor type: ${formatField(lead.investorType)}`,
    `Accredited status: ${formatField(lead.accreditedStatus)}`,
    `Investment range: ${formatField(lead.investmentRange)}`,
    "",
    "Message:",
    formatField(lead.message),
    "",
    `Lead ID: ${formatField(lead.leadId)}`,
    `Source page: ${formatField(lead.sourcePage)}`,
    `Submitted at: ${formatField(lead.createdAt)}`
  ].join("\n");
}

function buildHtmlEmail(lead) {
  const rows = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Investor type", lead.investorType],
    ["Accredited status", lead.accreditedStatus],
    ["Investment range", lead.investmentRange],
    ["Lead ID", lead.leadId],
    ["Source page", lead.sourcePage],
    ["Submitted at", lead.createdAt]
  ]
    .map(
      ([label, value]) => `
        <tr>
          <th align="left" style="padding:6px 12px 6px 0; vertical-align:top; color:#5a4a2b; font-size:14px;">${escapeHtml(label)}</th>
          <td style="padding:6px 0; vertical-align:top; color:#1f1f1f; font-size:14px;">${escapeHtml(formatField(value))}</td>
        </tr>
      `
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif; color:#1f1f1f; line-height:1.5;">
      <h2 style="margin:0 0 12px; font-size:20px;">New investor inquiry received</h2>
      <p style="margin:0 0 16px;">A new inquiry was submitted through the Yellow Rose Capital contact form.</p>
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; margin-bottom:16px;">
        ${rows}
      </table>
      <h3 style="margin:0 0 8px; font-size:16px;">Message</h3>
      <div style="white-space:pre-wrap; padding:12px 14px; background:#faf7ef; border:1px solid #e6dcc9; border-radius:10px;">${escapeHtml(formatField(lead.message))}</div>
    </div>
  `;
}

export function getContactEmailConfig() {
  const host = typeof process.env.CONTACT_EMAIL_SMTP_HOST === "string" ? process.env.CONTACT_EMAIL_SMTP_HOST.trim() : "";
  const user = typeof process.env.CONTACT_EMAIL_SMTP_USER === "string" ? process.env.CONTACT_EMAIL_SMTP_USER.trim() : "";
  const password =
    typeof process.env.CONTACT_EMAIL_SMTP_PASSWORD === "string" ? process.env.CONTACT_EMAIL_SMTP_PASSWORD.trim() : "";
  const from =
    typeof process.env.CONTACT_EMAIL_FROM === "string" && process.env.CONTACT_EMAIL_FROM.trim()
      ? process.env.CONTACT_EMAIL_FROM.trim()
      : user;
  const port = normalizePort(process.env.CONTACT_EMAIL_SMTP_PORT);
  const secure = String(process.env.CONTACT_EMAIL_SMTP_SECURE || "").toLowerCase() === "true" || port === 465;

  return {
    configured: Boolean(host && user && password && from),
    host,
    port,
    secure,
    user,
    password,
    from,
    recipients: CONTACT_EMAIL_RECIPIENTS,
    subject: CONTACT_EMAIL_SUBJECT
  };
}

export async function sendContactInquiryEmail(lead) {
  const config = getContactEmailConfig();

  if (!config.configured) {
    return {
      ok: false,
      skipped: true,
      reason: "contact_email_not_configured"
    };
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.password
    }
  });

  const message = {
    from: config.from,
    to: config.recipients,
    subject: config.subject,
    replyTo: formatField(lead.email),
    text: buildPlainTextEmail(lead),
    html: buildHtmlEmail(lead)
  };

  try {
    const result = await transporter.sendMail(message);

    return {
      ok: true,
      messageId: result.messageId,
      recipients: config.recipients,
      subject: config.subject
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unable to send contact inquiry email."
    };
  }
}
