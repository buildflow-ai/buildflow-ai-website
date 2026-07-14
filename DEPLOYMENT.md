# BuildFlow AI deployment

Production is deployed from the public GitHub repository to Cloudflare Workers. GitHub Actions runs installation, lint, type checking, tests, the production build, D1 migrations, and Wrangler deployment.

## Cloudflare setup

Create D1 database `buildflow-ai-leads`, place its ID in `wrangler.jsonc`, apply migrations, and create a Turnstile widget restricted to the final `workers.dev` hostname. Set Worker secrets `TURNSTILE_SECRET_KEY` and `RATE_LIMIT_SALT`. Keep `EMAIL_PROVIDER=none` until a verified sending domain exists.

The Cloudflare API token used by GitHub needs Workers Scripts Edit, D1 Edit, Account Settings Read, and Workers Observability Edit for the relevant account. Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as GitHub Actions secrets.

## Submission administration

Use `npm run db:export` through an authenticated Wrangler session for a secure JSON export. List, inspect, or update statuses with `wrangler d1 execute buildflow-ai-leads --remote --command "..."`. Allowed statuses are `new`, `reviewed`, `contacted`, and `archived`. No administrative endpoint is exposed publicly.

## Enabling Resend later

Verify an email-sending subdomain, set `EMAIL_PROVIDER=resend`, configure `RESEND_API_KEY` as a Worker secret, and update the adapter's verified `from` address. Test notification status in D1. Storage succeeds even when notification delivery fails; open/click tracking is disabled.

## Future custom domain

1. Add the domain to Cloudflare.
2. Add a Worker custom domain or route.
3. Set `PUBLIC_SITE_URL` to the final HTTPS domain.
4. Update `ALLOWED_ORIGINS`.
5. Restrict Turnstile to the final hostname.
6. Redeploy and verify sitemap and canonical URLs.
7. Redirect the temporary `workers.dev` URL if appropriate.
8. Verify HTTPS.
9. Add and verify an email-sending subdomain.
10. Enable Resend notifications and optional user confirmation.
11. Obtain professional review of Privacy and Terms.
12. Retest the form, metadata, direct route refreshes, and assets.

## Troubleshooting and security

Never commit `.env` files or secrets. A 400 Turnstile response usually means the hostname, site key, or secret is mismatched. A D1 table error means migrations have not been applied. The API accepts JSON only, limits request size, validates plain text, requires consent, checks a honeypot and Turnstile, rate limits using a salted non-persisted abuse key, and never stores full IP addresses.
