import { mkdir, copyFile, rm } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const files = ['index.html', '404.html', 'styles.css', '_headers', 'robots.txt',
  'assets/favicon.svg', 'assets/terrace.svg', 'assets/bloom.svg', 'assets/orbit.svg',
  'assets/coast.svg', 'assets/studio.svg', 'assets/ripple.svg', 'assets/social.png',
  'assets/logo-symbol-light.svg', 'assets/logo-symbol-dark.svg',
  'assets/logo-wordmark-light.svg', 'assets/logo-wordmark-dark.svg',
  'fonts/InterVariable-v4.1.woff2', 'fonts/Inter-OFL.txt'];
const output = resolve(root, 'dist');
if (relative(root, output) !== 'dist') throw new Error('Unexpected build target');
await rm(output, { recursive: true, force: true });
await mkdir(resolve(output, 'assets'), { recursive: true });
await mkdir(resolve(output, 'fonts'), { recursive: true });
for (const file of files) await copyFile(resolve(root, 'public', file), resolve(output, file));
console.log(`Built ${files.length} allowlisted static files into dist/ (no legacy pages, scripts, or Functions).`);
