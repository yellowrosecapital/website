# Lead Operations Workflow

## Purpose
This document defines how inbound investor inquiries move from the public contact form into a private follow-up process.

## Intake Fields
- Name
- Email
- Phone
- Investor type
- Accredited status
- Potential investment size
- Message

## Lead Statuses
- `new`: inquiry received and awaiting review
- `reviewing`: team is assessing fit and qualification
- `qualified`: investor appears to be a fit for a private conversation
- `declined`: inquiry does not fit the current investor profile or process
- `active_conversation`: confidential materials and follow-up are in progress

## Routing Rules
- Score every inquiry from the public contact form.
- Prioritize inquiries that indicate accredited status, higher intent, or meaningful capital range.
- Email every inquiry to Nick and Jacob through the configured SMTP contact mailbox.
- Route every inquiry to the configured CRM or inbox destination.
- Send a notification only for high-priority leads.
- Send follow-up sequence data to the configured automation endpoint if one is available.
- Send an audit copy to the logging or archival destination if one is configured.

## Follow-Up Sequence
1. Acknowledgment
2. Qualification review
3. Private materials handoff

## Ownership
- Every lead is assigned a single internal owner.
- The default owner is controlled by `LEAD_OWNER_NAME`.
- If no owner is configured, the workflow uses `Investor Relations`.

## Failure Handling
- If the configured SMTP contact mailbox is not set up in production, the contact endpoint returns a configuration error.
- If a configured destination fails, the contact endpoint returns an error so the inquiry is not silently dropped.
- If the production workflow has no configured lead destination, the API returns a configuration error.
- Local development can run without external destinations for testing.
- Operational teams should review failed deliveries before reopening the inquiry.

## Public Boundary
- Do not place offering details on the public website.
- Do not send public solicitation language in responses or follow-up templates.
- Share confidential materials only after qualification and only through private channels.

## Maintenance Workflow
1. Review the inquiry in the CRM or inbox.
2. Update lead status from `new` to the appropriate operational state.
3. Trigger the acknowledgment or qualification follow-up if needed.
4. Send confidential materials only after fit is confirmed.
5. Log outcomes for future reporting and process improvement.
