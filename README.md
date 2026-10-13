# Likery Coming Soon

A standalone, static marketing website. It does not contain the Likery application,
account features, data collection, provider integrations, or analytics. All visual
artwork in `public/assets/` was created for this site; no third-party assets or
remote fonts are required. The wall is explicitly a concept illustration.

## Local development

Node.js 20+; no dependency installation needed.

```sh
npm run build
npm test
npm run dev
```

Open `http://127.0.0.1:4177`. The HTTP server serves only the deployment files and
returns the custom error page with a real 404 status for unknown paths.

## Deployment boundary

Only `dist/` may be deployed. `scripts/build.mjs` copies an explicit allowlist from
`public/`, so the historical root `index.html` and July 2025 `privacy.html` stay
preserved in source but are **excluded** from the deployment. They are not current
product or privacy claims. No replacement legal policy has been authored.

Cloudflare Pages target: `likery-coming-soon`, GitHub repository:
`fatboy777/likery-website`, build command: `npm run build`, output: `dist`.
Use `main` as the reserved production branch with automatic production builds
disabled until an approved site replaces the historical source. Preview builds
should be restricted to `codex/coming-soon-cloudflare-pages`.
No environment variables, Functions, bindings, storage, external requests, or
custom domains are needed. Do not enable Web Analytics or add a Worker.

The existing `likery-oauth` and `likery-publication-dev` Workers must remain
untouched. Do not modify other Pages projects or any domain/DNS routing.

## Human approval gate

**Stop after Pages preview validation.** Connecting `likery.app`, provisioning
its DNS/certificate, or configuring `www` requires explicit subsequent human
approval. Canonical and social URLs express the intended final domain; metadata
does not attach it. Until approval, social image URLs on the final domain are
not expected to resolve.

The website has no dependency on SavedItem or publication contracts. Baseline:
`78ce5414326e1ec6cfcc894e241633d806580be3` (`origin/main`, verified before work).
No Mobile/Web code, contracts, or root instructions were changed.

See `docs/preview-handoff.md` for the verified deployment and test results.
