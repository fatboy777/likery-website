# Brand source assets

The authoritative specification is `docs/brand-identity-v1.md`; website tokens
are centralized in `public/styles.css`.

`social.svg` is the editable, outlined 1200 × 630 social card. The six illustration
sources remain in `public/assets/`. Logo SVGs use paths, not live font text.

To regenerate vector outputs, use Python 3 with `fonttools==4.66.1` and
`brotli==1.2.0`, then run `python scripts/brand-assets.py`. This reads the pinned,
unmodified Inter WOFF2 and CSS colors and writes four logo variants, favicon and
the social SVG. Render that SVG to `public/assets/social.png` at 1200 × 630 with
an SVG-capable renderer (this revision used sharp/libvips). Inspect the output.

These are design-time tools only. The normal website build requires Node 20+
and no installed dependencies. `brand/` and the generator are excluded from
the deployment allowlist. Inter's copyright/license accompanies the font in
`public/fonts/Inter-OFL.txt`.
