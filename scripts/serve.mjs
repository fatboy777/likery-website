import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.txt': 'text/plain; charset=utf-8' };
const allowed = new Set(['index.html','404.html','styles.css','robots.txt','assets/favicon.svg','assets/terrace.svg','assets/bloom.svg','assets/orbit.svg','assets/coast.svg','assets/studio.svg','assets/ripple.svg','assets/social.png']);
export const server = createServer(async (request, response) => {
  let body;
  let status = 200;
  let filename;
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    filename = pathname === '/' ? 'index.html' : pathname.slice(1);
    if (pathname === '/404') filename = '404.html';
    if (!allowed.has(filename)) throw new Error('Not found');
    const target = resolve(root, filename);
    if (relative(root, target).startsWith('..')) throw new Error('Not found');
    body = await readFile(target);
  } catch {
    status = 404;
    filename = '404.html';
    body = await readFile(resolve(root, filename));
  }
  response.writeHead(status, { 'Content-Type': types[extname(filename)] ?? 'application/octet-stream', 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-store' });
  response.end(request.method === 'HEAD' ? undefined : body);
});
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT ?? 4177);
  server.listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}`));
}
