# Investor Communications Workflow

## Purpose
This document defines the private communications process for qualified investors and existing capital partners.

## Relationship States
- `prospect`: inquiry received but not yet qualified for private investor communications
- `qualified`: a fit for private communication, but not yet subscribed
- `subscribed`: an investor who has completed the private subscription process
- `active_investor`: an investor currently receiving private reporting and updates
- `inactive`: a relationship that should not receive ongoing communications

## Approved Communication Types
- Investor update
- Distribution notice
- Quarterly summary
- Private announcement

## Delivery Rules
- Send only to qualified, subscribed, or active investors.
- Do not send private communications to the public.
- Require consent or an existing relationship before delivery.
- Use a private API key for the internal communications endpoint.
- Log every attempt with recipient, template, audience segment, and delivery result.

## Operational Record
Each communication record should capture:
- communication ID
- template type
- subject
- owner
- source lead ID when available
- recipient list
- relationship state
- investor segment
- timestamps
- delivery status
- compliance notes

## Drafting Workflow
1. Select a template.
2. Confirm the intended investor segment.
3. Populate the private communication with the relevant context.
4. Review for informational tone and compliance boundaries.
5. Approve delivery through the internal endpoint.
6. Record the delivery outcome.

## Compliance Guardrails
- Do not publish private communications on the public site.
- Do not introduce guarantees or return language.
- Keep detailed economics and confidential offering language out of the communication templates.
- Maintain the same calm, relationship-based voice used across the public site.

