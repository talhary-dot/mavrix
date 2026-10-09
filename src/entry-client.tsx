import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

const container = document.getElementById('root');

if (container) {
  if (container.hasChildNodes()) {
    hydrateRoot(
      container,
      <React.StrictMode>
        <App initialPath={window.location.pathname} />
      </React.StrictMode>
    );
  } else {
    createRoot(container).render(
      <React.StrictMode>
        <App initialPath={window.location.pathname} />
      </React.StrictMode>
    );
  }
}
