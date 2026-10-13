# Approved initial production launch

Verified 2026-10-13, Asia/Tokyo. Public URL: <https://likery.app/>.
Human authorization covered the static Coming Soon site, the unified identity,
integration into `main`, official Pages custom-domain provisioning and `www`
redirect. No application functionality or Mobile work was authorized here.

## Git and deployed source

Repository: `fatboy777/likery-website`. Dedicated checkout:
`C:\APP_Development\likery-website`.

`main` was clean at `78ce5414326e1ec6cfcc894e241633d806580be3`, with no intervening
remote commits. The approved branch was clean at documentation checkpoint
`6c883cd113dc1d5c3ca31a8618086d8047dd68d6`. It was integrated with
`git merge --ff-only codex/coming-soon-cloudflare-pages`, retaining every commit;
no separate merge commit was created. That checkpoint is the integrated and
deployed production SHA. Website behavior/assets are unchanged from approved
implementation `40f210e7e28f00c67ed4aaee7842eddbb102dcc8`.

The original common website base remains `78ce5414326e1ec6cfcc894e241633d806580be3`.
Shared-contract version: not consumed by this independent static website.
Mobile/Web SavedItem and publication contracts remain untouched.

`main` was pushed normally. No reset, force-push, history rewrite, conflict
resolution or historical source deletion occurred. Root prototype `index.html`
and `privacy.html` remain in Git but are excluded from production output.

## Pages and domain configuration

| Setting | Verified value |
| --- | --- |
| Project | `likery-coming-soon` |
| Production branch | `main` |
| Automatic production deployment | disabled, unchanged |
| Build/output | `npm run build` / `dist` |
| Deployment ID | `1d322969-1bf8-499e-b377-52402d317818` |
| Deployment environment | `production` |
| Deployment-specific URL | `https://1d322969.likery-coming-soon.pages.dev/` |
| Production Pages hostname | `https://likery-coming-soon.pages.dev/` |
| Public canonical hostname | `https://likery.app/` |
| Custom domains | `likery.app`, `www.likery.app`, both active |
| Functions / bindings / env vars | none |
| Analytics | disabled, unchanged |
| Zone plan | Free Website, price 0, unchanged |

An explicit multipart deployment request selected `branch=main`, despite
automatic production deployment being disabled. Cloudflare confirmed a
successful clone/build/deploy of the exact integrated SHA and
`uses_functions: false`. The production Pages hostname passed HTTP/content
checks and real browser rendering before a custom domain was attached.

Current dashboard notice: “This project is disconnected from your Git account.
This may cause deployments to fail.” The explicit build succeeded and no Git
permission/connection change was made. Future automatic Git-triggered deployment
is not asserted to work; investigate the notice separately if desired. Production
auto-deploy deliberately remains paused.

## DNS, redirect and certificates

Preflight inspected the zone via the existing API and DNS records via the
authenticated dashboard. Zone status was active; authoritative nameservers were
`lily.ns.cloudflare.com` and `sean.ns.cloudflare.com`. The dashboard showed zero
DNS records. The project had no custom domains; the zone had zero Worker routes.
Other projects/Workers were inspected for relevant domain conflicts.

The official Pages Custom Domains flow proposed and automatically created:

| Name | Type | Target | Proxy / TTL |
| --- | --- | --- | --- |
| `likery.app` (`@`) | CNAME | `likery-coming-soon.pages.dev` | Proxied / Auto |
| `www.likery.app` | CNAME | `likery-coming-soon.pages.dev` | Proxied / Auto |

No record was replaced and no A/AAAA target was invented. During initial apex
activation, DNS began resolving while Pages verification was pending and the
hostname briefly returned 522. It subsequently returned 200 without corrective
infrastructure changes. Both custom domains now have active verification and
certificate validation.

One Free-plan Single Redirect was created from the official www-to-root template:

- Name: `Likery website: www to canonical apex`.
- Match: `(http.host eq "www.likery.app")`.
- Dynamic destination: `concat("https://likery.app", http.request.uri.path)`.
- Status: 301. Preserve query string: enabled.
- Status in dashboard: Active. Only the exact www hostname is affected.

HTTP and HTTPS www requests at `/` and `/not-a-page?review=1` returned 301 directly
to the corresponding apex URL, preserving path/query; following redirects
returned 200 and 404 respectively without loops. HTTP apex returned 301 to HTTPS.
Public DNS-over-HTTPS returned A and AAAA answers for both names; Windows system
DNS also resolved the apex and www. Current edge answers are Cloudflare anycast,
not manually configured origin records.

Independent TLS connections used hostname verification and default trust checks
without bypasses. Both were authorized using TLS 1.3, with Google Trust Services
WE1 issuer. Observed leaf certificates:

| Host | Valid from (UTC) | Valid until (UTC) |
| --- | --- | --- |
| `likery.app` | 2026-10-13 11:33:46 | 2027-01-11 12:33:44 |
| `www.likery.app` | 2026-10-13 11:35:32 | 2027-01-11 12:35:30 |

These are observations at launch, not guarantees about later renewals or every
resolver/location. Existing OAuth cannot list DNS records; authenticated UI
inspection supplied the record comparison without expanding OAuth scope.

## Production validation

- After integration, `npm run build` succeeded with 19 allowlisted static files;
  `npm test` passed all 3 deployment, asset/link and 404 boundary tests.
- On both the production Pages hostname and `likery.app`, all 18 addressable
  output files matched local source (text CRLF normalized; WOFF2/PNG byte-exact).
  `_headers` is interpreted configuration, not an exposed nineteenth asset.
- Nine paths returned the exact custom error page with real HTTP 404:
  `/account/`, `/api/`, `/c/`, `/c/example`, `/privacy.html`, `/privacy`,
  `/not-a-page`, `/README.md`, `/_headers`. No auth/publication endpoint or
  obsolete prototype/policy was exposed.
- Canonical and Open Graph/Twitter metadata name `https://likery.app/` and the
  deployed 1200×630 social PNG. CSS, favicon, logos, illustrations and the local
  font/license all resolved. The home page has no robots noindex meta or
  `X-Robots-Tag: noindex`; robots.txt permits crawling. The error page intentionally
  retains noindex. Search engine indexing/crawler refresh is not guaranteed.
- CSP and existing security headers remained intact: scripts/connect/forms are
  blocked, image/style/font sources are self, frame embedding is denied, nosniff,
  no-referrer and restrictive Permissions-Policy are present. No security setting
  was weakened to allow indexing.
- Actual public-domain browser tests at 320/390/768/1440 measured equal scroll
  and document widths (305/375/753/1425 excluding scrollbar). All seven images
  loaded, Inter was available, and the approved ivory/charcoal/coral design
  rendered correctly. The homepage console had no warnings/errors. The browser
  custom 404 and Back to Likery link restored the homepage.
- No JavaScript, trackers, forms or externally hosted font/image resources were
  introduced. Source dependencies are same-origin and CSP prevents application
  connections. Cloudflare adds its own standard edge NEL/Report-To headers;
  these are host-provided reporting headers, not website analytics scripts.

Protected `likery-oauth` and `likery-publication-dev` Worker ETags and modification
timestamps matched preflight exactly. Worker routes remained empty; unrelated
`pdf-review` Pages config/deployment snapshot was identical. No Worker, Firebase,
D1, Library/publication or Mobile/Web app change was made. The Mobile checkout
remained clean. No paid services, subscriptions or permission expansion occurred.

## Files and evidence

Integration brought the reviewed static implementation, build/server/tests,
assets/font/license and brand documentation into `main` (30 files versus old
main). This launch added/updated only documentation: `README.md`,
`docs/brand-identity-v1.md`, `docs/preview-handoff.md`, and this launch record.
The documentation follow-up uses `[skip ci]` and does not replace the tested
deployment.

Browser screenshots, HTTP comparisons, DNS/TLS/redirect results and Cloudflare
snapshots remain outside Git in the chat's `likery-production-launch` artifact
directory. No credentials, private URLs or local evidence were committed.

Launch validation is complete. Stop here; Mobile implementation, new app
endpoints and broader infrastructure work require a separate task/approval.

Official procedures used:
[Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/),
[Single Redirect dashboard setup](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/).
