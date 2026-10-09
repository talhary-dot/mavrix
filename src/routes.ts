import type { ComponentType } from 'react';

export interface PageProps {
  navigate: (path: string) => void;
  onOpenModal?: (plan?: string) => void;
}

export type PageComponent = ComponentType<any>;

// In-memory cache for loaded page components
export const pageCache = new Map<string, PageComponent>();

export const ROUTE_LOADERS: Record<string, () => Promise<{ [key: string]: any }>> = {
  '/': () => import('./pages/Home'),
  '/how-it-works': () => import('./pages/HowItWorks'),
  '/services': () => import('./pages/Services'),
  '/pricing': () => import('./pages/Pricing'),
  '/contact-us': () => import('./pages/ContactUs'),
  '/privacy-policy': () => import('./pages/PrivacyPolicy'),
  '/terms-of-use': () => import('./pages/TermsOfUse'),
  '/communications-policy': () => import('./pages/CommunicationsPolicy'),
};

export const ROUTE_EXPORT_NAMES: Record<string, string> = {
  '/': 'Home',
  '/how-it-works': 'HowItWorks',
  '/services': 'Services',
  '/pricing': 'Pricing',
  '/contact-us': 'ContactUs',
  '/privacy-policy': 'PrivacyPolicy',
  '/terms-of-use': 'TermsOfUse',
  '/communications-policy': 'CommunicationsPolicy',
};

export function normalizeRoute(path: string): string {
  const clean = path.split('?')[0].split('#')[0];
  if (clean.length > 1 && clean.endsWith('/')) {
    return clean.slice(0, -1);
  }
  return clean || '/';
}

export async function loadPage(path: string): Promise<PageComponent | null> {
  const normalized = normalizeRoute(path);
  if (pageCache.has(normalized)) {
    return pageCache.get(normalized)!;
  }
  const loader = ROUTE_LOADERS[normalized] || ROUTE_LOADERS['/'];
  const exportName = ROUTE_EXPORT_NAMES[normalized] || 'Home';
  try {
    const mod = await loader();
    const component = mod[exportName] || mod.default;
    if (component) {
      pageCache.set(normalized, component);
      return component;
    }
  } catch (err) {
    console.error(`Failed to load page for route ${normalized}:`, err);
  }
  return null;
}

export function preloadPage(path: string): void {
  const normalized = normalizeRoute(path);
  if (!pageCache.has(normalized)) {
    loadPage(normalized).catch(() => {});
  }
}
