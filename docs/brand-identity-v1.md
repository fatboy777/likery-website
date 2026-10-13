# Likery brand identity v1

Status: proposed shared reference, 2026-10-13. The Mobile-aligned color direction
is approved. This website implementation, the L + dot logo system and the shared
typography specification await human visual approval before wider adoption.

Owner/scope: dedicated `fatboy777/likery-website` repository. Website base:
`62bf078e04637ec5adb1e9b9d6b49ac7d5502492`, continuing from the original common
website baseline `78ce5414326e1ec6cfcc894e241633d806580be3`.
Mobile inspected read-only at `e3dcf57c6c34280494162b67e93e960b7efd2734`.
No SavedItem/publication contract is consumed or changed by this specification.

## Positioning and personality

Likery is a **Cross-SNS Visual Taste Feed**. Its core principle is:
“Likery opens as a wall of things you love, not a dashboard.”

The identity is warm, refined, calm and personal. Images and videos carry the
emotion; typography and interface controls help people return to them. Favor
editorial confidence and generous space over productivity-tool chrome.

The current website is Coming Soon. Describe features as being developed; do not
promise launch dates, automatic synchronization, available account/publication
features, recommendations or provider capabilities. This refinement preserves
the existing headline, copy, information architecture and six original artworks.
No alternate headline is proposed in this revision.

## Mobile evidence and color derivation

The inspected `lib/app.dart` sets the light scaffold to `#F8F7F4` and light body/
display text to `#25231F`. Both appearances call `ColorScheme.fromSeed` with
`#B85C5C`. The dark appearance uses the generated scheme without a matching
scaffold override. No custom typeface is configured in `pubspec.yaml`.

The installed Flutter 3.32.8 implementation defaults to `tonalSpot` and contrast
level 0. Reproducing that exact call with the Mobile checkout's resolved
`material_color_utilities` 0.11.1 produced:

| Material role | Light | Dark |
| --- | --- | --- |
| primary | `#904A49` | `#FFB3B1` |
| onPrimary | `#FFFFFF` | `#571D1F` |
| primaryContainer | `#FFDAD8` | `#733333` |
| onPrimaryContainer | `#3B080C` | `#FFDAD8` |
| surface | `#FFF8F7` | `#1A1111` |
| surfaceContainer | `#FCEAE9` | `#271D1D` |
| onSurface | `#231919` | `#F0DEDD` |
| onSurfaceVariant | `#524342` | `#D7C1C0` |
| outline | `#857372` | `#A08C8B` |
| outlineVariant | `#D7C1C0` | `#524342` |

These are source-derived values, not sampled screenshots or proof of a device
session. Seed and computed primary are deliberately distinct. Re-evaluate this
table when Flutter/Material Color Utilities changes, rather than assuming all
future generated schemes are identical.

## Website color tokens

The source of website tokens is the `:root` block in `public/styles.css`. Asset
generation reads that same block. Do not add slightly different colors to
individual components. The original illustration palettes are artwork, not UI
tokens; their greens, blues and yellows remain unchanged.

| CSS token | Value | Role and usage |
| --- | --- | --- |
| `--bg` | `#F8F7F4` | Primary ivory page background; exact Mobile override |
| `--text` | `#25231F` | Primary charcoal text; exact Mobile override |
| `--accent` | `#B85C5C` | Brand seed; symbol, decorative dots, large headline emphasis |
| `--action` | `#904A49` | Mobile-generated primary; links, labels, focus, filled controls |
| `--action-hover` | `#733333` | Deeper coral for hover; same hue family |
| `--on-action` | `#FFFFFF` | Text/icons on filled primary controls and image scrims |
| `--surface` | `#F0EDE8` | Warm neutral surface/asset placeholder; website supporting token |
| `--accent-surface` | `#FFDAD8` | Optional brand container; Mobile-generated primaryContainer |
| `--muted` | `#6C625D` | Secondary text; website warm-neutral supporting token |
| `--border` | `#D7C1C0` | Decorative dividers and noninteractive badge outlines |
| `--focus` | `var(--action)` | Visible keyboard outline |
| `--overlay` | `#25231FA6` | Neutral translucent overlay on conceptual video artwork |
| `--overlay-border` | `#FFFFFF70` | Decorative overlay border |
| `--image-scrim` | `#000000AA` | Maximum opacity at bottom of image-caption gradient |

Contrast against ivory: text 14.64:1, muted 5.53:1, action 6.01:1, hover 8.71:1.
Seed coral is 4.15:1: use it for large text and the mark, **not normal-size body
text or small button labels**. The border is 1.60:1 and is decorative only. Real
input boundaries or controls that rely on outlines would require a stronger
token and a fresh contrast check. White on action is suitable for normal text.

No competing accent is introduced. The former forest-green/lime UI palette is
retired; never use it as a brand appearance.

## Light and dark appearance

The website intentionally has one light appearance (`color-scheme: light`),
including when the OS is dark. There is no theme toggle or alternate website.

For dark marketing backgrounds and a future approved Mobile implementation,
use `--dark-bg: #1A1111`, `--dark-text: #F0DEDD`, and
`--dark-accent: #FFB3B1`, matching the generated Mobile dark scheme. The supplied
dark logo uses the latter two values on transparent pixels. A future dark UI
should use the corresponding Material surface/container and text roles above,
and validate all pairs; do not invert the light page or restore lime highlights.

## Logo comparison and recommendation

| Existing element | Evidence | Assessment |
| --- | --- | --- |
| Android launcher | `android:icon="@mipmap/ic_launcher"`; five PNG density assets | Blue stock Flutter mark |
| Mobile in-app brand tile | `lib/ui/likery_brand.dart` | Generic `Icons.collections_bookmark_outlined`, 32px inside a 68px tile with 22px corners, colored with primaryContainer/onPrimaryContainer |
| Previous website | Original 32-unit L + dot geometry and lowercase `likery.` | Distinctive own symbol, previously colored lime |
| Proposed unified identity | Same L + dot, coral/charcoal, Inter wordmark | Recommended for subsequent approved Mobile/marketing adoption |

All five Android launcher PNGs are byte-identical to the installed Flutter
application template. Their history goes back unchanged to baseline `0e10ae0`
(2026-09-09). The 192px SHA-256 is
`3c34e1f298d0c9ea3455d46db6b7759c8211a49e9ec6e44b635fc5c87dfb4180`.
The inspected source/history does not establish an older approved custom Likery
launcher identity. There is therefore no material conflict requiring the website
to use that stock mark. This is not a claim about approvals outside the repository.
The launcher and Mobile in-app brand tile have not been changed.

### Geometry and master assets

Canonical symbol: a 32 × 32 coordinate system. Preserve exactly:

```svg
<path d="M8 5v22h19v-7H15V5Z"/>
<circle cx="25" cy="8" r="4"/>
```

The L stem/foot are 7 units thick; the dot diameter is 8. Do not round the L,
turn it into a bookmark, join the dot to the stem, stretch either axis, or alter
their relative positions. The occupied bounds are x=8..29, y=4..27; use those
bounds for optical centering in app-icon containers.

The wordmark master is 140 × 36: symbol at y=2; `likery` starts at x=43 with
baseline y=28, Inter 700 at optical size 32, size 32, tracking −1.2 units. The
terminal period uses the symbol color. Text is outlined so its geometry is
independent of font loading, installed fonts or platform layout. Use the master
SVG; do not retype the logo in arbitrary fonts. Clear space is at least one dot
diameter (8 symbol units) outside the visible mark/lockup. Recommended minimum:
symbol 24px, lockup 112px wide; only the favicon may use 16px.

Prepared assets, all retaining this geometry:

- `public/assets/logo-wordmark-light.svg`: primary charcoal wordmark + seed coral.
- `public/assets/logo-wordmark-dark.svg`: pale neutral wordmark + dark-scheme coral.
- `public/assets/logo-symbol-light.svg`: standalone seed-coral symbol.
- `public/assets/logo-symbol-dark.svg`: standalone dark-scheme coral symbol.
- `public/assets/favicon.svg`: ivory rounded square, optically centered coral mark.
- `public/assets/social.png`: 1200 × 630 social card using outlined Inter and
  the original illustrations. Editable vector source: `brand/social.svg`.

Both homepage and 404 use the same outlined wordmark. The logo asset is
decorative inside an accessible “Likery home” link.

### App-icon adaptation (guidance only)

Use the symbol alone; exclude the wordmark and status dot from the Coming Soon
badge. Center the symbol's occupied bounds, maintain clear space and use a
separate opaque neutral background. For Android adaptive icons, prepare separate
foreground/background and monochrome layers on 108 × 108dp canvases; keep all
critical geometry within the central 66 × 66dp safe region, with additional
breathing room where practical. Let Android apply the launcher mask; do not bake
a rounded square into the foreground. The website favicon is not an adaptive
icon source. Validate round, squircle and themed masks in the separately approved
Mobile task. For iOS, export from the same symbol master and follow the current
platform icon template, safe areas and masking rules before release.

## Typography

Preferred shared English UI and marketing family: **Inter**. Version source:
the official `rsms/inter` v4.1 release tag. Vendored file:
`public/fonts/InterVariable-v4.1.woff2`, 352,240 bytes (344.0 KiB), unmodified.
Its internal name reports `Version 4.001;git-9221beed3`; that is the upstream
file metadata, not an accidental version mismatch. SHA-256:
`693b77d4f32ee9b8bfc995589b5fad5e99adf2832738661f5402f9978429a8e3`.

It provides weights 100–900 and optical size 14–32; this website uses 400, 500,
600 and outlined 700. The high x-height/text optical sizes support UI reading;
large optical sizes preserve the editorial headline. Browser typography uses
`font-optical-sizing: auto`, with moderate headline tracking and normal body
tracking. Avoid applying display tracking to ordinary application text.

| Role | Website specification | Future Mobile guidance |
| --- | --- | --- |
| Brand wordmark | Master outlined Inter 700, size 32 | Use vector master, not a Text replacement |
| Marketing headline | Inter 500, 44–84px, line-height 1.05, tracking −.055em | Marketing only; not the app's default text style |
| Section heading | Inter 500, 26–38px, line-height 1.2, tracking −.04em | Map to appropriate headline/title roles |
| Lead copy | Inter 400, 17–21px, line-height 1.55 | Consider bodyLarge while preserving text scaling |
| Body copy | Inter 400, 14–15px, line-height 1.8–1.85 | Start at 16sp bodyLarge / 14sp bodyMedium; validate in context |
| UI/status labels | Inter 600, 10–12px; uppercase only for short English labels | Inter 500/600, typically 12–14sp; no letterspacing on Japanese |
| Links/navigation | Inter 500, 14px, ≥44px hit height | Keep platform touch targets, focus and semantic roles |
| Captions/metadata | Inter 400, 10–12px | Prefer ≥12sp for functional app metadata |
| Decorative artwork notes | Existing 7–10px, hidden from accessibility tree with the artwork | Not a model for functional text sizes |

The Roman WOFF2 is the only downloadable font. The single emphasized word uses
500 weight, avoiding synthetic italic and a second font download. Use genuine
italic assets if long-form italic content is added later.

### Licensing, performance and fallback

Inter uses SIL OFL 1.1, allowing embedding and redistribution with its copyright
and license notice. The unmodified notice is committed and deployed at
`public/fonts/Inter-OFL.txt`. Retain it in every redistributed font package; do
not sell the font by itself. Typeface authors do not endorse Likery.

The page self-hosts one versioned WOFF2, preloads only that file and uses
`font-display: swap`. There is no Google Fonts/CDN request. The ~344 KiB first
load is the deliberate cost of preserving the full upstream font and one
variable file rather than introducing a custom subset or multiple weights.
Font failure must leave readable system text and a fully rendered vector logo.

Website stack:

```css
"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif
```

Inter does not supply Japanese glyphs (the checked sample has none in its cmap).
Use the OS Japanese sans-serif fallback: Noto Sans CJK/JP on Android where
available, Hiragino on Apple platforms, Yu Gothic/Meiryo on Windows. The names
in the CSS stack reference installed fonts, not remote downloads. For future
Japanese copy, set `lang="ja"`, avoid English uppercase/tracking rules and prefer
1.65–1.8 line height. Do not redistribute proprietary OS fonts. Bundling Noto Sans
JP would be a separate size/license decision if cross-platform CJK glyph
consistency is later required.

### Future Flutter integration

After a separate approval, package the upstream Inter TTF/OTF and OFL locally,
declare it in `pubspec.yaml`, and apply it through `TextTheme`/`fontFamilyFallback`.
The official matching `InterVariable.ttf` is available from the v4.1 release;
WOFF2 is the website format, not the proposed native app asset. Validate real
weight/optical-size rendering with the installed Flutter version, or use the
release's correctly declared static TTF weights if variable-font support proves
unsuitable. Keep existing Material text roles, scaling, Japanese fallback and
icon fonts. Never synthesize bold/italic from an unrelated single-weight file.

This task inspects source and tests desktop Chromium at handset widths. It does
not claim an Android app/device font test. The reserved Pixel/ADB state is not
used. Native Android readability, text scaling, Japanese metrics, font package
size and iOS rendering remain acceptance checks for the separately approved
Mobile typography rollout.

## Iconography, spacing and image presentation

Use a small, coherent set of simple icons at 20–24px, with consistent stroke
weight and accessible names for actions. The brand symbol is an identity mark,
not a replacement for normal app action icons. The current arrow is decorative
within a named text link. The video triangle belongs to a clearly labeled concept
illustration; it is not an interactive player or advertised product capability.

Use a 4px spacing rhythm, with 8/12/16/24/32px steps and optically adjusted
editorial gaps where needed. Preserve broad page margins (5–7%) and the current
two-column desktop / stacked handset hierarchy. Do not compress the page into a
control dashboard. Card corners are 12px desktop and 8px at narrow widths; pills
are reserved for short status labels. Focus radius is 2px. Mobile's existing
68px tile/22px radius is historical UI evidence, not a universal website radius.

Keep the three staggered image columns and natural artwork aspect ratios.
Artwork must remain the dominant visual interest, with quiet surrounding chrome.
Use supplied dimensions to reserve image space. Keep original illustrative
content labeled as such and do not substitute private saved media or unlicensed
social posts. Provider logos and claims are unnecessary for this Coming Soon page.

## Accessibility and examples

- Preserve semantic headings, main landmark, skip link and a meaningful home link.
- Normal text needs ≥4.5:1 contrast; large text ≥3:1; meaningful controls/focus
  indicators ≥3:1. Do not count a decorative divider as a control boundary.
- Keep action targets at least 44px high, keyboard-visible focus, and a clear
  underline on links. Never communicate an action using color alone.
- Honor reduced motion. The page has no looping animation; the media query also
  disables smooth scrolling and transitions. Never hide content behind motion.
- Check 320/390/768/1440 widths, font failure, image loading, keyboard navigation,
  and the real custom 404 before publishing a new preview.

Acceptable: charcoal body on ivory; seed-coral large headline; deeper coral small
link; original image colors; pale coral logo on warm dark neutral; one Inter
system with platform Japanese fallback.

Unacceptable: lime UI highlights; seed coral for small low-contrast body text;
stock Flutter mark presented as the new Likery identity; stretched L + dot;
substituting a bookmark for the brand; condensed/display text throughout the app;
real private library images in marketing; claims that unfinished features exist.

## Sources and maintenance

- [Official Inter typeface](https://rsms.me/inter/) — UI/display design and weights.
- [Pinned font source](https://github.com/rsms/inter/tree/v4.1/docs/font-files).
- [Inter OFL license](https://raw.githubusercontent.com/rsms/inter/v4.1/LICENSE.txt).
- [Flutter custom fonts](https://docs.flutter.dev/cookbook/design/fonts).
- [Android adaptive icons](https://developer.android.com/develop/ui/compose/system/icon_design_adaptive).

Regenerate assets with `scripts/brand-assets.py` after changing approved tokens or
geometry; see `brand/README.md`. Review the homepage, 404, favicon, all logo
variants and social card together. This document is the proposed common
reference; future Mobile integration needs its own coordinated approval and
implementation. Production domain connection remains separately gated.
