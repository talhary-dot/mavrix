import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let template = null;
let render = null;

export default async function handler(req, res) {
  try {
    const url = req.url || '/';

    // 1. Locate and read client HTML template
    if (!template) {
      const candidates = [
        path.resolve(process.cwd(), 'dist/client/index.html'),
        path.resolve(__dirname, '../dist/client/index.html'),
        path.resolve(__dirname, 'dist/client/index.html'),
      ];
      for (const p of candidates) {
        if (fs.existsSync(p)) {
          template = fs.readFileSync(p, 'utf-8');
          break;
        }
      }
      if (!template) {
        throw new Error('SSR template index.html not found in dist/client');
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
    const { html: appHtml, head: appHead } = await render(url);

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
