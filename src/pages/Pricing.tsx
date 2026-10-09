import React, { useState } from 'react';

interface PricingProps {
  onOpenModal: (plan?: string) => void;
  navigate: (path: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenModal, navigate }) => {
  const [tab, setTab] = useState<'monthly' | 'perlead'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const FAQ_PRICING = [
    {
      q: 'What services does Mavrix Realty offer?',
      a: 'We offer two ways to grow your pipeline: Pay Per Lead ($100–$200 per accepted lead) and Monthly Plans (Starter, Professional, and Enterprise), each delivering a fixed volume of verified leads every month.',
    },
    {
      q: 'What markets do you cover?',
      a: 'Buyer and seller leads are available in most U.S. markets. Availability and territory exclusivity for Monthly Plans depend on demand in your specific zip codes.',
    },
    {
      q: 'Do you provide exclusive or shared leads?',
      a: 'It depends on your plan tier — territory exclusivity scales with your plan, from shared territories on entry-level tiers to one agent per zip code on our top tier.',
    },
    {
      q: 'Is the lead guarantee a written agreement?',
      a: "Yes. It's a written agreement between you and Mavrix Realty describing our responsibility to deliver verified prospects, and your eligibility for a refund or extension if we don't, within the guarantee window.",
    },
    {
      q: 'Can I switch plans or cancel anytime?',
      a: 'Yes — Monthly Plans run month to month with no lock-in contract. Switch tiers, pause, or cancel whenever you need to.',
    },
  ];

  return (
    <div className="w-full">
      {/* PRICING HERO */}
      <section className="py-16 md:py-20 bg-[#FAF6EF]">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="eyebrow">Pricing</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-3 text-[#0D1B3D]">
                Simple, <span className="underline-accent">transparent</span> pricing
              </h1>
              <p className="text-[#5B5A54] text-base md:text-lg max-w-lg leading-relaxed">
                No hidden fees. No long-term contracts. No surprises. Pick the plan that fits your business. Pay only for leads you accept. Cancel anytime — start small, scale when you’re ready.
              </p>
            </div>
            <div className="md:col-span-5 flex justify-center">
              <div className="bg-[#F2E9D8] border border-[#E4DCC9] rounded-3xl p-8 text-center max-w-sm w-full">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4 text-[#B8834A] text-2xl font-bold">
                  $
                </div>
                <h4 className="text-lg font-bold text-[#0D1B3D] mb-1">
                  Predictable ROI
                </h4>
                <p className="text-xs text-[#5B5A54] leading-relaxed">
                  Hear every lead before committing capital. Built by real estate professionals for real pipeline growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TIERS SECTION */}
      <section className="bg-[#0D1B3D] text-white py-20" id="pricing-tables">
        <div className="wrap">
          <div className="max-w-xl mb-10">
            <div className="eyebrow !text-[#EED3B0] before:!bg-[#EED3B0]">Choose Your Path</div>
            <h2 className="text-3xl font-bold text-white mt-2">Transparent Plans</h2>
            <p className="text-white/70 text-[15px] mt-2">
              Select per-lead pricing or a predictable monthly subscription.
            </p>
          </div>

          {/* Toggle */}
          <div className="inline-flex p-1 bg-white/[0.08] border border-white/20 rounded-full mb-10">
            <button
              onClick={() => setTab('monthly')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border-0 cursor-pointer ${
                tab === 'monthly'
                  ? 'bg-gradient-to-r from-[#EED3B0] to-[#B8834A] text-[#0D1B3D]'
                  : 'bg-transparent text-white/70 hover:text-white'
              }`}
            >
              Monthly Plans
            </button>
            <button
              onClick={() => setTab('perlead')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border-0 cursor-pointer ${
                tab === 'perlead'
                  ? 'bg-gradient-to-r from-[#EED3B0] to-[#B8834A] text-[#0D1B3D]'
                  : 'bg-transparent text-white/70 hover:text-white'
              }`}
            >
              Pay Per Lead
            </button>
          </div>

          {/* Monthly Tab */}
          {tab === 'monthly' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="bg-[#14285A] border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Starter</h3>
                  <div className="text-4xl font-bold text-white mb-0.5">
                    $99 <span className="text-sm font-normal text-white/60">/ month</span>
                  </div>
                  <div className="text-[12px] text-white/50 mb-3">billed monthly</div>
                  <div className="text-[13px] text-white/70 mb-4">Perfect for agents getting started</div>
                  <div className="inline-block bg-[#EED3B0]/15 border border-[#EED3B0]/30 rounded-full px-3 py-1 text-xs text-[#EED3B0] mb-5">
                    20% Referral Fee
                  </div>

                  <ul className="space-y-2.5 text-[13.5px] text-white/80 mb-6">
                    <li className="flex gap-2">✓ <b>12 Guaranteed Leads/Year</b></li>
                    <li className="flex gap-2">✓ 1-2 Leads Per Month</li>
                    <li className="flex gap-2">✓ Live Transfers</li>
                    <li className="flex gap-2">✓ Appointment Setting</li>
                    <li className="flex gap-2">✓ Call Recording</li>
                    <li className="flex gap-2">✓ Buyers + Sellers</li>
                    <li className="flex gap-2">✓ AI + Human Verified</li>
                    <li className="flex gap-2">✓ Dedicated Account Manager</li>
                  </ul>
                </div>

                <div>
                  <div className="bg-white/[0.06] border border-white/15 rounded-xl p-3 text-[12px] text-white/70 mb-4">
                    <b className="text-[#EED3B0]">🛡 Lead Guarantee:</b> If we don't deliver, we refund or extend.
                  </div>
                  <button
                    onClick={() => onOpenModal('Starter — $99/mo')}
                    className="btn btn-on-navy w-full text-center"
                  >
                    Get Started
                  </button>
                </div>
              </div>

              {/* Professional */}
              <div className="bg-gradient-to-b from-[#25407F] to-[#14285A] border-2 border-[#D4A574] rounded-2xl p-7 flex flex-col justify-between relative shadow-2xl">
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#EED3B0] to-[#B8834A] text-[#0D1B3D] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Professional</h3>
                  <div className="text-4xl font-bold text-white mb-0.5">
                    $269 <span className="text-sm font-normal text-white/60">/ month</span>
                  </div>
                  <div className="text-[12px] text-white/50 mb-3">billed monthly</div>
                  <div className="text-[13px] text-white/70 mb-4">Ideal for busy agents & small teams</div>
                  <div className="inline-block bg-[#EED3B0]/15 border border-[#EED3B0]/30 rounded-full px-3 py-1 text-xs text-[#EED3B0] mb-5">
                    10% Referral Fee
                  </div>

                  <ul className="space-y-2.5 text-[13.5px] text-white/80 mb-6">
                    <li className="flex gap-2">✓ <b>36 Guaranteed Leads/Year</b></li>
                    <li className="flex gap-2">✓ 3-4 Leads Per Month</li>
                    <li className="flex gap-2">✓ Live Transfers</li>
                    <li className="flex gap-2">✓ Appointment Setting</li>
                    <li className="flex gap-2">✓ Call Recording</li>
                    <li className="flex gap-2">✓ Buyers + Sellers</li>
                    <li className="flex gap-2">✓ AI + Human Verified</li>
                    <li className="flex gap-2">✓ Dedicated Account Manager</li>
                  </ul>
                </div>

                <div>
                  <div className="bg-white/[0.06] border border-white/15 rounded-xl p-3 text-[12px] text-white/70 mb-4">
                    <b className="text-[#EED3B0]">🛡 Lead Guarantee:</b> If we don't deliver, we refund or extend.
                  </div>
                  <button
                    onClick={() => onOpenModal('Professional — $269/mo')}
                    className="btn btn-primary w-full text-center"
                  >
                    Get Started
                  </button>
                </div>
              </div>

              {/* Enterprise */}
              <div className="bg-[#14285A] border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Enterprise</h3>
                  <div className="text-4xl font-bold text-white mb-0.5">
                    $399 <span className="text-sm font-normal text-white/60">/ month</span>
                  </div>
                  <div className="text-[12px] text-white/50 mb-3">billed monthly</div>
                  <div className="text-[13px] text-white/70 mb-4">Designed for brokerages & teams 5+</div>
                  <div className="inline-block bg-[#EED3B0]/15 border border-[#EED3B0]/30 rounded-full px-3 py-1 text-xs text-[#EED3B0] mb-5">
                    5% Referral Fee
                  </div>

                  <ul className="space-y-2.5 text-[13.5px] text-white/80 mb-6">
                    <li className="flex gap-2">✓ <b>72 Guaranteed Leads/Year</b></li>
                    <li className="flex gap-2">✓ 5-6 Leads Per Month</li>
                    <li className="flex gap-2">✓ Live Transfers</li>
                    <li className="flex gap-2">✓ Appointment Setting</li>
                    <li className="flex gap-2">✓ Call Recording</li>
                    <li className="flex gap-2">✓ Buyers + Sellers</li>
                    <li className="flex gap-2">✓ AI + Human Verified</li>
                    <li className="flex gap-2">✓ Dedicated Account Manager</li>
                  </ul>
                </div>

                <div>
                  <div className="bg-white/[0.06] border border-white/15 rounded-xl p-3 text-[12px] text-white/70 mb-4">
                    <b className="text-[#EED3B0]">🛡 Lead Guarantee:</b> If we don't deliver, we refund or extend.
                  </div>
                  <button
                    onClick={() => onOpenModal('Enterprise — $399/mo')}
                    className="btn btn-on-navy w-full text-center"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Pay Per Lead Tab */}
          {tab === 'perlead' && (
            <div className="bg-[#14285A] border border-white/15 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-xs font-semibold text-[#EED3B0] tracking-wider mb-2 uppercase">
                  Per Accepted Lead
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  $100–$200
                </div>
                <div className="text-xs text-white/50 mb-4">
                  depending on zip code & property type
                </div>
                <p className="text-[14px] text-white/70 max-w-sm mb-6 leading-relaxed">
                  Only pay once you've reviewed the call or recording and confirmed you want the lead. No subscription required to start.
                </p>
                <button
                  onClick={() => onOpenModal('Pay Per Lead')}
                  className="btn btn-primary"
                >
                  Get started with Pay Per Lead →
                </button>
              </div>

              <ul className="space-y-3.5 text-[14.5px] text-white/85">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#EED3B0]">✓</span> Prospect is screened and called by our team
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#EED3B0]">✓</span> Full call recording provided with every lead
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#EED3B0]">✓</span> You review the recording before any payment is required
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#EED3B0]">✓</span> Payment link sent only after you confirm interest
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#EED3B0]">✓</span> Lead details delivered by text or email, your preference
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#EED3B0]">✓</span> Buyer and seller leads available in most U.S. markets
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* THREE-CARD FLEXIBLE PRICING FEATURES */}
      <section className="py-20 bg-[#FAF6EF]">
        <div className="wrap">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="eyebrow center">Your Markets, Your Price, Your Terms</div>
            <h2 className="text-3xl font-bold mt-2">Flexible pricing tailored to your needs</h2>
            <p className="text-[#5B5A54] text-[15px] mt-2">
              At Mavrix Realty, you’re in control. Choose where you want leads, how much you want to pay, and when you want to receive them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#EFE8D8] to-[#E4D6B8] border border-[#E4DCC9] min-h-[220px] flex flex-col justify-end">
              <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center mb-6 text-[#0D1B3D]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1B3D]">
                Select Your Territory, Set Your Budget.
              </h3>
            </div>

            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#EFE2D2] to-[#E6C9A8] border border-[#E4DCC9] min-h-[220px] flex flex-col justify-end">
              <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center mb-6 text-[#0D1B3D]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1B3D]">
                Pay As You Go, No Long-Term Commitment.
              </h3>
            </div>

            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#F2E9D8] to-[#DCE4EF] border border-[#E4DCC9] min-h-[220px] flex flex-col justify-end">
              <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center mb-6 text-[#0D1B3D]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l7 3v5.5c0 4.5-3 7.7-7 9.5-4-1.8-7-5-7-9.5V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1B3D]">
                Dispute Bad Leads, Covered by Guarantee.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ALTERNATING FEATURE ROWS */}
      <section className="py-14 bg-[#FAF6EF]">
        <div className="wrap space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#F2E9D8] border border-[#E4DCC9] rounded-2xl p-8 flex items-center justify-center min-h-[240px]">
              <div className="text-center">
                <span className="text-4xl font-bold text-[#0D1B3D]">Flat Rates</span>
                <span className="block text-sm text-[#5B5A54] mt-1">Predictable pipeline expense</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0D1B3D]">
                Know your spend, every month.
              </h2>
              <p className="text-[#5B5A54] text-[15px] leading-relaxed">
                Pick the tier that fits your pipeline — Starter, Professional, or Enterprise — and pay one flat, predictable amount each month. No surprise invoices, no usage overages. Upgrade or downgrade whenever your needs change.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 bg-[#F2E9D8] border border-[#E4DCC9] rounded-2xl p-8 flex items-center justify-center min-h-[240px]">
              <div className="text-center">
                <span className="text-4xl font-bold text-[#0D1B3D]">Month to Month</span>
                <span className="block text-sm text-[#5B5A54] mt-1">Zero lock-in contracts</span>
              </div>
            </div>
            <div className="md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0D1B3D]">
                No contracts. Cancel anytime.
              </h2>
              <p className="text-[#5B5A54] text-[15px] leading-relaxed">
                Every monthly plan runs month to month — no lock-in period. Switch tiers, pause your subscription, or cancel entirely with a click, then come back whenever your pipeline needs picking back up.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#F2E9D8] border border-[#E4DCC9] rounded-2xl p-8 flex items-center justify-center min-h-[240px]">
              <div className="text-center">
                <span className="text-4xl font-bold text-[#0D1B3D]">Written Agreement</span>
                <span className="block text-sm text-[#5B5A54] mt-1">Legally binding terms</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0D1B3D]">
                Backed by a real guarantee.
              </h2>
              <p className="text-[#5B5A54] text-[15px] leading-relaxed">
                If we can't deliver, or you receive unusable prospects, you're eligible for replacement or refund — in writing, as a signed agreement between you and Mavrix Realty, never just a verbal promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING FAQ */}
      <section className="bg-[#F2E9D8] py-20">
        <div className="wrap max-w-3xl">
          <div className="text-center mb-12">
            <div className="eyebrow center">FAQ</div>
            <h2 className="text-3xl font-bold mt-2">Frequently Asked Questions</h2>
            <p className="text-[#5B5A54] text-[15px] mt-2">Can't find what you're looking for? We'd be happy to talk it through.</p>
          </div>

          <div className="space-y-3">
            {FAQ_PRICING.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl border transition-colors ${
                    isOpen ? 'border-[#B8834A]' : 'border-[#E4DCC9]'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-[15px] text-[#0D1B3D] bg-transparent border-0 cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <span className={`text-[#B8834A] text-xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-[14px] text-[#5B5A54] leading-relaxed border-t border-[#FAF6EF] pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 bg-[#FAF6EF]">
        <div className="wrap">
          <div className="bg-gradient-to-r from-[#0D1B3D] to-[#14285A] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-xl">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to close more deals?
              </h2>
              <p className="text-white/70 text-[15px]">
                Turn verified buyer and seller leads into real opportunities — pick a plan and start today.
              </p>
            </div>
            <div className="shrink-0">
              <button
                onClick={() => onOpenModal('Send Me Leads')}
                className="btn btn-primary"
              >
                Send me leads →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
