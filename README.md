# BuildFlow AI website

Production-ready Vinext/Next application for BuildFlow AI, founded by Hanan Naseer. It preserves the approved Signal & Flow visual direction and uses the supplied founder portrait and four real workflow evidence images.

## Local development

Use Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Copy `.env.example` to a local ignored environment file. Cloudflare's published Turnstile test keys can be used only for local testing.

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run validate:artifact
```

## Backend

`POST /api/workflow-review` accepts JSON, applies authoritative validation, requires contact consent, checks a honeypot and Cloudflare Turnstile, rate limits without storing raw IP addresses, and stores accepted submissions in D1. Email is disabled until a verified sending domain is available; database storage does not depend on email delivery.

Generate and apply database migrations with the `db:*` scripts in `package.json`. Submission administration is intentionally CLI-only so no records or admin secret are exposed through a public route.

## Deployment

Production deploys from GitHub Actions to Cloudflare Workers. See [DEPLOYMENT.md](DEPLOYMENT.md) for Cloudflare permissions, D1 and Turnstile setup, GitHub secrets, secure exports, Resend enablement, troubleshooting, security notes, and the future custom-domain checklist.

Never commit Worker secrets, API tokens, account credentials, local databases, build output, or `.env` files.
