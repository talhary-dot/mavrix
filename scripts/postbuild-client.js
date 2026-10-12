// Moves the built index.html to dist/template.html and inlines the entry stylesheet,
// removing a render-blocking request from the critical path.
import fs from 'node:fs';
import path from 'node:path';

const clientDir = path.resolve('dist/client');
let html = fs.readFileSync(path.join(clientDir, 'index.html'), 'utf-8');

html = html.replace(
  /<link rel="stylesheet"(?: crossorigin)? href="(\/assets\/[^"]+\.css)">/g,
  (tag, href) => {
    const cssPath = path.join(clientDir, href);
    if (!fs.existsSync(cssPath)) return tag;
    const css = fs.readFileSync(cssPath, 'utf-8').replace(/<\/style/gi, '<\/style');
    return `<style>${css}</style>`;
  }
);

fs.writeFileSync(path.resolve('dist/template.html'), html);
fs.writeFileSync(path.join(clientDir, 'template.html'), html);
fs.unlinkSync(path.join(clientDir, 'index.html'));
