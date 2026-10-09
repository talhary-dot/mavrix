import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { App } from './App';
import { normalizeRoute, loadPage } from './routes';
import './index.css';

const container = document.getElementById('root');

async function bootstrap() {
  if (!container) return;
  const currentPath = normalizeRoute(window.location.pathname);

  // Preload the active route component so hydration matches the server HTML synchronously
  await loadPage(currentPath);

  if (container.hasChildNodes()) {
    hydrateRoot(
      container,
      <React.StrictMode>
        <App initialPath={currentPath} />
      </React.StrictMode>
    );
  } else {
    createRoot(container).render(
      <React.StrictMode>
        <App initialPath={currentPath} />
      </React.StrictMode>
    );
  }
}

bootstrap();
