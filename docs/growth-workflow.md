# Growth Workflow

## Purpose
This document defines how Yellow Rose Capital can publish educational content, track conversions, and update public-facing marketing copy without changing the core compliant site structure.

## Publishing Workflow
1. Draft a new article or snippet in `lib/growth-content.js`.
2. Review the copy for informational tone and compliance guardrails.
3. Add or update the article metadata so the page gets a canonical URL and social preview data.
4. Verify the Insights index page links to the new article.
5. Confirm the sitemap automatically includes the new route.
6. Deploy a preview build before pushing to production.

## Content Rules
- Educational first
- No return hype
- No general solicitation language
- No public offering details
- No guarantee language
- Keep detailed economics inside private materials

## Tracking Workflow
- Use the site-wide page view tracker for route engagement.
- Track CTA clicks on the homepage, header, and Insights pages.
- Track contact form attempts, validation errors, and successful submissions.
- Review analytics payloads before wiring them to an external CRM or email automation tool.

## Update Workflow
- Update reusable snippets in `lib/growth-content.js` instead of hardcoding copy on pages.
- Keep the contact, disclaimer, and brand language in shared config files.
- Avoid changing the shared layout unless a site-wide behavior change is required.

