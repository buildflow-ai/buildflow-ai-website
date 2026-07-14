
# BuildFlow AI — Final Codex Polish, Full-Stack Backend, GitHub Repository, and Live Deployment Prompt

Use the completed BuildFlow AI source project already open in this Codex workspace.

This is the final engineering and launch pass.

Do not rebuild the website from scratch.
Do not replace the approved Signal & Flow direction.
Do not generate new founder or workflow images.
Do not stop after giving instructions.
Inspect the source, make the required edits, implement the real backend, test everything, push the source to GitHub, deploy the working full-stack website, and verify the public URL.

## Important hosting architecture

The source code and deployment history must live in GitHub.

The live full-stack application must be deployed from that GitHub repository to Cloudflare Workers using the project’s existing Vinext/Cloudflare structure.

Do not use GitHub Pages for the production deployment because the website now requires server-side form handling and database access.

Use the free Cloudflare `workers.dev` URL for now. A custom domain will be connected later.

Target architecture:

- GitHub repository: source code, version history, CI/CD
- GitHub Actions: automated checks and deployment
- Cloudflare Worker: frontend application and API
- Cloudflare D1: workflow-review submissions
- Cloudflare Turnstile: spam and abuse protection
- `workers.dev`: temporary public website URL
- Custom domain: connected later without redesigning or rebuilding the application

If GitHub or Cloudflare authorization is required, ask only for the minimum required permission at the point it is needed, then continue.

---

# 1. Verified brand information

Brand:

BuildFlow AI

Founder:

Hanan Naseer

Location:

Pakistan

Email:

hanannaseer778@gmail.com

LinkedIn:

https://www.linkedin.com/in/hnautomation

Do not add WhatsApp.

Do not invent:

- Phone number
- Office address
- Team members
- Clients
- Testimonials
- Awards
- Certifications
- Results
- Percentages
- Revenue claims
- Time-saving claims
- Partnerships
- Business statistics

Preserve the main brand line:

Work should flow.
Not be chased.

Preserve the category:

AI Operations Engineering for Growing Service Businesses

---

# 2. Inspect the current project before editing

Read the entire project before making changes, including:

- README.md
- package.json
- package-lock.json
- next.config.ts
- vite.config.ts
- worker/index.ts
- db/index.ts
- db/schema.ts
- app/layout.tsx
- app/components.tsx
- app/globals.css
- app/[[...slug]]/page.tsx
- app/not-found.tsx
- tests
- scripts
- public assets
- existing build and hosting configuration

Determine:

- How Vinext currently renders the Next-style routes
- Which components are shared
- Which routes are generated from generic data
- How metadata is generated
- How the existing Worker handles requests
- Which deployment files are still placeholders
- Whether any source file contains temporary preview-only messaging
- Whether any route is visually complete but semantically shallow
- Whether any asset path will break after deployment
- Whether the current application can be deployed without depending on the OpenAI Sites environment

Do not remove useful compatibility files until the replacement deployment is working and verified.

Create a backup Git branch before major migration edits.

Suggested backup branch:

backup/pre-final-deployment

---

# 3. Locked visual direction

Preserve the approved Signal & Flow identity:

- Deep Ink and Operational Navy dark sections
- Warm Bone and Paper White editorial sections
- Flow Cobalt for active movement
- Human Amber for human attention
- Resolution Mint for successful completion
- Error Red for failure
- Instrument Sans primary typography
- IBM Plex Mono only for operational labels and status text
- Large editorial headings
- Restrained cards and borders
- Flow Rail visual language
- Calm, precise motion
- Real workflow evidence
- Exact founder portrait

Do not introduce:

- Purple AI gradients
- Neon green
- Robots
- Brains
- AI orbs
- Particle storms
- Generic stock photos
- Heavy glassmorphism
- Permanent neon glow
- Fake dashboards
- Random 3D decoration
- Excessive card grids

Do not redesign the logo unless there is a confirmed technical issue.

---

# 4. Exact assets

Use only the supplied assets:

- public/assets/hanan-naseer-founder.png
- public/assets/customer-inquiry-orchestration.png
- public/assets/ai-lead-qualification-crm.png
- public/assets/finance-email-processing.png
- public/assets/document-ingestion-processing.png

Verify that each project uses the correct image.

Critical rule:

Document Ingestion & Processing must not display the Finance Email Processing workflow.

Founder portrait rules:

- Preserve facial identity
- Do not regenerate or retouch the face
- Keep a professional 4:5 crop
- Keep face and shoulders visible on mobile
- Avoid stretching
- Avoid excessive sharpening
- Use intentional object positioning
- Do not repeat the portrait unnecessarily

---

# 5. Final visual edits identified during review

Apply these edits carefully without changing the overall design.

## 5.1 Hero copy

Keep the desktop message and positioning, but improve mobile scanability.

Desktop may retain the fuller explanation.

Use the existing short mobile copy or refine it to:

“We connect the handoffs between your tools, teams, and customers—so work keeps moving.

Rules handle consistency. AI handles interpretation. Your team keeps control.”

Requirements:

- No paragraph should appear as a dense wall on a 360px screen.
- Keep the hero headline as two intentional lines.
- Keep “Not be chased.” readable and visually secondary.
- Keep both CTAs visible early.
- Do not make the hero excessively tall.

## 5.2 Secondary hero CTA

“See Our Work” currently reads more weakly than the main action.

Make it a clear secondary outlined button on desktop and mobile.

Requirements:

- Visually secondary to “Map Your Workflow”
- Minimum 48px touch height
- Strong focus state
- Clear hover state
- No transparent text that looks unrelated to the CTA group

## 5.3 Mobile heading scale

Long page and project headings must not dominate four or five screens.

Replace fixed mobile heading sizes with responsive `clamp()` values.

Specifically test:

- AI Lead Qualification & CRM Automation
- Finance Email Processing Automation
- Customer Inquiry Orchestration
- Document Ingestion & Processing
- Connected systems for the work your business repeats
- For service businesses growing beyond manual coordination

Use balanced wrapping where supported.

Prevent:

- Text clipping
- Horizontal overflow
- Single-word orphan lines where avoidable
- Excessive 4–6 line headings
- Headings touching screen edges

## 5.4 Workflow evidence viewing

All workflow images must be readable.

Create an accessible image zoom/lightbox for workflow evidence.

Requirements:

- Click or keyboard activation opens the full image
- Use a real accessible dialog
- Trap focus while open
- Escape closes it
- Return focus to the trigger
- Include a visible close button
- Include descriptive image alt text
- Prevent background scrolling while open
- Do not require hover
- Do not replace the original image with an invented diagram
- Preserve mobile pinch/scroll usability where practical
- Show a small “View full workflow” affordance

Do not add a complex third-party gallery library unless necessary.

## 5.5 Founder section

Preserve:

- Direct thinking. Direct accountability.
- Founder and AI Operations Engineer
- Current portrait

Improve:

- Crop consistency across mobile and desktop
- Spacing between portrait, title, paragraphs, principles, and CTA
- Founder role visibility
- Paragraph width and scanability

Do not add unsupported experience claims.

## 5.6 Footer

Improve footer polish:

- Increase breathing room between brand block and link columns
- Reduce visual weight of the final copyright/closing line
- Ensure email wraps cleanly on 360px screens
- Preserve Privacy and Terms links
- Preserve LinkedIn
- Do not add WhatsApp
- Ensure every internal link resolves correctly

## 5.7 Copy readability

Do not rewrite the brand voice.

Keep the mature, calm, process-first tone.

Improve only where required:

- Break long paragraphs into shorter readable blocks
- Use maximum readable line widths
- Remove repeated sentences
- Avoid generic AI language
- Keep business outcomes clear
- Do not add emotional hype
- Do not replace “Show us where work gets stuck.”
- Do not replace “Map Your Workflow.”

## 5.8 Navigation

Verify and improve:

- Sticky header does not overlap content
- Menu closes after selecting a route
- Escape closes mobile menu
- Focus moves logically
- Body scroll is controlled while the menu is open
- Current page can be communicated with `aria-current`
- Header remains compact on mobile
- No link is hidden behind the sticky header
- Browser back/forward navigation behaves correctly

## 5.9 Motion

Use restrained functional motion only.

Add subtle transitions only where they explain:

- Workflow progress
- Status change
- Dialog opening
- Navigation state
- Button feedback

Respect `prefers-reduced-motion`.

Do not add:

- Scroll-jacking
- Constant particles
- Bouncy motion
- Cursor trails
- Magnetic buttons
- Long forced loaders
- Autoplay audio

---

# 6. Content and route completeness audit

Do not assume that a route is complete merely because it renders.

Audit all routes against the original master requirements.

Required routes:

- /
- /solutions
- /solutions/revenue-operations
- /solutions/client-operations
- /solutions/internal-operations
- /solutions/custom-ai-systems
- /who-we-help
- /who-we-help/marketing-agencies
- /who-we-help/professional-services
- /who-we-help/recruitment
- /who-we-help/real-estate
- /work
- /work/customer-inquiry-orchestration
- /work/ai-lead-qualification-crm-automation
- /work/finance-email-processing
- /work/document-ingestion-processing
- /approach
- /about
- /workflow-review
- /thank-you
- /thank-you/manual-review
- /privacy
- /terms
- custom 404

Each route must:

- Have unique metadata
- Have a clear page-specific headline
- Contain useful page-specific content
- Not look like an empty template
- Use correct internal links
- Include a relevant CTA where appropriate
- Work on direct URL entry and refresh
- Work with JavaScript delayed
- Not depend on a temporary Sites-only environment

Project pages must include enough page-specific content to explain:

- Operational context
- Where work gets stuck
- Trigger-to-outcome flow
- Real workflow evidence
- Rules, AI, and human roles
- Technologies visibly used
- Honest system outcome
- Related solution
- Final CTA

Do not invent measurable results.

---

# 7. Technical accuracy of the four projects

## Customer Inquiry Orchestration

Represent:

Incoming chat
→ AI receptionist
→ Intent routing
→ Lead qualification, support, meeting, or general enquiry workflow

Do not invent unrelated CRM or finance steps.

## AI Lead Qualification & CRM Automation

Represent:

Form submission
→ LLM-assisted analysis
→ Structured response parsing
→ Existing-person search
→ Pipedrive person/deal create or update
→ Conditional routing
→ Slack and Gmail notification
→ Google Sheets record

Do not invent a human checkpoint if it is not present.

## Finance Email Processing Automation

Represent:

Gmail trigger
→ Conditional check
→ Message retrieval
→ PDF extraction
→ OCR or HTTP processing
→ JavaScript transformation
→ LLM interpretation
→ JSON parsing
→ Validation
→ Google Sheets record
→ Finance alert

## Document Ingestion & Processing

Represent:

Manual trigger
→ Read files from disk
→ Extract PDF text
→ Clean and chunk content
→ Add metadata
→ HTTP processing or embeddings
→ JavaScript transformation
→ Target knowledge or vector storage through HTTP

Do not show Gmail, Google Sheets, or finance alerts for this project unless present in the supplied evidence.

---

# 8. Replace the preview-only form with a real backend

The current workflow-review form must become a real working form.

Do not keep the preview error stating that the backend is not connected.

## 8.1 Backend endpoint

Implement a secure server-side endpoint:

POST /api/workflow-review

Accept only JSON.

Return structured JSON responses.

Suggested response shape:

Successful submission:

{
  "ok": true,
  "submissionId": "...",
  "next": "/thank-you"
}

Validation failure:

{
  "ok": false,
  "code": "VALIDATION_ERROR",
  "fieldErrors": {
    "fieldName": "Message"
  }
}

Rate or abuse failure:

{
  "ok": false,
  "code": "TOO_MANY_REQUESTS"
}

Never expose stack traces or secrets.

## 8.2 D1 database

Use Cloudflare D1.

Create a real Drizzle schema and migration for a table such as:

workflow_submissions

Suggested columns:

- id
- createdAt
- updatedAt
- status
- processType
- mainBottleneck
- currentProcess
- frequency
- peopleInvolved
- currentHandling
- tools
- biggestConsequence
- fullName
- workEmail
- companyName
- companyWebsite
- role
- companySize
- projectStage
- supportType
- consentToContact
- sourcePath
- userAgentSummary
- turnstileVerified
- notificationStatus

Do not store:

- Passwords
- API keys
- Customer records
- Raw confidential documents
- Full IP addresses
- Unnecessary tracking data

Use generated UUIDs.

Use prepared statements or Drizzle safely.

Add indexes only where useful.

Add a migration command and documented deployment command.

## 8.3 Validation

Implement the same validation on the client and server.

Server validation is authoritative.

Validate:

- Required fields
- Maximum lengths
- Email syntax
- URL syntax when provided
- Allowed option values
- Plain-text input
- No HTML injection
- Reasonable total request size

Normalize:

- Whitespace
- Email casing
- Empty optional values

Do not over-collect data.

## 8.4 Spam protection

Integrate Cloudflare Turnstile.

Requirements:

- Add a visible or managed Turnstile widget appropriately
- Verify every token server-side
- Reject missing, invalid, reused, or expired tokens
- Add a hidden honeypot field
- Add rate limiting
- Do not rely only on client validation

For rate limiting:

- Prefer a Cloudflare-native rate-limiting binding when available
- Otherwise implement a privacy-conscious fallback
- Do not persist raw IP addresses
- Hash any temporary abuse key using a secret salt
- Return HTTP 429 when necessary

## 8.5 Submission experience

On successful submission:

- Show a real success state
- Redirect to the correct thank-you route
- Display the submission reference
- Do not claim a calendar is booked
- Do not claim a CRM record exists unless one was actually created
- Preserve entered information when a network or validation error occurs
- Prevent accidental duplicate submission
- Disable the submit button while submitting
- Show an accessible progress status
- Allow safe retry after failure

Use:

- `aria-live`
- Focus management
- Field-level errors
- Error summary
- Clear recovery instructions

## 8.6 Contact consent

Add a required consent checkbox:

“I agree that BuildFlow AI may use these details to review and respond to this enquiry.”

Do not add newsletter consent.

Do not preselect consent.

## 8.7 Admin access

Create a minimal secure administrative way to review submissions.

Preferred options, in order:

1. A protected server-rendered admin route using a secret-based authenticated session
2. A secure CLI export command for D1
3. A documented Cloudflare dashboard query workflow

Do not expose submissions publicly.

Do not put an admin secret in client JavaScript.

Do not use simple query-string authentication.

At minimum provide:

- List of submissions
- Submission detail
- Status update: new, reviewed, contacted, archived
- CSV export or a documented secure export command

If a secure admin UI would significantly delay launch, implement the secure CLI/export workflow and document it rather than building an unsafe admin page.

---

# 9. Email notification strategy

The website currently has no custom domain.

Do not fake email delivery.

Create a clean notification adapter so the backend can support email without changing form logic.

Supported configuration:

- `EMAIL_PROVIDER=none`
- `EMAIL_PROVIDER=resend`

When a verified sending domain and Resend API key are supplied later:

- Notify hanannaseer778@gmail.com of a new workflow submission
- Include the submission ID and a concise summary
- Do not include highly sensitive content in the email subject
- Optionally send a plain confirmation to the submitter
- Disable open and click tracking
- Store notification success or failure in D1
- Retry transient failures safely
- Never block database storage merely because email delivery failed

For the current no-domain launch:

- The database submission must still work fully
- The success page must not claim that an email was sent unless it was
- Show the verified direct contact email:
  hanannaseer778@gmail.com
- Document exactly how to enable Resend after the future domain is connected

If a suitable verified sending domain or approved email provider credentials are already available in the environment, connect and test them.

Never commit email API keys.

---

# 10. Privacy and legal pages

The Privacy and Terms pages currently must not pretend to be reviewed legal documents.

Improve the placeholders into clear launch-safe informational drafts while retaining a visible notice that they require professional legal review.

Privacy page should explain in plain language:

- What information the workflow form collects
- Why it is collected
- That the information is used to assess and respond to an enquiry
- That data is stored in Cloudflare D1
- That Turnstile may process anti-abuse signals
- Retention placeholder requiring final policy decision
- Contact email
- No sale of personal information
- No marketing subscription by default
- How someone can request deletion or correction
- Effective-date placeholder

Terms page should include:

- Website informational purpose
- No guaranteed business outcome
- Portfolio examples are illustrative engineering work
- Intellectual-property notice
- Prohibited misuse
- External links
- Limitation language marked for legal review
- Contact email
- Effective-date placeholder

Do not claim GDPR, CCPA, SOC 2, ISO, HIPAA, or other compliance that has not been established.

---

# 11. SEO and metadata

Implement production-ready metadata for the temporary `workers.dev` URL.

Use an environment variable:

PUBLIC_SITE_URL

After first deployment, set it to the verified public Worker URL.

Generate:

- Canonical URLs
- Open Graph URLs
- Open Graph images
- Twitter card metadata
- Sitemap
- Robots
- Favicon references
- 404 metadata

Every route must have unique:

- Title
- Description
- Canonical URL

Do not hardcode a future custom domain.

When the custom domain is connected later, changing `PUBLIC_SITE_URL` and redeploying must update canonical URLs and sitemap automatically.

Do not add fake review schema.

Add only accurate structured data, such as:

- Organization
- Person
- WebSite
- BreadcrumbList where appropriate

Do not include a physical street address.

---

# 12. Performance

Preserve appearance while improving performance.

Requirements:

- Optimize the founder portrait and workflow images
- Keep original high-resolution evidence available for the lightbox
- Use responsive thumbnails
- Prevent layout shift with dimensions or aspect ratio
- Lazy-load below-fold evidence
- Preload only genuinely critical assets
- Avoid unnecessary JavaScript
- Do not ship a large gallery framework for one lightbox
- Keep the site usable without animation
- Pause offscreen animation
- Avoid multiple WebGL canvases
- Keep the homepage interactive quickly on a mid-range mobile device

Run performance checks using the deployed URL when possible.

Do not reduce image quality so far that workflow labels become unreadable.

---

# 13. Accessibility

Target WCAG 2.2 AA.

Audit and fix:

- Skip link
- Landmark structure
- Heading order
- Keyboard navigation
- Visible focus
- Mobile menu
- Lightbox dialog
- FAQ details
- Form progress
- Form errors
- Submit status
- Color contrast
- Reduced motion
- Touch target size
- Descriptive alt text
- Decorative-image empty alt
- Link purpose
- Page title updates
- Focus after navigation and submission

Do not communicate status by color alone.

Test the complete workflow-review form with keyboard only.

---

# 14. Testing

Add or improve automated tests.

At minimum test:

## Build and route tests

- Every required route renders
- No route returns an unexpected 404
- Metadata exists
- Founder asset exists
- All four workflow assets exist
- Document Ingestion uses the correct asset
- Verified email and LinkedIn are present
- No WhatsApp link exists

## Form API tests

- Valid request is stored
- Invalid request is rejected
- Missing consent is rejected
- Invalid Turnstile is rejected
- Oversized input is rejected
- Honeypot request is rejected
- Duplicate request is handled
- Rate-limited request returns 429
- Database failure returns a safe response
- Email failure does not lose a stored submission

## Accessibility and browser tests

Use Playwright if appropriate.

Test at:

- 360 × 800
- 390 × 844
- 430 × 932
- 768 × 1024
- 1440 × 900

Test:

- Homepage
- Mobile menu
- Solutions
- Work
- Every project page
- About
- Workflow Review
- Thank-you
- Privacy
- Terms
- 404
- Workflow lightbox
- Keyboard navigation
- Reduced motion

Check:

- No horizontal overflow
- No clipped heading
- No sticky-header overlap
- No missing image
- No unreadable workflow thumbnail
- No broken internal link

Run:

- npm ci
- npm run lint
- npm run test
- npm run build
- TypeScript checking if not already covered

Add scripts where necessary.

---

# 15. GitHub repository

Use the connected GitHub account.

Create or use a public repository named:

buildflow-ai-website

Before changing an existing repository:

- Inspect it
- Confirm it belongs to this project
- Create a backup branch
- Do not erase unrelated work

Repository description:

AI Operations Engineering website for BuildFlow AI by Hanan Naseer

Default branch:

main

Add:

- Complete source
- README
- Deployment guide
- Backend setup guide
- Database migration instructions
- Environment-variable example file without secrets
- Future custom-domain guide
- Troubleshooting section
- Security notes

Never commit:

- API tokens
- Account IDs intended as secrets
- Turnstile secret
- Resend API key
- Admin secret
- OAuth credentials
- node_modules
- build output unless specifically required
- local databases
- logs
- `.env*` secrets

Use a clear commit history.

Suggested final commit message:

Finalize BuildFlow AI full-stack website and deployment

---

# 16. Cloudflare configuration

Create a proper Wrangler configuration for production.

Use a clear Worker name such as:

buildflow-ai

Create and bind a D1 database such as:

buildflow-ai-leads

Configure:

- Static assets
- Vinext Worker entry
- D1 binding as `DB`
- Compatibility date
- Required compatibility flags
- Environment variables
- Observability/logging
- `workers.dev` deployment

Use secrets for:

- TURNSTILE_SECRET_KEY
- RATE_LIMIT_SALT
- ADMIN_SESSION_SECRET
- RESEND_API_KEY when later enabled

Use non-secret environment variables for:

- PUBLIC_SITE_URL
- TURNSTILE_SITE_KEY
- CONTACT_EMAIL
- LINKEDIN_URL
- EMAIL_PROVIDER
- ALLOWED_ORIGINS

Do not expose secrets through client bundles.

Restrict CORS to:

- The actual workers.dev origin
- Local development origins
- The future custom domain only after it is known

Because the frontend and backend are intended to run on the same Worker origin, prefer same-origin API requests and avoid unnecessary CORS.

---

# 17. GitHub Actions CI/CD

Create GitHub Actions workflows.

## Pull-request and push checks

Run:

- npm ci
- lint
- type checking
- tests
- production build

## Production deployment

On push to main:

- Check out code
- Set up the required Node version
- Install dependencies with npm ci
- Run all checks
- Apply D1 migrations safely
- Deploy with the official Cloudflare Wrangler action
- Use GitHub repository secrets:
  - CLOUDFLARE_API_TOKEN
  - CLOUDFLARE_ACCOUNT_ID
- Do not print secrets
- Use deployment concurrency
- Support manual dispatch
- Fail deployment when checks fail

Do not use personal access tokens when GitHub’s built-in token is sufficient.

Document the minimum Cloudflare API token permissions.

---

# 18. Actual deployment

Do not stop at a deployment-ready state.

Perform the following:

1. Authenticate to the connected GitHub account.
2. Create or validate the repository.
3. Push the complete source.
4. Authenticate to Cloudflare.
5. Create the D1 database.
6. Apply migrations.
7. Create Turnstile configuration.
8. Set required Worker secrets.
9. Configure GitHub repository secrets.
10. Trigger the GitHub Actions deployment.
11. Wait for deployment to finish.
12. Open the public workers.dev URL.
13. Verify all major routes.
14. Submit a safe test workflow enquiry.
15. Confirm it exists in D1.
16. Confirm the thank-you page is real.
17. Confirm no secret appears in the browser bundle.
18. Confirm direct nested route refresh works.
19. Confirm assets load.
20. Confirm mobile menu and workflow lightbox work.

Do not state that the site is live until the public URL has been opened and verified.

If an authorization step requires me:

- Explain the exact button or permission required
- Ask for it once
- Resume immediately after authorization
- Do not replace deployment with general instructions

---

# 19. Future custom-domain readiness

The current public URL will be a Cloudflare workers.dev URL.

Prepare the project so a future custom domain can be connected without a redesign.

Create a documented checklist:

1. Add the domain to Cloudflare.
2. Add a Worker custom domain or route.
3. Set `PUBLIC_SITE_URL` to the final HTTPS domain.
4. Update `ALLOWED_ORIGINS`.
5. Restrict Turnstile to the final hostname.
6. Generate and verify the final sitemap and canonical URLs.
7. Configure redirects from the temporary workers.dev URL if appropriate.
8. Verify HTTPS.
9. Add and verify an email-sending subdomain.
10. Enable Resend notifications and optional user confirmation.
11. Review Privacy and Terms.
12. Retest the form and all metadata.

Do not require structural code changes for the domain migration.

---

# 20. Final verification checklist

Before finishing, confirm all of the following:

## Brand and content

- Signal & Flow design preserved
- Exact founder portrait used
- Four correct workflow images used
- No fake metrics
- No fake testimonials
- No fake clients
- No fake certifications
- No WhatsApp
- Email is exactly hanannaseer778@gmail.com
- LinkedIn is exactly https://www.linkedin.com/in/hnautomation

## Visual quality

- Hero remains premium
- Secondary CTA is clearly styled
- Mobile headings are controlled
- Founder crop is correct
- Footer spacing is improved
- Workflow images are zoomable
- No horizontal overflow
- No clipped buttons
- No sticky-header overlap

## Flow Engine

Final state is exactly:

SYSTEM COMPLETE

8 OF 8 — NEXT STEP CONFIRMED

## Backend

- Real POST endpoint exists
- Server validation works
- D1 stores valid submissions
- Turnstile is verified server-side
- Honeypot works
- Rate limiting works
- Consent is required
- Duplicate submission is controlled
- Error states are accessible
- No secret is exposed
- Preview-only submission warning is removed

## Deployment

- GitHub repository is reachable
- GitHub Actions checks pass
- Cloudflare deployment passes
- workers.dev URL is reachable
- Nested routes refresh correctly
- Test submission is confirmed in D1
- README is complete
- Future-domain guide is complete

---

# 21. Required final report

Return a final report containing:

1. Public live website URL
2. GitHub repository URL
3. Final commit hash
4. GitHub Actions workflow status
5. Cloudflare deployment status
6. D1 database name
7. Test submission reference
8. Routes verified
9. Visual edits completed
10. Backend features completed
11. Accessibility checks completed
12. Tests run and results
13. Environment variables and secrets configured, by name only
14. Any limitation that still exists
15. Exact future custom-domain steps

Do not expose secret values.

Do not call the website complete if:

- The form still only shows a preview error
- D1 is not connected
- Turnstile is not validated server-side
- The public URL has not been opened
- A required asset is missing
- Nested routes break
- The source was not pushed to GitHub

Begin by inspecting the source and creating the backup branch.

Then make the final edits, implement the backend, run full QA, push to GitHub, deploy through GitHub Actions to Cloudflare Workers, and verify the live website.
