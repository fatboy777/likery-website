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

Pending preview setup and validation. The production approval gate remains closed.

## Known limitations

The supplied design-reference ZIP was not found in the current attachment folder,
Downloads, Desktop, Documents, or application development directories. This is
an original interpretation of the supplied dark, minimal, image-first direction.
Social image metadata on `likery.app` becomes usable only after domain approval.

## Approval boundary

No production custom domain may be attached without explicit human visual
approval. No DNS or Worker change is part of this preview task.
