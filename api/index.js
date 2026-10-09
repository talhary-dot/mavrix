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

const LLMS_TXT = `# Mavrix Realty

> Mavrix Realty connects licensed real estate agents with 100% verified, phone-screened buyer and seller prospects through live three-way calls, Pay Per Lead pricing, and monthly concierge plans.

## Overview

Mavrix Realty provides inbound lead generation and ISA qualifying services for real estate brokerages and agents across the United States. Every prospect is screened for intent, timeframe, and financing readiness before being connected to an agent.

## Core Pages

- [Home](https://mavrix-zeta.vercel.app/): Overview of verified real estate leads, live call verification, and pricing models.
- [How It Works](https://mavrix-zeta.vercel.app/how-it-works): Detailed five-step process from prospect qualification to confirmed delivery.
- [Services](https://mavrix-zeta.vercel.app/services): Pay Per Lead, Pay At Closing, and monthly concierge services for producing agents.
- [Pricing](https://mavrix-zeta.vercel.app/pricing): Transparent pricing tiers (Starter, Professional, Enterprise) and per-lead rates.
- [Contact Us](https://mavrix-zeta.vercel.app/contact-us): Brokerage inquiry form, territory availability, and agent support.

## Policies & Compliance

- [Privacy Policy](https://mavrix-zeta.vercel.app/privacy-policy): Privacy practices, consumer rights, and 10DLC SMS compliance guidelines.
- [Terms of Use](https://mavrix-zeta.vercel.app/terms-of-use): Terms governing use of the lead platform and website.
- [Communications Policy](https://mavrix-zeta.vercel.app/communications-policy): TCPA, telephone, and email communication standards.
`;

const AI_CATALOG_JSON = JSON.stringify(
  {
    specVersion: "1.0",
    host: {
      displayName: "Mavrix Realty",
      documentationUrl: "https://mavrix-zeta.vercel.app/services"
    },
    entries: [
      {
        identifier: "urn:air:mavrix-zeta.vercel.app:web:services",
        displayName: "Mavrix Realty Lead Generation Services",
        type: "text/html",
        url: "https://mavrix-zeta.vercel.app/services",
        description: "Verified real estate buyer and seller lead services, live transfer solutions, and monthly concierge plans."
      },
      {
        identifier: "urn:air:mavrix-zeta.vercel.app:docs:llmstxt",
        displayName: "Mavrix Realty LLM Documentation",
        type: "text/markdown",
        url: "https://mavrix-zeta.vercel.app/llms.txt",
        description: "Machine-readable overview and route map for AI agents and language models."
      }
    ]
  },
  null,
  2
);

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

    // 3. Explicit handling for llms.txt (Agent Discoverability)
    if (cleanUrl === '/llms.txt') {
      const candidates = [
        path.resolve(process.cwd(), 'dist/client/llms.txt'),
        path.resolve(process.cwd(), 'public/llms.txt'),
        path.resolve(__dirname, '../dist/client/llms.txt'),
        path.resolve(__dirname, 'dist/client/llms.txt'),
      ];
      let content = LLMS_TXT;
      for (const p of candidates) {
        if (fs.existsSync(p) && fs.statSync(p).isFile()) {
          content = fs.readFileSync(p, 'utf-8');
          break;
        }
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.end(content);
      return;
    }

    // 4. Explicit handling for ai-catalog.json and ard.json (ARD Specification)
    if (
      cleanUrl === '/ai-catalog.json' ||
      cleanUrl === '/.well-known/ai-catalog.json' ||
      cleanUrl === '/.well-known/ard.json'
    ) {
      const relativePath = cleanUrl.replace(/^\//, '');
      const candidates = [
        path.resolve(process.cwd(), 'dist/client', relativePath),
        path.resolve(process.cwd(), 'public', relativePath),
        path.resolve(__dirname, '../dist/client', relativePath),
        path.resolve(__dirname, 'dist/client', relativePath),
        path.resolve(process.cwd(), 'dist/client/ai-catalog.json'),
        path.resolve(process.cwd(), 'public/ai-catalog.json'),
      ];
      let content = AI_CATALOG_JSON;
      for (const p of candidates) {
        if (fs.existsSync(p) && fs.statSync(p).isFile()) {
          content = fs.readFileSync(p, 'utf-8');
          break;
        }
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.end(content);
      return;
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
