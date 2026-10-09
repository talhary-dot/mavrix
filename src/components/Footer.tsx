import React from 'react';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      navigate('/' + href);
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-[#0D1B3D] text-white/70 pt-16 pb-8 border-t border-white/10 mt-20">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="30" height="30" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 378.765625 247.042969 L 378.765625 422.828125 L 468.449219 519.648438 L 468.449219 317.332031 L 642.789062 317.332031 C 726.679688 317.332031 769.867188 344.804688 769.867188 416.476562 C 769.867188 463.757812 751.140625 491.796875 714.324219 505.375 L 767.320312 562.523438 C 824.773438 535.363281 859.554688 485.132812 859.554688 416.476562 C 859.554688 308.59375 774.835938 247.042969 651.136719 247.042969 Z M 378.765625 247.042969"
                  fill="#FFFFFF"
                />
                <path
                  d="M 510.5625 515.6875 L 490.316406 538.003906 L 385.011719 422.828125 L 379.414062 416.730469 L 75 752.957031 L 185.523438 752.957031 L 380.859375 537 L 385.011719 541.589844 L 436.0625 597.984375 L 385.011719 654.378906 L 313.152344 733.71875 L 423.675781 733.71875 L 425.058594 732.210938 L 473.53125 678.644531 L 491.261719 659.03125 L 575.316406 751.886719 L 576.261719 752.957031 L 686.847656 752.957031 L 545.832031 598.738281 L 557.335938 585.976562 L 619.074219 517.761719 L 679.808594 584.90625 L 813.46875 732.652344 L 814.410156 733.71875 L 925 733.71875 L 768.515625 562.523438 L 716.210938 505.375 L 617.566406 397.492188 Z M 510.5625 515.6875"
                  fill="url(#tan-ftr)"
                />
                <path
                  d="M 476.527344 702.558594 L 509.074219 702.558594 L 509.074219 735.109375 L 476.527344 735.109375 Z M 476.527344 702.558594"
                  fill="url(#tan-ftr)"
                />
                <defs>
                  <linearGradient id="tan-ftr" x1="75" y1="397" x2="925" y2="753" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F6C7A6" />
                    <stop offset="1" stopColor="#D49B6F" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-semibold text-lg tracking-tight text-white">
                Mavrix Realty
              </span>
            </div>

            <div className="flex flex-col gap-2.5 text-[13.5px] text-white/65 mt-4">
              <span className="flex items-center gap-2">
                <span>✉</span> contact@mavrixrealty.com
              </span>
              <span className="flex items-center gap-2">
                <span>☎</span> (906) 210-4947
              </span>
              <span className="flex items-start gap-2">
                <span>📍</span> 2222 W. Grand River Ave, Ste A, Okemos, MI 48864, USA
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white text-[13.5px] font-semibold mb-4 uppercase tracking-wider">
              Product
            </h3>
            <div className="flex flex-col gap-2.5 text-[13.5px]">
              <a
                href="/how-it-works"
                onClick={(e) => handleLinkClick(e, '/how-it-works')}
                className="text-white/60 hover:text-[#EED3B0] transition-colors"
              >
                How It Works
              </a>
              <a
                href="/services"
                onClick={(e) => handleLinkClick(e, '/services')}
                className="text-white/60 hover:text-[#EED3B0] transition-colors"
              >
                Services
              </a>
              <a
                href="/pricing"
                onClick={(e) => handleLinkClick(e, '/pricing')}
                className="text-white/60 hover:text-[#EED3B0] transition-colors"
              >
                Pricing
              </a>
              <a
                href="/#faq"
                onClick={(e) => handleLinkClick(e, '/#faq')}
                className="text-white/60 hover:text-[#EED3B0] transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-[13.5px] font-semibold mb-4 uppercase tracking-wider">
              Company
            </h3>
            <div className="flex flex-col gap-2.5 text-[13.5px]">
              <a
                href="/#trust"
                onClick={(e) => handleLinkClick(e, '/#trust')}
                className="text-white/60 hover:text-[#EED3B0] transition-colors"
              >
                About
              </a>
              <a
                href="/contact-us"
                onClick={(e) => handleLinkClick(e, '/contact-us')}
                className="text-white/60 hover:text-[#EED3B0] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-[13.5px] font-semibold mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <div className="flex flex-col gap-2.5 text-[13.5px]">
              <a
                href="/privacy-policy"
                onClick={(e) => handleLinkClick(e, '/privacy-policy')}
                className="text-white/60 hover:text-[#EED3B0] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                onClick={(e) => handleLinkClick(e, '/terms-of-use')}
                className="text-white/60 hover:text-[#EED3B0] transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="/communications-policy"
                onClick={(e) => handleLinkClick(e, '/communications-policy')}
                className="text-white/60 hover:text-[#EED3B0] transition-colors"
              >
                Communications Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12.5px] text-white/70 gap-3">
          <span>© 2026 Mavrix Realty. All rights reserved.</span>
          <span>Designed and Developed by Pluslogix</span>
        </div>
      </div>
    </footer>
  );
};
