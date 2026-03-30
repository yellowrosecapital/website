# Yellow Rose Capital Website

This repository contains the Stage 1 foundation and the Stage 2 production app scaffold for the Yellow Rose Capital website.

## Included
- scope and compliance foundation
- 8-page sitemap
- page content matrix
- copy and compliance rules
- asset inventory
- Next.js app structure with shared layout and route pages

## Local Setup
1. Install Node.js 18+.
2. Run `npm install` in this folder.
3. Use `npm run dev` to start the site locally.
4. Use `npm run build` before merging to GitHub.
5. Copy `.env.example` to `.env.local` if you want sitemap, contact form, and analytics settings to be explicit.

## Lead Operations
- Inbound contact submissions are routed through the Stage 6 workflow in `lib/lead-workflow.js`.
- Configure at least one destination before accepting production inquiries:
  - `LEAD_CRM_WEBHOOK_URL`
  - `LEAD_NOTIFICATION_WEBHOOK_URL`
  - `LEAD_FOLLOWUP_WEBHOOK_URL`
  - `LEAD_AUDIT_WEBHOOK_URL`
- `LEAD_CRM_WEBHOOK_URL` falls back to `CONTACT_WEBHOOK_URL` when it is not set.
- See `docs/lead-ops-workflow.md` for lead states, routing rules, and failure handling.

## Investor Communications
- Private investor communications are handled through `app/api/investor-communications/route.js` and `lib/investor-relations.js`.
- Supported private templates:
  - investor update
  - distribution notice
  - quarterly summary
  - private announcement
- Configure a private API key before using the internal communications endpoint:
  - `INVESTOR_RELATIONS_API_KEY`
- Configure the private delivery destinations as needed:
  - `INVESTOR_COMMUNICATIONS_WEBHOOK_URL`
  - `INVESTOR_COMMUNICATIONS_NOTIFICATION_WEBHOOK_URL`
  - `INVESTOR_COMMUNICATIONS_AUDIT_WEBHOOK_URL`
  - `INVESTOR_COMMUNICATIONS_ARCHIVE_WEBHOOK_URL`
- See `docs/investor-communications-workflow.md` for the relationship states, approval flow, and delivery rules.

## Asset Locations
- Logo files should live in `public/logo/`
- Founder and team photography should live in `public/images/`
- The site is already wired to use:
  - `public/logo/yellow-rose-capital-logo.svg`
  - `public/images/yellow-rose-capital-team-photo.jpg`
  - `public/og/yellow-rose-capital-share.svg`

## Source Draft
The current `yellow_rose_capital_website.jsx` file remains a concept draft and reference point only.

## Next Step
Connect the repo to GitHub and Vercel, install dependencies, and verify the app in a preview deployment.
