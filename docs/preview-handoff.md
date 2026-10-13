# Coming Soon preview handoff

## Current review: Mobile-aligned identity, 2026-10-13

This section supersedes the historical dark-green/lime preview below. The
approved direction is ivory/charcoal/coral. Composition, copy and all six
original artwork SVGs are preserved.

- Preview: <https://4a68eaed.likery-coming-soon.pages.dev/>.
- Branch: `codex/coming-soon-cloudflare-pages`.
- Deployed commit: `40f210e7e28f00c67ed4aaee7842eddbb102dcc8`.
- Deployment ID: `4a68eaed-6f6d-45db-853f-98f98be06874`.
- Continued website base: `62bf078e04637ec5adb1e9b9d6b49ac7d5502492`;
  original common base: `78ce5414326e1ec6cfcc894e241633d806580be3`.
- Shared data-contract version: not consumed; existing Mobile/Web contracts
  remain unchanged. Mobile source inspected read-only at
  `e3dcf57c6c34280494162b67e93e960b7efd2734`.
- Shared reference: [brand-identity-v1.md](brand-identity-v1.md).

### Brand decisions

Background `#F8F7F4`, foreground `#25231F`, seed `#B85C5C`. Accessible small
labels/links use Flutter-derived primary `#904A49`; hover uses `#733333`.
Secondary text is `#6C625D`, neutral surface `#F0EDE8`, decorative border
`#D7C1C0`, optional coral surface `#FFDAD8`. The seed has 4.15:1 contrast on
ivory and is reserved for large text/marks. Primary, secondary and action text
measure 14.64:1, 5.53:1 and 6.01:1 respectively.

The five Android launcher assets match the stock Flutter template byte for
byte. The in-app mark is a generic Material bookmark. Source/history provides
no conflicting approved custom launcher identity. Recommend the existing
L + dot geometry in coral, with outlined Inter wordmarks and light/dark symbol
variants. Native icon changes require a separate approved Mobile task.

Inter is self-hosted, OFL-licensed, 100–900 variable weight; this site uses
400/500/600 and outlined 700. One 344 KiB WOFF2 is preloaded with swap fallback.
Japanese uses installed platform sans-serif fallbacks. Native Android/iOS
readability, Japanese metrics and text scaling remain rollout checks; no device
or ADB access was used.

### Current validation

`npm test`: 3/3 passed. `npm run build`: 19 allowlisted static files, including
the font/license and four logo masters. The old root pages and development
sources are excluded. The original six artworks and root historical HTML are
unchanged in Git.

Local real HTTP/browser checks passed at 320/390/768/1440: no horizontal
overflow, seven loaded images (logo plus six artworks), Inter available,
no home-page console warnings/errors. A separate font-failure HTTP fixture
verified readable fallback, intact outlined logos and no overflow at every
width. A local specimen checked the logo variants, 16/32px favicon, font
weights and Japanese fallback. Keyboard checks reached visible skip/action
focus, focused main, and navigated to `#idea`. The custom 404 returned home.
The browser computed auto scrolling and no link transition under its active
reduced-motion setting; both OS preferences could not be forced separately.

Cloudflare confirmed successful clone/build/deploy, `environment: preview`,
the intended branch/commit, and `uses_functions: false`. Push did not trigger
a build during observation, so the existing authorized branch was built with
an explicit multipart preview request. No project settings were changed.

All 18 HTTP-addressable output files matched local content (text line endings
normalized; font/PNG byte-identical); the nineteenth file is the `_headers`
configuration, which correctly remains inaccessible. Eight legacy, missing,
application and source paths returned the exact custom 404 with HTTP 404.
The branch alias matched the current homepage. CSP, noindex and security
headers were verified; dependencies are same-origin with no scripts/forms.

The deployed page passed the same four actual browser widths: no overflow,
seven images loaded, Inter available, and no homepage console errors/warnings.
Document widths matched local results (305/375/753/1425, excluding scrollbar).
The remote 404 return link restored the homepage. Desktop/mobile screenshots
and all HTTP/browser evidence are stored outside Git in the chat's local
`likery-brand-review` artifact directory.

Protected Worker ETags/timestamps, Worker routes and the unrelated `pdf-review`
project snapshot remained unchanged. Production auto-deploy stays disabled;
custom domains remain absent and `likery.app` remains disconnected. No DNS
write was made. Existing OAuth scope cannot list zone DNS records, so a
record-by-record comparison was unavailable and permissions were not expanded.
The Mobile checkout remains clean. `main` has not been merged or updated.

### Changed files in this refinement

`README.md`, `docs/brand-identity-v1.md`, `docs/preview-handoff.md`,
`public/index.html`, `public/404.html`, `public/styles.css`,
`public/assets/favicon.svg`, `public/assets/social.png`,
`public/assets/logo-{wordmark,symbol}-{light,dark}.svg`,
`public/fonts/InterVariable-v4.1.woff2`, `public/fonts/Inter-OFL.txt`,
`scripts/build.mjs`, `scripts/serve.mjs`, `scripts/brand-assets.py`,
`tests/site.test.mjs`, `brand/README.md`, `brand/social.svg`.

### Review gate and remaining decisions

Await explicit human approval of the unified logo/typography and website
preview. Do not merge `main`, connect `likery.app`, or modify Mobile here.
The font's 344 KiB first-load cost is documented; subsetting can be considered
in a separate optimization. Canonical/social metadata names the future domain,
so social-crawler fetching there remains unavailable until domain approval.
This documentation-only follow-up uses `[skip ci]` to retain the tested build.

## Historical initial preview (superseded brand direction)

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
