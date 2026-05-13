import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = fileURLToPath(new URL('.', import.meta.url));
const PORT = 3000;

const MIME = {
  '.html':  'text/html; charset=utf-8',
  '.css':   'text/css; charset=utf-8',
  '.js':    'application/javascript; charset=utf-8',
  '.jsx':   'application/javascript; charset=utf-8',
  '.mjs':   'application/javascript; charset=utf-8',
  '.json':  'application/json; charset=utf-8',
  '.png':   'image/png',
  '.jpg':   'image/jpeg',
  '.jpeg':  'image/jpeg',
  '.webp':  'image/webp',
  '.svg':   'image/svg+xml',
  '.ttf':   'font/ttf',
  '.woff':  'font/woff',
  '.woff2': 'font/woff2',
  '.xlsx':  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};

const server = createServer(async (req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  // Root redirect → Gili Gede home
  if (urlPath === '/' || urlPath === '/index.html') {
    res.writeHead(302, { Location: '/brand_assets/Gili%20Gede/index.html' });
    res.end();
    return;
  }

  const filePath = join(ROOT, urlPath);

  try {
    const data = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`404 Not found: ${urlPath}`);
  }
});

server.listen(PORT, () => {
  console.log(`\nServer running at http://localhost:${PORT}`);
  console.log(`Home:    http://localhost:${PORT}/brand_assets/Gili%20Gede/index.html`);
  console.log(`About:   http://localhost:${PORT}/brand_assets/Gili%20Gede/about.html`);
  console.log(`Pricing: http://localhost:${PORT}/brand_assets/Gili%20Gede/pricing.html`);
  console.log(`Contact: http://localhost:${PORT}/brand_assets/Gili%20Gede/contact.html\n`);
});
