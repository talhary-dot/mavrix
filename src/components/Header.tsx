import React, { useState } from 'react';

interface HeaderProps {
  currentPath: string;
  onOpenModal: (plan?: string) => void;
  navigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onOpenModal, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (currentPath !== '/') {
        navigate('/' + href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6EF]/90 backdrop-blur-md border-b border-[#E4DCC9]">
      <div className="flex items-center justify-between px-6 md:px-8 py-4 max-w-[1180px] mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            aria-label="Mavrix Realty home"
            className="flex items-center gap-2.5 text-[#0D1B3D] no-underline group"
          >
            <svg width="32" height="32" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 378.765625 247.042969 L 378.765625 422.828125 L 468.449219 519.648438 L 468.449219 317.332031 L 642.789062 317.332031 C 726.679688 317.332031 769.867188 344.804688 769.867188 416.476562 C 769.867188 463.757812 751.140625 491.796875 714.324219 505.375 L 767.320312 562.523438 C 824.773438 535.363281 859.554688 485.132812 859.554688 416.476562 C 859.554688 308.59375 774.835938 247.042969 651.136719 247.042969 Z M 378.765625 247.042969"
                fill="url(#navy-hdr)"
              />
              <path
                d="M 510.5625 515.6875 L 490.316406 538.003906 L 385.011719 422.828125 L 379.414062 416.730469 L 75 752.957031 L 185.523438 752.957031 L 380.859375 537 L 385.011719 541.589844 L 436.0625 597.984375 L 385.011719 654.378906 L 313.152344 733.71875 L 423.675781 733.71875 L 425.058594 732.210938 L 473.53125 678.644531 L 491.261719 659.03125 L 575.316406 751.886719 L 576.261719 752.957031 L 686.847656 752.957031 L 545.832031 598.738281 L 557.335938 585.976562 L 619.074219 517.761719 L 679.808594 584.90625 L 813.46875 732.652344 L 814.410156 733.71875 L 925 733.71875 L 768.515625 562.523438 L 716.210938 505.375 L 617.566406 397.492188 Z M 510.5625 515.6875"
                fill="url(#tan-hdr)"
              />
              <path
                d="M 476.527344 702.558594 L 509.074219 702.558594 L 509.074219 735.109375 L 476.527344 735.109375 Z M 476.527344 702.558594"
                fill="url(#tan-hdr)"
              />
              <defs>
                <linearGradient id="navy-hdr" x1="378" y1="247" x2="860" y2="563" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#003568" />
                  <stop offset="1" stopColor="#002152" />
                </linearGradient>
                <linearGradient id="tan-hdr" x1="75" y1="397" x2="925" y2="753" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F6C7A6" />
                  <stop offset="1" stopColor="#D49B6F" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-semibold text-lg md:text-[19px] tracking-tight text-[#0D1B3D]">
              Mavrix Realty
            </span>
          </a>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-[14.5px] font-medium text-[#14285A]">
          <a
            href="/how-it-works"
            onClick={(e) => handleLinkClick(e, '/how-it-works')}
            className={`transition-opacity hover:opacity-100 ${currentPath === '/how-it-works' ? 'opacity-100 font-semibold text-[#B8834A]' : 'opacity-85'}`}
          >
            How It Works
          </a>
          <a
            href="/services"
            onClick={(e) => handleLinkClick(e, '/services')}
            className={`transition-opacity hover:opacity-100 ${currentPath === '/services' ? 'opacity-100 font-semibold text-[#B8834A]' : 'opacity-85'}`}
          >
            Services
          </a>
          <a
            href="/pricing"
            onClick={(e) => handleLinkClick(e, '/pricing')}
            className={`transition-opacity hover:opacity-100 ${currentPath === '/pricing' ? 'opacity-100 font-semibold text-[#B8834A]' : 'opacity-85'}`}
          >
            Pricing
          </a>
          <a
            href="#trust"
            onClick={(e) => handleLinkClick(e, '#trust')}
            className="opacity-85 transition-opacity hover:opacity-100"
          >
            Why Us
          </a>
          <a
            href="#faq"
            onClick={(e) => handleLinkClick(e, '#faq')}
            className="opacity-85 transition-opacity hover:opacity-100"
          >
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#find-agent"
            onClick={(e) => handleLinkClick(e, '#find-agent')}
            className="btn btn-ghost !py-2.5 !px-4 !text-[14px]"
          >
            Find an Agent
          </a>
          <button
            onClick={() => onOpenModal('Pay Per Lead')}
            className="btn btn-primary !py-2.5 !px-4 !text-[14px]"
          >
            Get Started →
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 bg-transparent border-0 cursor-pointer text-[#0D1B3D]"
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-[2px] bg-[#0D1B3D] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-[#0D1B3D] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-[#0D1B3D] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6EF] border-b border-[#E4DCC9] px-6 py-6 flex flex-col gap-4 shadow-lg animate-modal">
          <a
            href="/how-it-works"
            onClick={(e) => handleLinkClick(e, '/how-it-works')}
            className="text-[15px] font-medium text-[#14285A] py-1"
          >
            How It Works
          </a>
          <a
            href="/services"
            onClick={(e) => handleLinkClick(e, '/services')}
            className="text-[15px] font-medium text-[#14285A] py-1"
          >
            Services
          </a>
          <a
            href="/pricing"
            onClick={(e) => handleLinkClick(e, '/pricing')}
            className="text-[15px] font-medium text-[#14285A] py-1"
          >
            Pricing
          </a>
          <a
            href="#trust"
            onClick={(e) => handleLinkClick(e, '#trust')}
            className="text-[15px] font-medium text-[#14285A] py-1"
          >
            Why Us
          </a>
          <a
            href="#faq"
            onClick={(e) => handleLinkClick(e, '#faq')}
            className="text-[15px] font-medium text-[#14285A] py-1"
          >
            FAQ
          </a>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="#find-agent"
              onClick={(e) => handleLinkClick(e, '#find-agent')}
              className="btn btn-ghost text-center w-full"
            >
              Find an Agent
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('Pay Per Lead');
              }}
              className="btn btn-primary text-center w-full"
            >
              Get Started →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
