import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import express from 'express';
import compression from 'compression';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const port = Number(process.env.PORT) || 5173;

async function createServer() {
  const app = express();

  app.use(compression());

  let vite;
  if (!isProduction) {
    const { createServer } = await import('vite');
    vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist/client
    app.use(
      express.static(path.resolve(__dirname, 'dist/client'), {
        index: false,
        maxAge: '1y',
        immutable: true,
      })
    );
  }

  // Pre-load production template and render function
  const templatePath = fs.existsSync(path.resolve(__dirname, 'dist/template.html'))
    ? path.resolve(__dirname, 'dist/template.html')
    : path.resolve(__dirname, 'dist/client/index.html');
  const prodTemplate = isProduction && fs.existsSync(templatePath)
    ? fs.readFileSync(templatePath, 'utf-8')
    : '';
  const prodServerEntryPath = path.resolve(__dirname, 'dist/server/entry-server.js');
  const prodRender = isProduction
    ? (await import(pathToFileURL(prodServerEntryPath).href)).render
    : null;

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template;
      let render;

      if (!isProduction) {
        // Read index.html freshly in dev
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = prodTemplate;
        render = prodRender;
      }

      const { html: appHtml, head: appHead } = await render(url);

      const html = template
        .replace('<!--ssr-head-->', appHead || '')
        .replace('<!--ssr-outlet-->', appHtml || '');

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app };
}

createServer().then(({ app }) => {
  app.listen(port, '0.0.0.0', () => {
    console.log(`> Mavrix Realty SSR server running at http://localhost:${port}`);
    console.log(`> Environment: ${isProduction ? 'production' : 'development'}`);
  });
});
