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
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

const ROBOTS_TXT = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://mavrix-zeta.vercel.app/sitemap.xml
`;

export default async function handler(req, res) {
  try {
    const rawUrl = req.url || '/';
    const cleanUrl = rawUrl.split('?')[0].split('#')[0];

    // 1. Explicit handling for robots.txt
    if (cleanUrl === '/robots.txt') {
      const candidates = [
        path.resolve(process.cwd(), 'dist/client/robots.txt'),
        path.resolve(process.cwd(), 'public/robots.txt'),
        path.resolve(__dirname, '../dist/client/robots.txt'),
        path.resolve(__dirname, 'dist/client/robots.txt'),
      ];
      let content = ROBOTS_TXT;
      for (const p of candidates) {
        if (fs.existsSync(p) && fs.statSync(p).isFile()) {
          content = fs.readFileSync(p, 'utf-8');
          break;
        }
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.end(content);
      return;
    }

    // 2. Explicit handling for sitemap.xml
    if (cleanUrl === '/sitemap.xml') {
      const candidates = [
        path.resolve(process.cwd(), 'dist/client/sitemap.xml'),
        path.resolve(process.cwd(), 'public/sitemap.xml'),
        path.resolve(__dirname, '../dist/client/sitemap.xml'),
        path.resolve(__dirname, 'dist/client/sitemap.xml'),
      ];
      for (const p of candidates) {
        if (fs.existsSync(p) && fs.statSync(p).isFile()) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.setHeader('Cache-Control', 'public, max-age=86400');
          res.end(fs.readFileSync(p, 'utf-8'));
          return;
        }
      }
    }

    // 3. Fallback: If any static asset request reaches this handler, serve it directly
    const ext = path.extname(cleanUrl).toLowerCase();
    if (ext || cleanUrl.startsWith('/assets/') || cleanUrl.startsWith('/favicon.')) {
      const relativePath = cleanUrl.replace(/^\//, '');
      const assetCandidates = [
        path.resolve(process.cwd(), 'dist/client', relativePath),
        path.resolve(process.cwd(), 'public', relativePath),
        path.resolve(__dirname, '../dist/client', relativePath),
        path.resolve(__dirname, 'dist/client', relativePath),
      ];

      for (const assetPath of assetCandidates) {
        if (fs.existsSync(assetPath) && fs.statSync(assetPath).isFile()) {
          const contentType = MIME_TYPES[ext] || 'application/octet-stream';
          res.statusCode = 200;
          res.setHeader('Content-Type', contentType);
          res.setHeader(
            'Cache-Control',
            ext === '.html' || ext === '.txt' || ext === '.xml'
              ? 'public, max-age=3600'
              : 'public, max-age=31536000, immutable'
          );
          res.end(fs.readFileSync(assetPath));
          return;
        }
      }

      // If a file with an extension was requested but doesn't exist, return 404 (do not SSR as HTML)
      if (ext && ext !== '.html') {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Not Found');
        return;
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
