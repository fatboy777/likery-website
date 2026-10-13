import test, { after, before } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { server } from '../scripts/serve.mjs';
let base;
before(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  base = `http://127.0.0.1:${server.address().port}`;
});
after(() => new Promise(resolve => server.close(resolve)));

test('deployment contains only the reviewed static surface', async () => {
  assert.deepEqual((await readdir(new URL('../dist/', import.meta.url))).sort(), ['404.html','_headers','assets','index.html','robots.txt','styles.css']);
  assert.deepEqual((await readdir(new URL('../dist/assets/', import.meta.url))).sort(), ['bloom.svg','coast.svg','favicon.svg','orbit.svg','ripple.svg','social.png','studio.svg','terrace.svg']);
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /Coming soon/i);
  assert.match(html, /Not available to download yet/);
  assert.match(html, /rel="canonical" href="https:\/\/likery\.app\/"/);
  assert.doesNotMatch(html, /<script\b|<form\b|<iframe\b|privacy\.html|firebase|oauth|\/account\/|\/api\/|\/c\//i);
  const css = await readFile(new URL('../dist/styles.css', import.meta.url), 'utf8');
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.doesNotMatch(css, /@import|https?:\/\//);
  const headers = await readFile(new URL('../dist/_headers', import.meta.url), 'utf8');
  assert.match(headers, /connect-src 'none'/);
  assert.match(headers, /script-src 'none'/);
});

test('homepage, local assets, fragment links and social image resolve', async () => {
  const response = await fetch(base);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /text\/html/);
  const html = await response.text();
  for (const match of html.matchAll(/(?:src|href)="(\/[^"\s]*)"/g)) {
    assert.equal((await fetch(base + match[1])).status, 200, match[1]);
  }
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(html.includes(`id="${match[1]}"`));
  const social = await fetch(base + '/assets/social.png');
  assert.equal(social.status, 200);
  assert.equal(social.headers.get('content-type'), 'image/png');
});

test('legacy, application, missing and traversal paths produce an actual 404', async () => {
  for (const path of ['/privacy.html','/privacy','/account/','/api/','/c/example','/missing','/_headers','/README.md','/%2e%2e%2fprivacy.html']) {
    const response = await fetch(base + path);
    assert.equal(response.status, 404, path);
    assert.match(await response.text(), /Page not found/);
  }
});
