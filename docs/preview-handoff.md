# Coming Soon preview handoff

Date: 2026-10-13 (Asia/Tokyo).

Repository: `fatboy777/likery-website`. Dedicated checkout:
`C:\APP_Development\likery-website`. Branch:
`codex/coming-soon-cloudflare-pages`. Common website baseline:
`78ce5414326e1ec6cfcc894e241633d806580be3`.

Shared-contract version: not consumed by this independent static website;
existing Mobile/Web SavedItem and publication contracts remain untouched.

## Implementation

- New semantic HTML homepage, stylesheet, custom 404, security headers, robots
  file, six original vector illustrations, favicon and 1200 × 630 social image.
- No scripts, external fonts, forms, trackers, application APIs or storage.
- Historical root homepage and 2025 policy preserved, excluded from `dist/`.
- Dependency-free Node build, allowlisted HTTP server and boundary tests.
- No launch date or available provider integration is promised.

## Local validation

`npm run build` produced 13 allowlisted files. `npm test` passed 3 tests covering
deployment isolation, all local asset/fragment links, and actual 404 responses
including historical/privacy and application paths.

Actual browser tests used the HTTP server at `http://127.0.0.1:4177`:

| Viewport | Document width excluding scrollbar | Horizontal overflow | All 6 images |
| --- | --- | --- | --- |
| 320 | 305 | none | loaded |
| 390 | 375 | none | loaded |
| 768 | 753 | none | loaded |
| 1440 | 1425 | none | loaded |

Full-page screenshots were captured outside Git. Browser console reported no
warnings/errors. Skip-to-content focused `main`; Tab order reached home branding
and the idea link; Enter reached `#idea`. Focus outline was visible. The tested
browser computed `scroll-behavior: auto` and `transition: none`, consistent with
the reduced-motion rule; forcing both OS motion preferences was not supported.
Images are decorative within a labeled conceptual figure. System font rendered;
alternate OS fallback fonts were not separately emulated. All active assets are
same-origin. Canonical/social metadata deliberately names the future domain.

## Deployment

Preview: <https://f13dd9b4.likery-coming-soon.pages.dev/>.
Branch alias: <https://codex-coming-soon-cloudflare.likery-coming-soon.pages.dev/>.
Deployment ID: `f13dd9b4-ba10-4523-8290-8e88da12cfe5`.
Deployed implementation commit: `9b29964280d4cde459194735f18972c3b451af79`.

Cloudflare confirmed `environment: preview`, successful Git clone/build/deploy,
and `uses_functions: false`. Configuration:

| Setting | Verified value |
| --- | --- |
| Project | `likery-coming-soon` |
| Git repository | `fatboy777/likery-website` (existing GitHub authorization) |
| Build | `npm run build` |
| Output | `dist` |
| Reserved production branch | `main` |
| Automatic production deployments | disabled |
| Automatic preview branches | only `codex/coming-soon-cloudflare-pages` |
| Web Analytics | disabled / no tag or token |
| Environment variables | none |
| Functions and service/storage bindings | none |
| Custom domains | none; only the Pages-generated hostname |

No credentials were created or permissions expanded. No paid services or plan
upgrades were requested. The `likery.app` zone is active on Free.

### Preview tests

- HTTPS homepage and 10 asset/robots paths returned 200; deployed content matched
  local source (text line endings normalized, PNG compared byte-for-byte).
- The eight missing/legacy/application paths returned real 404 responses with the
  custom error page: `/privacy.html`, `/privacy`, `/account/`, `/api/`, `/c/example`,
  `/not-a-page`, `/README.md`, `/_headers`.
- CSP blocks scripts, network connections, forms, frames and plugins; other
  security headers and the preview `X-Robots-Tag: noindex` were present.
- Actual browser rendering passed at 320, 390, 768 and 1440 pixels, with the same
  document widths and no overflow as the local tests. All six images loaded;
  console had no errors/warnings. The 404 return link restored the homepage.
- Main text, muted text and accent contrast ratios against the background were
  15.99:1, 9.19:1 and 14.62:1 respectively. This is a targeted accessibility check,
  not a complete certification.
- Protected Workers' ETags and modification timestamps stayed identical to the
  initial inspection. Worker routes and unrelated `pdf-review` configuration and
  deployment ID also stayed identical. No Worker code or endpoint was changed.
- No DNS write or custom-domain request was issued. Existing OAuth scope cannot
  list DNS records, so an internal record-by-record comparison was unavailable;
  access was not broadened. Public DNS queries found no A/AAAA/CNAME answers for
  `likery.app` or `www.likery.app`, consistent with the supplied initial state.

The first manual build request used JSON instead of multipart form data; Cloudflare
ignored its branch parameter and selected historical `main`. That build failed
before deployment because `main` has no new build/output. No historical content
was published. The corrected multipart request produced the successful preview
above. A failed attempt remains in the new project's build history.

Evidence is kept outside Git in the local chat artifact directory: local and
preview screenshots for all four widths, a preview 404 screenshot, HTTP/content
comparison results, browser results, and before/after Cloudflare snapshots.
No local evidence or credentials are committed.

### Changed files

`README.md`, `.gitignore`, `package.json`, `docs/preview-handoff.md`,
`scripts/build.mjs`, `scripts/serve.mjs`, `tests/site.test.mjs`,
`public/index.html`, `public/404.html`, `public/styles.css`, `public/_headers`,
`public/robots.txt`, and `public/assets/{favicon,terrace,bloom,orbit,coast,studio,ripple}.svg`
plus `public/assets/social.png`.

The production approval gate remains closed. This handoff update changes only
documentation and will use `[skip ci]` to retain the reviewed deployment.

## Known limitations

The supplied design-reference ZIP was not found in the current attachment folder,
Downloads, Desktop, Documents, or application development directories. This is
an original interpretation of the supplied dark, minimal, image-first direction.
Social image metadata on `likery.app` becomes usable only after domain approval.

## Approval boundary

No production custom domain may be attached without explicit human visual
approval. No DNS or Worker change is part of this preview task.
