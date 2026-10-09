import React, { useState, useEffect, Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { normalizeRoute, loadPage, preloadPage, pageCache, type PageComponent } from './routes';

// Lazy-load LeadModal and CookieBanner so they do not block initial page bundle or main thread
const LazyLeadModal = React.lazy(() =>
  import('./components/LeadModal').then((m) => ({ default: m.LeadModal }))
);
const LazyCookieBanner = React.lazy(() =>
  import('./components/CookieBanner').then((m) => ({ default: m.CookieBanner }))
);

interface AppProps {
  initialPath?: string;
}

export const App: React.FC<AppProps> = ({ initialPath = '/' }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizeRoute(window.location.pathname);
    }
    return normalizeRoute(initialPath);
  });

  const [PageComponent, setPageComponent] = useState<PageComponent | null>(() => {
    return pageCache.get(currentPath) || null;
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState<string>('Pay Per Lead');
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  // Defer non-critical CookieBanner until main thread is idle
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('requestIdleCallback' in window) {
      const id = (window as unknown as { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(() =>
        setShowCookieBanner(true)
      );
      return () => (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(id);
    } else {
      const t = setTimeout(() => setShowCookieBanner(true), 300);
      return () => clearTimeout(t);
    }
  }, []);

  // Load component on route change if not already cached
  useEffect(() => {
    let active = true;
    const cached = pageCache.get(currentPath);
    if (cached) {
      setPageComponent(() => cached);
    } else {
      loadPage(currentPath).then((comp) => {
        if (active && comp) {
          setPageComponent(() => comp);
        }
      });
    }
    return () => {
      active = false;
    };
  }, [currentPath]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = normalizeRoute(window.location.pathname);
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Client-side navigation helper
  const navigate = (to: string) => {
    if (typeof window === 'undefined') return;

    if (to.startsWith('#')) {
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/' + to);
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.querySelector(to);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(to);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    const [pathname, hash] = to.split('#');
    const normalized = normalizeRoute(pathname);

    // Preload target page chunk immediately
    preloadPage(normalized);

    if (normalized !== currentPath) {
      window.history.pushState({}, '', to);
      setCurrentPath(normalized);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'instant' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenModal = (plan?: string) => {
    if (plan) setModalPlan(plan);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#1C1B18] antialiased selection:bg-[#D4A574]/30 selection:text-[#0D1B3D]">
      <Header
        currentPath={currentPath}
        onOpenModal={handleOpenModal}
        navigate={navigate}
      />
      <main className="flex-grow">
        {PageComponent ? (
          <PageComponent
            navigate={navigate}
            onOpenModal={handleOpenModal}
          />
        ) : null}
      </main>
      <Footer navigate={navigate} />

      {/* Lazy-loaded modal rendered only when active */}
      {modalOpen && (
        <Suspense fallback={null}>
          <LazyLeadModal
            isOpen={modalOpen}
            onClose={handleCloseModal}
            initialPlan={modalPlan}
          />
        </Suspense>
      )}

      {showCookieBanner && (
        <Suspense fallback={null}>
          <LazyCookieBanner />
        </Suspense>
      )}
    </div>
  );
};

export default App;
