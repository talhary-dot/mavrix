import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { CookieBanner } from './components/CookieBanner';

// Pages
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { ContactUs } from './pages/ContactUs';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { CommunicationsPolicy } from './pages/CommunicationsPolicy';

interface AppProps {
  initialPath?: string;
}

export const App: React.FC<AppProps> = ({ initialPath = '/' }) => {
  // Normalize path by stripping trailing slash (except root)
  const normalizePath = (p: string) => {
    const clean = p.split('?')[0].split('#')[0];
    if (clean.length > 1 && clean.endsWith('/')) {
      return clean.slice(0, -1);
    }
    return clean || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return normalizePath(initialPath);
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState<string>('Pay Per Lead');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
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
    const normalized = normalizePath(pathname);

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

  // Route matching
  const renderRoute = () => {
    switch (currentPath) {
      case '/':
        return <Home navigate={navigate} onOpenModal={handleOpenModal} />;
      case '/how-it-works':
        return <HowItWorks navigate={navigate} onOpenModal={handleOpenModal} />;
      case '/services':
        return <Services navigate={navigate} onOpenModal={handleOpenModal} />;
      case '/pricing':
        return <Pricing navigate={navigate} onOpenModal={handleOpenModal} />;
      case '/contact-us':
        return <ContactUs navigate={navigate} onOpenModal={handleOpenModal} />;
      case '/privacy-policy':
        return <PrivacyPolicy navigate={navigate} />;
      case '/terms-of-use':
        return <TermsOfUse navigate={navigate} />;
      case '/communications-policy':
        return <CommunicationsPolicy navigate={navigate} />;
      default:
        return <Home navigate={navigate} onOpenModal={handleOpenModal} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#1C1B18] antialiased selection:bg-[#D4A574]/30 selection:text-[#0D1B3D]">
      <Header
        currentPath={currentPath}
        onOpenModal={handleOpenModal}
        navigate={navigate}
      />
      <main className="flex-grow">
        {renderRoute()}
      </main>
      <Footer navigate={navigate} />

      {/* Global Interactive Elements */}
      <LeadModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialPlan={modalPlan}
      />
      <CookieBanner />
    </div>
  );
};

export default App;
