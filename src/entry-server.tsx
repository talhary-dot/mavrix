import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';

interface RouteMeta {
  title: string;
  description: string;
}

const routeMetadata: Record<string, RouteMeta> = {
  '/': {
    title: 'Mavrix Realty | Verified Real Estate Leads & ISA Solutions',
    description: 'Mavrix Realty connects top-producing agents with 100% verified, phone-screened buyers and sellers. Explore Pay Per Lead, Pay At Closing, and Monthly plans.',
  },
  '/how-it-works': {
    title: 'How It Works - Mavrix Realty',
    description: 'Learn how Mavrix Realty generates, phone-verifies, and live-transfers motivated buyer and seller leads directly to your CRM.',
  },
  '/services': {
    title: 'Services - Mavrix Realty',
    description: 'Explore our real estate lead models: Pay Per Lead, Pay At Closing, and Monthly Concierge services engineered for high-producing agents.',
  },
  '/pricing': {
    title: 'Pricing - Mavrix Realty',
    description: 'Transparent, county-exclusive pricing for verified real estate leads and ISA warm transfer services. Compare monthly vs per-lead plans.',
  },
  '/contact-us': {
    title: 'Contact Us - Mavrix Realty',
    description: 'Get in touch with the Mavrix Realty team. Inquire about county territory availability, custom lead programs, or priority agent support.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy - Mavrix Realty',
    description: 'Mavrix Realty Privacy Policy covering SMS TCPA compliance, email CAN-SPAM standards, and personal data protection.',
  },
  '/terms-of-use': {
    title: 'Terms of Use - Mavrix Realty',
    description: 'Mavrix Realty Terms of Use governing access to the website, lead platform, intellectual property, and service agreements.',
  },
  '/communications-policy': {
    title: 'Communications Policy - Mavrix Realty',
    description: 'Mavrix Realty Communications Policy outlining standards for automated and non-automated telephone, SMS, and email messaging.',
  },
};

export function render(url: string) {
  // Normalize url
  const cleanPath = url.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
  const meta = routeMetadata[cleanPath] || routeMetadata['/'];

  const html = renderToString(
    <React.StrictMode>
      <App initialPath={cleanPath} />
    </React.StrictMode>
  );

  const canonicalUrl = cleanPath === '/' ? 'https://mavrix-zeta.vercel.app/' : `https://mavrix-zeta.vercel.app${cleanPath}`;

  const head = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="Mavrix Realty" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <link rel="canonical" href="${canonicalUrl}" />
  `;

  return { html, head };
}
