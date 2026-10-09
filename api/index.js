import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let template = null;
let render = null;

const MIME_TYPES = {
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

export default async function handler(req, res) {
  try {
    const rawUrl = req.url || '/';
    const cleanUrl = rawUrl.split('?')[0].split('#')[0];

    // Fallback: If a static asset request reaches this handler, serve it directly
    if (cleanUrl.startsWith('/assets/') || cleanUrl.startsWith('/favicon.')) {
      const relativePath = cleanUrl.replace(/^\//, '');
      const assetCandidates = [
        path.resolve(process.cwd(), 'dist/client', relativePath),
        path.resolve(__dirname, '../dist/client', relativePath),
        path.resolve(__dirname, 'dist/client', relativePath),
      ];

      for (const assetPath of assetCandidates) {
        if (fs.existsSync(assetPath) && fs.statSync(assetPath).isFile()) {
          const ext = path.extname(assetPath).toLowerCase();
          const contentType = MIME_TYPES[ext] || 'application/octet-stream';
          res.statusCode = 200;
          res.setHeader('Content-Type', contentType);
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          res.end(fs.readFileSync(assetPath));
          return;
        }
      }
    }

    // 1. Locate and read client HTML template
    if (!template) {
      const candidates = [
        path.resolve(process.cwd(), 'dist/template.html'),
        path.resolve(process.cwd(), 'dist/client/template.html'),
        path.resolve(process.cwd(), 'dist/client/index.html'),
        path.resolve(__dirname, '../dist/template.html'),
        path.resolve(__dirname, '../dist/client/template.html'),
        path.resolve(__dirname, '../dist/client/index.html'),
      ];
      for (const p of candidates) {
        if (fs.existsSync(p)) {
          template = fs.readFileSync(p, 'utf-8');
          break;
        }
      }
      if (!template) {
        throw new Error('SSR template HTML not found in dist');
      }
    }

    // 2. Locate and import SSR render function
    if (!render) {
      const candidates = [
        path.resolve(process.cwd(), 'dist/server/entry-server.js'),
        path.resolve(__dirname, '../dist/server/entry-server.js'),
        path.resolve(__dirname, 'dist/server/entry-server.js'),
      ];
      let serverEntry = null;
      for (const p of candidates) {
        if (fs.existsSync(p)) {
          serverEntry = p;
          break;
        }
      }
      if (!serverEntry) {
        throw new Error('SSR server entry-server.js not found in dist/server');
      }
      const entryModule = await import(pathToFileURL(serverEntry).href);
      render = entryModule.render;
    }

    // 3. Render page HTML & SEO head for current URL
    const { html: appHtml, head: appHead } = await render(cleanUrl);

    const html = template
      .replace('<!--ssr-head-->', appHead || '')
      .replace('<!--ssr-outlet-->', appHtml || '');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(html);
  } catch (error) {
    console.error('Vercel SSR Handler Error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(error?.stack || 'Internal Server Error');
  }
}
