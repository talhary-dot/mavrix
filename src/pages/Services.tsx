import React from 'react';

interface ServicesProps {
  onOpenModal: (plan?: string) => void;
  navigate: (path: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenModal, navigate }) => {
  return (
    <div className="w-full">
      {/* HERO WITH ARCHITECTURAL VECTOR */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center bg-[#14285A] text-white">
        {/* Glow */}
        <div className="absolute -right-32 -top-40 w-[600px] h-[600px] rounded-full bg-[#D4A574]/10 pointer-events-none" />

        {/* Real Estate Architectural Graphic */}
        <div className="absolute right-0 bottom-0 w-[600px] h-[400px] pointer-events-none opacity-40 hidden md:block">
          <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Grid */}
            <defs>
              <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="600" height="400" fill="url(#archGrid)" />

            {/* Building 1 */}
            <rect x="340" y="80" width="200" height="320" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
            <polygon points="340,80 380,40 580,40 540,80" stroke="#D4A574" strokeWidth="1.5" fill="rgba(212,165,116,0.04)" />
            {/* Windows */}
            {[120, 160, 200, 240, 280, 320].map((y) => (
              <g key={y}>
                <rect x="360" y={y} width="30" height="24" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(212,165,116,0.05)" />
                <rect x="405" y={y} width="30" height="24" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(212,165,116,0.05)" />
                <rect x="450" y={y} width="30" height="24" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(212,165,116,0.05)" />
                <rect x="495" y={y} width="30" height="24" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(212,165,116,0.05)" />
              </g>
            ))}

            {/* House */}
            <rect x="140" y="220" width="160" height="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
            <polygon points="120,220 220,130 320,220" stroke="#D4A574" strokeWidth="1.5" fill="rgba(212,165,116,0.05)" />
            <rect x="200" y="310" width="40" height="90" stroke="#D4A574" strokeWidth="1.5" />
            <rect x="160" y="250" width="30" height="35" stroke="rgba(255,255,255,0.18)" />
            <rect x="250" y="250" width="30" height="35" stroke="rgba(255,255,255,0.18)" />
          </svg>
        </div>

        <div className="wrap relative z-10 py-20 px-6">
          <div className="max-w-xl">
            <div className="eyebrow !text-[#D4A574] before:hidden after:!bg-[#D4A574]">
              Services
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-white my-4 leading-tight">
              Everything you get, <span className="text-[#D4A574]">model by model.</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              A quick breakdown of what comes standard with each way of working with us.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE GROUP 1: PAY PER LEAD */}
      <section className="bg-[#0D1B3D] text-white py-16">
        <div className="wrap">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Pay Per Lead</h2>
            <p className="text-white/70 text-[15px]">The essentials of working with us lead by lead.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#14285A] border border-white/15 rounded-2xl p-7 hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 text-[#D4A574] flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C10.8 18.6 5.4 13.2 4.5 5.2A2 2 0 0 1 6.5 3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Three-way live calls</h4>
              <p className="text-white/70 text-[14px] leading-relaxed">
                We loop you in directly, connecting you with the prospect on a live conference call.
              </p>
            </div>

            <div className="bg-[#14285A] border border-white/15 rounded-2xl p-7 hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 text-[#D4A574] flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6 3h9l3 3v15H6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Listen before you commit</h4>
              <p className="text-white/70 text-[14px] leading-relaxed">
                Can't make the call? We send the recording so you can hear it before deciding.
              </p>
            </div>

            <div className="bg-[#14285A] border border-white/15 rounded-2xl p-7 hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 text-[#D4A574] flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Priced by zip code</h4>
              <p className="text-white/70 text-[14px] leading-relaxed">
                Lead pricing runs $100–$200, set by location, property type, and market demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GROUP 2: PAY AT CLOSING */}
      <section className="bg-[#FAF6EF] py-16">
        <div className="wrap">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B3D] mb-2">Pay At Closing</h2>
            <p className="text-[#5B5A54] text-[15px]">For agents who'd rather pay once a deal actually closes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF6EF] border border-[#14285A]/15 rounded-2xl p-7 hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 text-[#B8834A] flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l7 3v5.5c0 4.5-3 7.7-7 9.5-4-1.8-7-5-7-9.5V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-[#0D1B3D] mb-2">30-day guarantee</h4>
              <p className="text-[#5B5A54] text-[14px] leading-relaxed">
                Get replacement leads if we come up short, or if you receive unusable prospects.
              </p>
            </div>

            <div className="bg-[#FAF6EF] border border-[#14285A]/15 rounded-2xl p-7 hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 text-[#B8834A] flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6 3h9l3 3v15H6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-[#0D1B3D] mb-2">Everything in writing</h4>
              <p className="text-[#5B5A54] text-[14px] leading-relaxed">
                Every term between you and Mavrix Realty is documented, not just verbally promised.
              </p>
            </div>

            <div className="bg-[#FAF6EF] border border-[#14285A]/15 rounded-2xl p-7 hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 text-[#B8834A] flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-[#0D1B3D] mb-2">15–25% referral fee</h4>
              <p className="text-[#5B5A54] text-[14px] leading-relaxed">
                The fee is only due once a prospect closes — nothing changes hands before then.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GROUP 3: MONTHLY SERVICES ADD-ON */}
      <section className="bg-[#0D1B3D] text-white py-16">
        <div className="wrap">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Monthly Services</h2>
            <p className="text-white/70 text-[15px]">
              A $99/month add-on that runs alongside whichever model you choose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#14285A] border border-white/15 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#D4A574]/20 text-[#D4A574] flex items-center justify-center mb-3.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 5.5c2.5-1 5.5-1 8 0v14c-2.5-1-5.5-1-8 0z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M20 5.5c-2.5-1-5.5-1-8 0v14c2.5-1-5.5-1-8 0z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-bold text-base text-white mb-1.5">Bookkeeping</h4>
              <p className="text-xs sm:text-[13px] text-white/70">We keep your books tidy and up to date.</p>
            </div>

            <div className="bg-[#14285A] border border-white/15 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#D4A574]/20 text-[#D4A574] flex items-center justify-center mb-3.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 6h14M5 12h14M5 18h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M5 6l1.5 1.5L9 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-bold text-base text-white mb-1.5">Lead management</h4>
              <p className="text-xs sm:text-[13px] text-white/70">Every lead gets tracked so nothing slips through the cracks.</p>
            </div>

            <div className="bg-[#14285A] border border-white/15 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#D4A574]/20 text-[#D4A574] flex items-center justify-center mb-3.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 9.5h16M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M9 14l1.5 1.5L14 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-bold text-base text-white mb-1.5">Appointment setting</h4>
              <p className="text-xs sm:text-[13px] text-white/70">We fill your calendar by scheduling appointments on your behalf.</p>
            </div>

            <div className="bg-[#14285A] border border-white/15 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#D4A574]/20 text-[#D4A574] flex items-center justify-center mb-3.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 9l5-3M20 6v4h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-bold text-base text-white mb-1.5">Cold calling</h4>
              <p className="text-xs sm:text-[13px] text-white/70">We handle the cold outreach to keep new opportunities coming in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 bg-[#FAF6EF]">
        <div className="wrap">
          <div className="relative overflow-hidden bg-[#0D1B3D] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-xl">
            <svg
              className="absolute -right-3 -bottom-5 w-56 opacity-20 pointer-events-none"
              viewBox="0 0 220 140"
              fill="none"
            >
              <path
                d="M0 130L45 60L75 100L110 40L145 100L180 65L220 130"
                stroke="#D4A574"
                strokeWidth="2.5"
              />
            </svg>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to fill your pipeline?
              </h2>
              <p className="text-white/70 text-[15px]">
                Reach out and pick whichever model fits how you work.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <button
                onClick={() => onOpenModal('Services CTA')}
                className="btn btn-primary"
              >
                Get started →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
