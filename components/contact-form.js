"use client";

import { useState } from "react";

import { siteContent } from "@/lib/site-content";
import { trackEvent } from "@/lib/tracking";

const initialState = {
  name: "",
  email: "",
  phone: "",
  investorType: "Accredited individual investor",
  accreditedStatus: "Yes",
  investmentRange: "Not sure yet",
  message: "",
  company: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ kind: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    trackEvent("contact_submit_attempt", {
      page_type: "contact",
      investor_type: form.investorType,
      accredited_status: form.accreditedStatus,
      investment_range: form.investmentRange
    });
    setIsSubmitting(true);
    setStatus({ kind: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.message || siteContent.contact.errorMessage);
      }

      setStatus({ kind: "success", message: payload?.message || siteContent.contact.successMessage });
      setForm(initialState);
      trackEvent("contact_submit_success", {
        page_type: "contact",
        lead_tier: payload?.leadTier || "unknown",
        lead_score: payload?.leadScore || 0
      });
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : siteContent.contact.errorMessage
      });
      trackEvent("contact_submit_error", {
        page_type: "contact",
        message: error instanceof Error ? error.message : "unknown"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={(e) => updateField("company", e.target.value)}
        style={{ display: "none" }}
        aria-hidden="true"
      />

      <div className="field-grid">
        <label className="field">
          <span>{siteContent.contact.fields.name}</span>
          <input required value={form.name} onChange={(e) => updateField("name", e.target.value)} />
        </label>

        <label className="field">
          <span>{siteContent.contact.fields.email}</span>
          <input required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} />
        </label>
      </div>

      <div className="field-grid">
        <label className="field">
          <span>{siteContent.contact.fields.phone}</span>
          <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} />
        </label>

        <label className="field">
          <span>{siteContent.contact.fields.investorType}</span>
          <select value={form.investorType} onChange={(e) => updateField("investorType", e.target.value)}>
            {siteContent.contact.investorTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="field-grid">
        <label className="field">
          <span>{siteContent.contact.fields.accreditedStatus}</span>
          <select value={form.accreditedStatus} onChange={(e) => updateField("accreditedStatus", e.target.value)}>
            {siteContent.contact.accreditedStatuses.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>{siteContent.contact.fields.investmentRange}</span>
          <select value={form.investmentRange} onChange={(e) => updateField("investmentRange", e.target.value)}>
            {siteContent.contact.investmentRanges.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="field">
        <span>{siteContent.contact.fields.message}</span>
        <textarea
          required
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Share a little about what you are looking for."
        />
      </label>

      <div className="button-row">
        <button type="submit" className="button button-primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </div>

      {status.kind === "success" ? (
        <div className="form-status form-status-success">{status.message}</div>
      ) : null}

      {status.kind === "error" ? (
        <div className="form-status form-status-error">{status.message}</div>
      ) : null}

      <p className="fine-print">
        Submission starts a private conversation only. It does not constitute an offer or an invitation to invest.
      </p>
    </form>
  );
}
