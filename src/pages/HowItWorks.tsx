import React from 'react';

interface HowItWorksProps {
  onOpenModal: (plan?: string) => void;
  navigate: (path: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenModal, navigate }) => {
  return (
    <div className="w-full">
      {/* HERO WITH BACKGROUND PHOTO */}
      <section className="relative overflow-hidden min-h-[440px] flex items-center justify-center text-center bg-[#0D1B3D]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1760473537243-72168ffd273c?auto=format&fit=crop&w=1800&q=75')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#091128]/85 via-[#091128]/75 to-[#091128]/90" />
        <div className="relative z-10 wrap py-20 px-6">
          <div className="eyebrow center !text-[#D4A574] before:!bg-[#D4A574] after:!bg-[#D4A574]">
            How It Works
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-white max-w-3xl mx-auto my-4 leading-tight">
            Two ways to build your pipeline, laid out{' '}
            <span className="text-[#D4A574]">step by step</span>.
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Every engagement — Pay Per Lead or a Monthly Plan — follows the same verified path, so you always know what happens next and when you're expected to pay.
          </p>
        </div>
      </section>

      {/* CONDENSED OVERVIEW STRIP */}
      <section className="py-14 bg-[#FAF6EF]">
        <div className="wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-3">
              <div className="w-12 h-12 rounded-xl bg-[#14285A]/5 border border-[#14285A]/15 flex items-center justify-center mx-auto mb-4 text-[#14285A]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="font-bold text-base text-[#0D1B3D] mb-1">We screen</div>
              <p className="text-xs sm:text-[13px] text-[#5B5A54]">
                Every prospect is qualified before you're ever involved.
              </p>
            </div>

            <div className="text-center p-3">
              <div className="w-12 h-12 rounded-xl bg-[#14285A]/5 border border-[#14285A]/15 flex items-center justify-center mx-auto mb-4 text-[#14285A]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C10.8 18.6 5.4 13.2 4.5 5.2A2 2 0 0 1 6.5 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="font-bold text-base text-[#0D1B3D] mb-1">We call & record</div>
              <p className="text-xs sm:text-[13px] text-[#5B5A54]">
                Our team speaks with the prospect and records the conversation.
              </p>
            </div>

            <div className="text-center p-3">
              <div className="w-12 h-12 rounded-xl bg-[#14285A]/5 border border-[#14285A]/15 flex items-center justify-center mx-auto mb-4 text-[#14285A]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="9.5" y="3" width="5" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M6 11.5a6 6 0 0 0 12 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="font-bold text-base text-[#0D1B3D] mb-1">You review</div>
              <p className="text-xs sm:text-[13px] text-[#5B5A54]">
                The recording and prospect details land in your inbox.
              </p>
            </div>

            <div className="text-center p-3">
              <div className="w-12 h-12 rounded-xl bg-[#14285A]/5 border border-[#14285A]/15 flex items-center justify-center mx-auto mb-4 text-[#14285A]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l7 3v5.5c0 4.5-3 7.7-7 9.5-4-1.8-7-5-7-9.5V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="font-bold text-base text-[#0D1B3D] mb-1">You decide, then pay</div>
              <p className="text-xs sm:text-[13px] text-[#5B5A54]">
                Interested? We send a payment link — never before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED MODEL BLOCKS */}
      <section className="py-16 bg-[#FAF6EF]">
        <div className="wrap space-y-16">
          {/* MODEL 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#E4DCC9]">
            <div className="lg:col-span-5">
              <div className="text-xs font-bold text-[#14285A] tracking-wider uppercase mb-2">
                MODEL 01
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0D1B3D]">
                Pay Per Lead
              </h2>
              <p className="text-[#5B5A54] text-[15px] mb-5 leading-relaxed">
                Get a recorded call and full prospect details. Only pay once you've reviewed and accepted the lead.
              </p>
              <div className="bg-[#14285A]/5 border-l-4 border-[#14285A] border border-[#14285A]/15 rounded-xl p-4 text-[14px] text-[#14285A]">
                <strong className="text-[#0D1B3D]">$100–$200</strong> per accepted lead, depending on zip code and property type.
              </div>
              <button
                onClick={() => onOpenModal('Pay Per Lead')}
                className="btn btn-primary mt-6"
              >
                Start with Pay Per Lead →
              </button>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#E4DCC9]">
              {[
                {
                  step: 1,
                  title: 'We qualify the prospect',
                  desc: 'A prospect is identified and screened before being connected to you.',
                },
                {
                  step: 2,
                  title: 'We call the prospect',
                  desc: 'Our team speaks with them directly and records the full conversation.',
                },
                {
                  step: 3,
                  title: 'You get the recording',
                  desc: 'The full call recording and prospect details are sent for you to review.',
                },
                {
                  step: 4,
                  title: 'You decide, then pay',
                  desc: 'Interested after listening? We send a secure payment link — never before.',
                },
                {
                  step: 5,
                  title: 'Delivered your way',
                  desc: 'Once confirmed, full lead details arrive by text or email — your preference.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="w-10 h-10 rounded-xl bg-[#14285A]/5 border border-[#14285A]/15 flex items-center justify-center shrink-0 relative font-bold text-[#0D1B3D]">
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#0D1B3D] text-white text-[10px] flex items-center justify-center">
                      {item.step}
                    </span>
                    ★
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0D1B3D] mb-1">{item.title}</h3>
                    <p className="text-[13.5px] text-[#5B5A54]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MODEL 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#E4DCC9]">
            <div className="lg:col-span-5">
              <div className="text-xs font-bold text-[#14285A] tracking-wider uppercase mb-2">
                MODEL 02
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0D1B3D]">
                Monthly Plans
              </h2>
              <p className="text-[#5B5A54] text-[15px] mb-5 leading-relaxed">
                Starter, Professional, or Enterprise — a fixed monthly volume of verified leads with predictable, flat-rate pricing.
              </p>
              <div className="bg-[#14285A]/5 border-l-4 border-[#14285A] border border-[#14285A]/15 rounded-xl p-4 text-[14px] text-[#14285A]">
                <strong className="text-[#0D1B3D]">From $99/month</strong> — territory exclusivity and volume scale by tier.
              </div>
              <button
                onClick={() => onOpenModal('Monthly Plans')}
                className="btn btn-primary mt-6"
              >
                Explore Monthly Plans →
              </button>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#E4DCC9]">
              {[
                {
                  step: 1,
                  title: 'Choose your tier',
                  desc: 'Pick Starter, Professional, or Enterprise based on the volume your pipeline needs.',
                },
                {
                  step: 2,
                  title: 'We build your territory',
                  desc: "Your zip codes are set based on your plan's exclusivity level.",
                },
                {
                  step: 3,
                  title: 'Recorded leads arrive monthly',
                  desc: 'Each lead follows the same call-and-record process as Pay Per Lead.',
                },
                {
                  step: 4,
                  title: 'Track performance',
                  desc: 'A monthly summary shows exactly what was delivered against your plan.',
                },
                {
                  step: 5,
                  title: 'Scale or adjust anytime',
                  desc: 'Move up a tier, or add Pay Per Lead top-ups — month to month, no contract.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="w-10 h-10 rounded-xl bg-[#14285A]/5 border border-[#14285A]/15 flex items-center justify-center shrink-0 relative font-bold text-[#0D1B3D]">
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#0D1B3D] text-white text-[10px] flex items-center justify-center">
                      {item.step}
                    </span>
                    ✦
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0D1B3D] mb-1">{item.title}</h3>
                    <p className="text-[13.5px] text-[#5B5A54]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MODEL 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-xs font-bold text-[#14285A] tracking-wider uppercase mb-2">
                MODEL 03
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0D1B3D]">
                Combine Both
              </h2>
              <p className="text-[#5B5A54] text-[15px] mb-5 leading-relaxed">
                Run a monthly plan for volume, and top up with Pay Per Lead in your busiest zip codes when demand spikes.
              </p>
              <div className="bg-[#14285A]/5 border-l-4 border-[#14285A] border border-[#14285A]/15 rounded-xl p-4 text-[14px] text-[#14285A]">
                <strong className="text-[#0D1B3D]">Custom mix</strong> — one invoice, backed by the same guarantee.
              </div>
              <button
                onClick={() => onOpenModal('Custom Combination')}
                className="btn btn-primary mt-6"
              >
                Inquire on Custom Mix →
              </button>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#E4DCC9]">
              {[
                {
                  step: 1,
                  title: 'Start with a monthly plan',
                  desc: 'Lock in your base volume of verified leads at a flat monthly rate.',
                },
                {
                  step: 2,
                  title: 'Add Pay Per Lead when needed',
                  desc: 'Top up in high-demand zips or slower months, without changing your plan.',
                },
                {
                  step: 3,
                  title: 'One invoice',
                  desc: 'Plan and top-up leads are billed together — simple, single monthly total.',
                },
                {
                  step: 4,
                  title: 'Flex with your pipeline',
                  desc: 'Scale spend up in busy quarters, back down when your book is full.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="w-10 h-10 rounded-xl bg-[#14285A]/5 border border-[#14285A]/15 flex items-center justify-center shrink-0 relative font-bold text-[#0D1B3D]">
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#0D1B3D] text-white text-[10px] flex items-center justify-center">
                      {item.step}
                    </span>
                    ❖
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0D1B3D] mb-1">{item.title}</h3>
                    <p className="text-[13.5px] text-[#5B5A54]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO + FLOATING BADGE & TICKER */}
      <section className="py-14 bg-[#FAF6EF]">
        <div className="wrap">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?auto=format&fit=crop&w=1400&q=75"
              alt="Keys handed over on closing day"
              className="w-full h-[380px] object-cover"
            />
            <div className="absolute top-6 left-6 bg-[#0D1B3D]/85 backdrop-blur-md rounded-xl p-4 text-white max-w-xs">
              <b className="block text-xl text-[#EED3B0]">Lead Guarantee</b>
              <span className="text-xs text-white/70">Verified prospects or credit/extension</span>
            </div>
          </div>

          <div className="overflow-hidden mt-6 border-y border-[#E4DCC9] py-3.5">
            <div className="animate-ticker text-xs sm:text-[13px] font-bold text-[#14285A] uppercase tracking-wider">
              <span>Recorded, not live</span>
              <span>•</span>
              <span>No lock-in contracts</span>
              <span>•</span>
              <span>Written agreements</span>
              <span>•</span>
              <span>Quality Guarantee</span>
              <span>•</span>
              <span>Buyer & seller leads</span>
              <span>•</span>
              <span>Recorded, not live</span>
              <span>•</span>
              <span>No lock-in contracts</span>
              <span>•</span>
              <span>Written agreements</span>
              <span>•</span>
              <span>Quality Guarantee</span>
              <span>•</span>
              <span>Buyer & seller leads</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-[#FAF6EF]">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-6 bg-white border border-[#E4DCC9] rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-[#14285A]/5 border border-[#14285A]/15 flex items-center justify-center mx-auto mb-3 text-[#14285A] font-bold text-sm">
                $
              </div>
              <b className="block text-xl md:text-2xl font-bold text-[#0D1B3D] mb-1">$100–$200</b>
              <span className="text-xs text-[#5B5A54]">Per accepted lead</span>
            </div>

            <div className="text-center p-6 bg-white border border-[#E4DCC9] rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-[#14285A]/5 border border-[#14285A]/15 flex items-center justify-center mx-auto mb-3 text-[#14285A] font-bold text-sm">
                🛡
              </div>
              <b className="block text-xl md:text-2xl font-bold text-[#0D1B3D] mb-1">Guaranteed</b>
              <span className="text-xs text-[#5B5A54]">Verified intent on tape</span>
            </div>

            <div className="text-center p-6 bg-white border border-[#E4DCC9] rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-[#14285A]/5 border border-[#14285A]/15 flex items-center justify-center mx-auto mb-3 text-[#14285A] font-bold text-sm">
                ✍
              </div>
              <b className="block text-xl md:text-2xl font-bold text-[#0D1B3D] mb-1">Written</b>
              <span className="text-xs text-[#5B5A54]">Signed agreements, not promises</span>
            </div>

            <div className="text-center p-6 bg-white border border-[#E4DCC9] rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-[#14285A]/5 border border-[#14285A]/15 flex items-center justify-center mx-auto mb-3 text-[#14285A] font-bold text-sm">
                ✓
              </div>
              <b className="block text-xl md:text-2xl font-bold text-[#0D1B3D] mb-1">No contracts</b>
              <span className="text-xs text-[#5B5A54]">Cancel or switch, month to month</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA CARD */}
      <section className="py-12 bg-[#FAF6EF]">
        <div className="wrap">
          <div className="relative overflow-hidden bg-white border border-[#E4DCC9] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <svg
              className="absolute -right-3 -bottom-5 w-56 opacity-10 pointer-events-none"
              viewBox="0 0 220 140"
              fill="none"
            >
              <path
                d="M0 130L45 60L75 100L110 40L145 100L180 65L220 130"
                stroke="#14285A"
                strokeWidth="2.5"
              />
            </svg>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B3D] mb-2">
                Ready to fill your pipeline?
              </h2>
              <p className="text-[#5B5A54] text-[15px]">
                Pick Pay Per Lead to test the water, or start a monthly plan and know your volume in advance.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-3 shrink-0">
              <button
                onClick={() => onOpenModal('How It Works CTA')}
                className="btn btn-primary"
              >
                Get started →
              </button>
              <a
                href="/pricing"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/pricing');
                }}
                className="btn btn-ghost"
              >
                See pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
