"""Regenerate vector brand assets from the pinned Inter font and CSS tokens.

Developer-only dependencies: fonttools==4.66.1, brotli==1.2.0.
The static site build does not run this script or need Python.
Render brand/social.svg to public/assets/social.png with an SVG renderer at
1200 x 630 after generation. All text in the SVG is outlined.
"""
from pathlib import Path
import base64
import re
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

ROOT = Path(__file__).resolve().parents[1]
TOKENS = dict(re.findall(r'--([\w-]+):\s*(#[0-9A-Fa-f]+)', (ROOT / 'public/styles.css').read_text()))
SOURCE = TTFont(ROOT / 'public/fonts/InterVariable-v4.1.woff2')
FONTS = {}
MARK = '<path d="M8 5v22h19v-7H15V5Z"/><circle cx="25" cy="8" r="4"/>'

def color(name):
    return TOKENS[name]

def text_paths(text, x, baseline, size, weight, fill, tracking=0):
    if weight not in FONTS:
        FONTS[weight] = instantiateVariableFont(SOURCE, {'wght': weight, 'opsz': 32}, inplace=False)
    font = FONTS[weight]
    glyphs = font.getGlyphSet()
    cmap = font.getBestCmap()
    scale = size / font['head'].unitsPerEm
    paths = []
    for letter in text:
        glyph = glyphs[cmap[ord(letter)]]
        pen = SVGPathPen(glyphs, ntos=lambda value: f'{value:.3f}'.rstrip('0').rstrip('.'))
        glyph.draw(TransformPen(pen, (scale, 0, 0, -scale, x, baseline)))
        if pen.getCommands():
            paths.append(f'<path fill="{fill}" d="{pen.getCommands()}"/>')
        x += glyph.width * scale + tracking
    return ''.join(paths), x

def wordmark(dark=False):
    accent = color('dark-accent' if dark else 'accent')
    ink = color('dark-text' if dark else 'text')
    letters, end = text_paths('likery', 43, 28, 32, 700, ink, -1.2)
    period, _ = text_paths('.', end, 28, 32, 700, accent)
    return f'<g transform="translate(0 2)" fill="{accent}">{MARK}</g>{letters}{period}'

def svg(body, width, height, title):
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}"><title>{title}</title>{body}</svg>\n'

for dark in (False, True):
    variant = 'dark' if dark else 'light'
    accent = color('dark-accent' if dark else 'accent')
    (ROOT / f'public/assets/logo-symbol-{variant}.svg').write_text(svg(f'<g fill="{accent}">{MARK}</g>', 32, 32, 'Likery symbol'), encoding='utf-8')
    (ROOT / f'public/assets/logo-wordmark-{variant}.svg').write_text(svg(wordmark(dark), 140, 36, 'Likery'), encoding='utf-8')

favicon = f'<rect width="64" height="64" rx="15" fill="{color("bg")}"/><g transform="translate(-5 1) scale(2)" fill="{color("accent")}">{MARK}</g>'
(ROOT / 'public/assets/favicon.svg').write_text(svg(favicon, 64, 64, 'Likery'), encoding='utf-8')

social = f'<rect width="1200" height="630" fill="{color("bg")}"/><g transform="translate(64 48) scale(1.4)">{wordmark()}</g>'
social += text_paths('Your taste.', 75, 262, 84, 500, color('text'), -4.2)[0]
social += text_paths('In one place.', 75, 355, 84, 500, color('accent'), -4.2)[0]
social += f'<rect x="75" y="470" width="221" height="47" rx="23.5" fill="none" stroke="{color("border")}"/>'
social += f'<circle cx="97" cy="493" r="3" fill="{color("accent")}"/>'
social += text_paths('COMING SOON', 111, 500, 17, 600, color('action'), 1.3)[0]
for name, x, y, w, h in [('terrace', 817, 130, 160, 204), ('bloom', 817, 352, 160, 160), ('orbit', 995, 55, 160, 160), ('coast', 995, 233, 160, 213)]:
    data = base64.b64encode((ROOT / f'public/assets/{name}.svg').read_bytes()).decode()
    social += f'<defs><clipPath id="{name}"><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12"/></clipPath></defs><image x="{x}" y="{y}" width="{w}" height="{h}" clip-path="url(#{name})" href="data:image/svg+xml;base64,{data}"/>'
(ROOT / 'brand/social.svg').write_text(svg(social, 1200, 630, 'Likery. Your taste, in one place. Coming soon.'), encoding='utf-8')
print('Generated four logo variants, favicon and outlined social SVG.')
