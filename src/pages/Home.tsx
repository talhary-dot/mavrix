import React, { useState, useEffect, useRef } from 'react';

interface HomeProps {
  onOpenModal: (plan?: string) => void;
  navigate: (path: string) => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1760473537243-72168ffd273c?auto=format&fit=crop&w=1800&q=75',
    caption: 'Waterfront suburban — sample market',
  },
  {
    image: 'https://images.unsplash.com/photo-1774836435838-2a6e7ef30206?auto=format&fit=crop&w=1800&q=75',
    caption: 'Established neighborhood — sample market',
  },
  {
    image: 'https://images.unsplash.com/photo-1758448755856-01d3add0177b?auto=format&fit=crop&w=1800&q=75',
    caption: 'Downtown luxury interior — sample market',
  },
  {
    image: 'https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?auto=format&fit=crop&w=1800&q=75',
    caption: 'Keys handed over — closing day',
  },
];

const PROPERTY_CARDS = [
  {
    chip: 'Single-Family',
    image: 'https://images.unsplash.com/photo-1760473537243-72168ffd273c?auto=format&fit=crop&w=700&q=70',
    title: 'Waterfront Suburban',
    desc: 'Buyer-lead territory — move-up families, 3–4 bed range.',
    type: 'Lead type: Buyer',
    price: '$150–$200',
  },
  {
    chip: 'Residential',
    image: 'https://images.unsplash.com/photo-1774836435838-2a6e7ef30206?auto=format&fit=crop&w=700&q=70',
    title: 'Established Neighborhood',
    desc: 'Seller-lead territory — long-tenure homeowners exploring a sale.',
    type: 'Lead type: Seller',
    price: '$120–$180',
  },
  {
    chip: 'Luxury Condo',
    image: 'https://images.unsplash.com/photo-1758448755856-01d3add0177b?auto=format&fit=crop&w=700&q=70',
    title: 'Downtown Luxury',
    desc: 'Higher price-point buyers — best matched to Standard or Premium plans.',
    type: 'Lead type: Buyer',
    price: '$180–$200',
  },
  {
    chip: 'Modern Farmhouse',
    image: 'https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?auto=format&fit=crop&w=700&q=70',
    title: 'Historic Country Estate',
    desc: 'Acreage and suburban fringe — active move-in ready buyers.',
    type: 'Lead type: Buyer',
    price: '$160–$210',
  },
  {
    chip: 'Single-Family',
    image: 'https://images.unsplash.com/photo-1760473537243-72168ffd273c?auto=format&fit=crop&w=700&q=70',
    title: 'High-Growth Suburban',
    desc: 'Relocation buyers — pre-approved with quick closing readiness.',
    type: 'Lead type: Buyer',
    price: '$140–$190',
  },
];

const FAQ_ITEMS = [
  {
    q: 'What services does Mavrix Realty offer?',
    a: 'We offer two ways to grow your pipeline: Pay Per Lead ($100–$200 per accepted lead) and Monthly Plans (Starter, Professional, and Enterprise), each delivering a fixed volume of verified leads every month.',
  },
  {
    q: 'How does Pay Per Lead work?',
    a: "We connect you to prospects through a live call. If you're unavailable, we provide a recording. After reviewing it, if you're interested, we send a payment link — once confirmed, the lead's details are delivered by text or email.",
  },
  {
    q: "What's the difference between the monthly plans?",
    a: 'Starter, Professional, and Enterprise differ by monthly lead volume, referral fee %, territory exclusivity, and support level. Professional is our most popular tier for active producing agents. Enterprise includes a dedicated account manager and team scalability.',
  },
  {
    q: 'Is the money-back guarantee a written agreement?',
    a: "Yes. It's a written agreement between you and Mavrix Realty describing our responsibility to deliver verified prospects, and your eligibility for a refund or extension if we don't, within the guarantee window.",
  },
  {
    q: 'Can I switch between Pay Per Lead and a monthly plan?',
    a: 'Yes — many agents start on Pay Per Lead to test lead quality, then move to a monthly plan once they know their numbers. You can also run both at once.',
  },
  {
    q: 'How are Pay Per Lead prices determined?',
    a: 'Pricing within the $100–$200 range depends on zip code, property type, and local demand from other agents in the area.',
  },
];

export const Home: React.FC<HomeProps> = ({ onOpenModal, navigate }) => {
  // Hero slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Property slider ref & state
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Pointer drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const el = sliderRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScrollButtons, { passive: true });
    window.addEventListener('resize', checkScrollButtons);

    // Convert mouse wheel vertical scroll to horizontal scroll when hovering over the slider
    const handleWheel = (e: WheelEvent) => {
      // If horizontal trackpad/wheel, let browser handle natively
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }

      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScroll = scrollWidth - clientWidth;

      // If slider does not overflow horizontally, allow normal page scroll
      if (maxScroll <= 5) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // If reached start and scrolling up, pass through to page vertical scroll
      if (scrollingUp && scrollLeft <= 2) return;

      // If reached end and scrolling down, pass through to page vertical scroll
      if (scrollingDown && scrollLeft >= maxScroll - 4) return;

      // Convert vertical wheel to horizontal slider scrolling
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      el.removeEventListener('scroll', checkScrollButtons);
      el.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, []);

  const slideProps = (direction: number) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.prop-card-item') as HTMLElement;
      const scrollDistance = card ? card.offsetWidth + 20 : 340;
      sliderRef.current.scrollBy({
        left: direction * scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const el = sliderRef.current;
    if (!el) return;

    setIsDragging(true);
    hasDragged.current = false;
    dragStartX.current = e.clientX;
    dragScrollLeft.current = el.scrollLeft;
    try {
      el.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 6) {
      hasDragged.current = true;
    }
    sliderRef.current.scrollLeft = dragScrollLeft.current - dx;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging && sliderRef.current) {
      setIsDragging(false);
      try {
        sliderRef.current.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging && sliderRef.current) {
      setIsDragging(false);
      try {
        sliderRef.current.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  // Pricing pane toggle
  const [pricingTab, setPricingTab] = useState<'monthly' | 'perlead'>('monthly');

  // FAQ open/close accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full">
      {/* ============ HERO (IMAGE SLIDER) ============ */}
      <section className="relative overflow-hidden min-h-[660px] flex items-center bg-[#0D1B3D]">
        {/* Slides */}
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(100deg, rgba(9,17,40,0.88) 0%, rgba(9,17,40,0.72) 38%, rgba(9,17,40,0.45) 65%, rgba(9,17,40,0.62) 100%)',
          }}
        />

        {/* Hero Grid */}
        <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-[1180px] mx-auto px-6 md:px-8 py-24 md:py-28 w-full">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-[52px] font-bold text-white mb-5 leading-[1.12]">
              Leads you can <em className="italic text-[#EED3B0] font-medium">hear</em> before you ever pay a cent.
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-lg mb-8 leading-relaxed">
              Mavrix Realty connects agents to real buyers and sellers through live, verified three-way calls — sold per lead or through a monthly plan, whichever matches how you build your pipeline.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => {
                  const el = document.getElementById('pricing');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary"
              >
                See pricing →
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('how');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-on-navy"
              >
                See how it works
              </button>
            </div>
          </div>

          {/* Hero Verified Call Card Mockup */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)] border border-[#14285A]/10 max-w-md mx-auto">
              <div className="text-[11px] font-bold tracking-widest uppercase text-[#B8834A] flex items-center gap-2 mb-4">
                <span className="pulse"></span> Verified Lead Incoming
              </div>
              <div className="divide-y divide-[#F0ECE1]">
                <div className="flex items-center gap-3.5 py-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#25407F] to-[#14285A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    MR
                  </div>
                  <div>
                    <h4 className="font-bold text-[14.5px] text-[#0D1B3D]">Michael & Rebecca Roberts</h4>
                    <p className="text-[12.5px] text-[#5B5A54]">Pre-approved buyer • 4 bed, 3 bath target</p>
                  </div>
                </div>
                <div className="flex items-center gap-3.5 py-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EED3B0] to-[#B8834A] text-[#0D1B3D] flex items-center justify-center font-bold text-sm shrink-0">
                    TC
                  </div>
                  <div>
                    <h4 className="font-bold text-[14.5px] text-[#0D1B3D]">Three-Way Call Verified</h4>
                    <p className="text-[12.5px] text-[#5B5A54]">Mavrix lead coordinator screened intent</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-[#F2E9D8] rounded-xl p-3.5">
                <div className="text-[12px] font-bold text-[#0D1B3D] mb-1">Prospect Tape Summary</div>
                <p className="text-[12px] text-[#5B5A54] leading-relaxed">
                  "We have our loan pre-approval ready and need to find a home in Northside before next month's school enrollment deadline."
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[#5B5A54] pt-2 border-t border-[#F0ECE1]">
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Recording Ready
                </span>
                <button
                  onClick={() => onOpenModal('Verified Sample')}
                  className="text-[#B8834A] font-semibold hover:underline"
                >
                  Listen Demo →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Caption & Dots */}
        <div className="hidden sm:block absolute z-[3] left-8 bottom-6 text-[12px] text-white/60 tracking-wider">
          {HERO_SLIDES[currentSlide].caption}
        </div>
        <div className="absolute z-[3] left-0 right-0 bottom-6 flex items-center justify-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1 rounded-sm border-0 cursor-pointer transition-all ${i === currentSlide ? 'w-8 bg-[#EED3B0]' : 'w-5 bg-white/30'
                }`}
            />
          ))}
        </div>
      </section>

      {/* ============ SEGMENTS ============ */}
      <section className="bg-[#0D1B3D] py-14" id="find-agent">
        <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#14285A] border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#EED3B0] to-[#B8834A] flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#14285A" strokeWidth="1.8" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#14285A" strokeWidth="1.8" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold">I'm a real estate agent</h3>
            <p className="text-white/70 text-[14.5px]">
              Compare Pay Per Lead and monthly plans, see exactly what's included, and start receiving verified prospects this week.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById('pricing');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-invert self-start mt-2"
            >
              View pricing for agents →
            </button>
          </div>

          <div className="bg-[#14285A] border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#EED3B0] to-[#B8834A] flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 11L12 4L20 11" stroke="#14285A" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M6 10V20H18V10" stroke="#14285A" strokeWidth="1.8" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold">I'm buying or selling a home</h3>
            <p className="text-white/70 text-[14.5px]">
              Tell us what you're looking for, and we'll connect you with a licensed, vetted agent in your area — no cost to you.
            </p>
            <button
              onClick={() => onOpenModal('Homebuyer / Seller Matching')}
              className="btn btn-invert self-start mt-2"
            >
              Find an agent →
            </button>
          </div>
        </div>
      </section>

      {/* ============ PROPERTY SLIDER ============ */}
      <section className="bg-[#F2E9D8] py-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-9">
            <div>
              <div className="eyebrow">Markets in motion</div>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                The kind of homes moving through our network
              </h2>
              <p className="text-[#5B5A54] text-[15px] mt-2 max-w-xl">
                A sample of the property types and neighborhoods our prospects are actively searching right now — illustrative of the markets we cover, not live listings.
              </p>
            </div>
            <div className="flex gap-2.5">
              <button
                onClick={() => slideProps(-1)}
                disabled={!canScrollLeft}
                className={`w-11 h-11 rounded-full bg-white border border-[#14285A]/20 flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? 'cursor-pointer hover:bg-[#0D1B3D] hover:text-white text-[#0D1B3D] shadow-sm active:scale-95'
                    : 'opacity-40 cursor-not-allowed text-[#0D1B3D]/50'
                }`}
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => slideProps(1)}
                disabled={!canScrollRight}
                className={`w-11 h-11 rounded-full bg-white border border-[#14285A]/20 flex items-center justify-center transition-all ${
                  canScrollRight
                    ? 'cursor-pointer hover:bg-[#0D1B3D] hover:text-white text-[#0D1B3D] shadow-sm active:scale-95'
                    : 'opacity-40 cursor-not-allowed text-[#0D1B3D]/50'
                }`}
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            className={`flex gap-5 overflow-x-auto no-scrollbar py-3 px-1 select-none touch-pan-y cursor-grab active:cursor-grabbing ${
              isDragging ? 'cursor-grabbing select-none' : ''
            }`}
          >
            {PROPERTY_CARDS.map((card, i) => (
              <div
                key={i}
                className="prop-card-item w-[280px] sm:w-[320px] shrink-0 bg-white rounded-2xl overflow-hidden border border-[#E4DCC9] shadow-[0_14px_30px_-18px_rgba(13,27,61,0.25)] group select-none pointer-events-auto"
              >
                <div className="relative h-52 overflow-hidden">
                  <span className="absolute top-3.5 left-3.5 z-10 bg-[#0D1B3D]/80 text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {card.chip}
                  </span>
                  <img
                    src={card.image}
                    alt={card.title}
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-base font-bold text-[#0D1B3D] mb-1">{card.title}</h4>
                  <p className="text-[13px] text-[#5B5A54] mb-3.5">{card.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#E4DCC9] text-[12.5px] text-[#5B5A54]">
                    <span>{card.type}</span>
                    <b className="text-[#B8834A] font-semibold">{card.price}</b>
                  </div>
                </div>
              </div>
            ))}

            <div className="prop-card-item w-[280px] sm:w-[320px] shrink-0 bg-gradient-to-br from-[#0D1B3D] to-[#14285A] rounded-2xl p-7 flex flex-col justify-center text-white select-none">
              <h4 className="text-xl font-bold mb-2">Don't see your market?</h4>
              <p className="text-white/70 text-[13.5px] mb-6">
                We're onboarding new zip codes every week — tell us where you work and we'll check territory availability.
              </p>
              <button
                onClick={() => {
                  if (hasDragged.current) return;
                  onOpenModal('Check Zip Code');
                }}
                className="btn btn-primary self-start"
              >
                Check my zip code →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THREE MODELS ============ */}
      <section className="py-20" id="models">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <div className="eyebrow">Ways to work with us</div>
            <h2 className="text-3xl font-bold mt-2">Choose how leads reach your pipeline</h2>
            <p className="text-[#5B5A54] text-[15.5px] mt-2">
              Buy one lead at a time, or move to a monthly plan once you know your numbers. Combine both as your business scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Model 1 */}
            <div className="bg-white border border-[#E4DCC9] rounded-2xl p-7 relative hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EED3B0] to-[#B8834A]" />
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F2E9D8] to-[#EED3B0] flex items-center justify-center border border-[#E4DCC9]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C10.8 18.6 5.4 13.2 4.5 5.2A2 2 0 0 1 6.5 3Z"
                      stroke="#B8834A"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[11.5px] font-bold text-[#B8834A] tracking-wider">MODEL 01</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0D1B3D]">Pay Per Lead</h3>
              <p className="text-[14px] text-[#5B5A54] mb-5 min-h-[60px]">
                Connect with prospects through a live three-way call. Only pay once you've reviewed and accepted the lead.
              </p>
              <div className="text-2xl font-bold text-[#0D1B3D] pt-4 border-t border-[#E4DCC9]">
                $100–$200 <span className="text-xs font-normal text-[#5B5A54]">/ accepted lead</span>
              </div>
              <button
                onClick={() => onOpenModal('Pay Per Lead')}
                className="inline-flex items-center gap-1.5 mt-4 text-[13.5px] font-semibold text-[#B8834A] hover:gap-2.5 transition-all bg-transparent border-0 cursor-pointer"
              >
                See full pricing →
              </button>
            </div>

            {/* Model 2 (Featured) */}
            <div className="bg-gradient-to-br from-[#14285A] to-[#0D1B3D] border border-[#0D1B3D] rounded-2xl p-7 relative hover:-translate-y-2 shadow-2xl transition-all duration-300 text-white">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EED3B0] to-[#D4A574]" />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#EED3B0] to-[#B8834A] text-[#0D1B3D] text-[11px] font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="5" width="16" height="15" rx="2" stroke="#EED3B0" strokeWidth="1.6" />
                    <path d="M4 9.5h16M8 3v3.5M16 3v3.5" stroke="#EED3B0" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M8.5 13.5l1.8 1.8L15.5 12" stroke="#EED3B0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[11.5px] font-bold text-[#EED3B0] tracking-wider">MODEL 02</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Monthly Plans</h3>
              <p className="text-[14px] text-white/70 mb-5 min-h-[60px]">
                Starter, Professional, or Enterprise — fixed monthly volume of verified leads with flat-rate predictable pricing.
              </p>
              <div className="text-2xl font-bold text-white pt-4 border-t border-white/20">
                From $99 <span className="text-xs font-normal text-white/60">/ month</span>
              </div>
              <button
                onClick={() => onOpenModal('Monthly Plans')}
                className="inline-flex items-center gap-1.5 mt-4 text-[13.5px] font-semibold text-[#EED3B0] hover:gap-2.5 transition-all bg-transparent border-0 cursor-pointer"
              >
                See full pricing →
              </button>
            </div>

            {/* Model 3 */}
            <div className="bg-white border border-[#E4DCC9] rounded-2xl p-7 relative hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EED3B0] to-[#B8834A]" />
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F2E9D8] to-[#EED3B0] flex items-center justify-center border border-[#E4DCC9]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3Z" stroke="#B8834A" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M4 12l8 4.5 8-4.5M4 16l8 4.5 8-4.5" stroke="#B8834A" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[11.5px] font-bold text-[#B8834A] tracking-wider">MODEL 03</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0D1B3D]">Combine Both</h3>
              <p className="text-[14px] text-[#5B5A54] mb-5 min-h-[60px]">
                Run a monthly plan for volume, and top up with Pay Per Lead in your busiest zip codes when demand spikes.
              </p>
              <div className="text-2xl font-bold text-[#0D1B3D] pt-4 border-t border-[#E4DCC9]">
                Custom <span className="text-xs font-normal text-[#5B5A54]">mix, one invoice</span>
              </div>
              <button
                onClick={() => onOpenModal('Custom Combination')}
                className="inline-flex items-center gap-1.5 mt-4 text-[13.5px] font-semibold text-[#B8834A] hover:gap-2.5 transition-all bg-transparent border-0 cursor-pointer"
              >
                See full pricing →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS (CLIMB) ============ */}
      <section className="bg-[#0D1B3D] text-white py-20 relative overflow-hidden" id="how">
        <div className="wrap relative z-10">
          <div className="max-w-xl mb-12">
            <div className="eyebrow !text-[#EED3B0] before:!bg-[#EED3B0]">How it works</div>
            <h2 className="text-3xl font-bold text-white mt-2">
              Five steps from first contact to a confirmed lead
            </h2>
            <p className="text-white/70 text-[15.5px] mt-2">
              Every engagement — whether Pay Per Lead or a monthly plan — follows the same verified path, so you always know what happens next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                num: '01',
                title: 'We qualify the prospect',
                desc: "Every lead is screened for intent and readiness before it's connected to you.",
              },
              {
                num: '02',
                title: 'We call the prospect',
                desc: 'Our team speaks with the prospect directly and records the full conversation.',
              },
              {
                num: '03',
                title: 'You get the recording',
                desc: 'The full call recording and prospect details are sent to you to review on your own time.',
              },
              {
                num: '04',
                title: 'You decide, then pay',
                desc: 'Interested after listening to the recording? We send a secure payment link — never before.',
              },
              {
                num: '05',
                title: 'Delivered your way',
                desc: 'Once confirmed, full contact details arrive by text or email — your preference.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white/[0.045] border border-white/10 rounded-2xl p-6 relative hover:-translate-y-1 hover:border-[#EED3B0]/50 hover:bg-white/[0.08] transition-all duration-300"
              >
                <span className="absolute top-5 right-5 text-xs text-white/30 font-bold">{step.num}</span>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EED3B0]/20 to-[#B8834A]/30 border border-[#EED3B0]/30 flex items-center justify-center mb-5 text-[#EED3B0] font-bold text-sm">
                  {idx + 1}
                </div>
                <h4 className="text-[15.5px] font-bold text-white mb-2">{step.title}</h4>
                <p className="text-[13px] text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY AGENTS TRUST US ============ */}
      <section className="py-20" id="trust">
        <div className="wrap">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="eyebrow center">Why agents trust us</div>
            <h2 className="text-3xl font-bold mt-2">Built around accountability, not promises</h2>
            <p className="text-[#5B5A54] text-[15.5px] mt-2">
              Most lead companies ask you to trust a dashboard. We give you something you can verify yourself, in writing, before money changes hands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-[#E4DCC9] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#FAF6EF] text-[#B8834A] flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-[#0D1B3D] mb-1.5">You hear the prospect first</h4>
              <p className="text-[13px] text-[#5B5A54]">
                Every Pay Per Lead introduction happens on a live call or a recording you review — never a blind hand-off.
              </p>
            </div>

            <div className="bg-white border border-[#E4DCC9] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#FAF6EF] text-[#B8834A] flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6 4h9l3 3v13H6z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M9 11h6M9 15h6" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-[#0D1B3D] mb-1.5">Agreements in writing</h4>
              <p className="text-[13px] text-[#5B5A54]">
                Terms — including refund guarantees — are documented between you and Mavrix Realty, never a verbal promise.
              </p>
            </div>

            <div className="bg-white border border-[#E4DCC9] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#FAF6EF] text-[#B8834A] flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-[#0D1B3D] mb-1.5">Lead Guarantee</h4>
              <p className="text-[13px] text-[#5B5A54]">
                If we can't deliver, or you receive unusable prospects within the period, you're covered by our written guarantee.
              </p>
            </div>

            <div className="bg-white border border-[#E4DCC9] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#FAF6EF] text-[#B8834A] flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h4l2-6 4 12 2-6h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-[#0D1B3D] mb-1.5">No lock-in contracts</h4>
              <p className="text-[13px] text-[#5B5A54]">
                Pay Per Lead has zero commitment. Monthly plans run month to month — cancel or switch tiers any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PHOTO SPLIT ============ */}
      <section className="py-12">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1758448755856-01d3add0177b?auto=format&fit=crop&w=900&q=75"
                alt="Bright luxury interior"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-[#0D1B3D]/90 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 text-white">
                <div className="text-2xl font-bold text-[#EED3B0]">4.8 / 5</div>
                <div className="text-xs text-white/70 leading-tight">
                  Average agent rating across all verified deliveries, last 6 months
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="eyebrow">Why the call comes first</div>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              A verified lead is worth more than ten unverified ones
            </h2>
            <p className="text-[#5B5A54] text-[15px] mt-3 leading-relaxed">
              Volume-based lead lists leave you cold-calling people who never asked to hear from an agent. Every Mavrix prospect has already said, out loud, that they want to talk to you.
            </p>

            <div className="flex flex-col gap-5 mt-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#F2E9D8] text-[#B8834A] font-bold text-sm flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#0D1B3D]">Intent is confirmed on tape</h4>
                  <p className="text-[13px] text-[#5B5A54]">
                    You're never guessing whether a lead is real — you hear it for yourself.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#F2E9D8] text-[#B8834A] font-bold text-sm flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#0D1B3D]">Territory-aware routing</h4>
                  <p className="text-[13px] text-[#5B5A54]">
                    Monthly plans cap how many agents share a zip code, so you're not racing five other calls.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#F2E9D8] text-[#B8834A] font-bold text-sm flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#0D1B3D]">30-Day Lead Guarantee</h4>
                  <p className="text-[13px] text-[#5B5A54]">
                    If you face any issue with a lead within 30 days, we’ll provide you with another lead at no additional cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING SECTION ============ */}
      <section className="bg-[#0D1B3D] text-white py-20" id="pricing">
        <div className="wrap">
          <div className="max-w-xl mb-10">
            <div className="eyebrow !text-[#EED3B0] before:!bg-[#EED3B0]">Pricing</div>
            <h2 className="text-3xl font-bold text-white mt-2">Simple, transparent pricing</h2>
            <p className="text-white/70 text-[15.5px] mt-2">
              No hidden fees, no long-term contracts. Pick per-lead pricing, or a monthly plan sized to your market.
            </p>
          </div>

          {/* Toggle Button */}
          <div className="inline-flex p-1 bg-white/[0.08] border border-white/20 rounded-full mb-10">
            <button
              onClick={() => setPricingTab('monthly')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border-0 cursor-pointer ${pricingTab === 'monthly'
                  ? 'bg-gradient-to-r from-[#EED3B0] to-[#B8834A] text-[#0D1B3D]'
                  : 'bg-transparent text-white/70 hover:text-white'
                }`}
            >
              Monthly Plans
            </button>
            <button
              onClick={() => setPricingTab('perlead')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border-0 cursor-pointer ${pricingTab === 'perlead'
                  ? 'bg-gradient-to-r from-[#EED3B0] to-[#B8834A] text-[#0D1B3D]'
                  : 'bg-transparent text-white/70 hover:text-white'
                }`}
            >
              Pay Per Lead
            </button>
          </div>

          {/* Pane: Monthly */}
          {pricingTab === 'monthly' && (
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

              {/* Professional (Featured) */}
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

          {/* Pane: Pay Per Lead */}
          {pricingTab === 'perlead' && (
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

          <div className="text-xs text-white/50 mt-8 flex items-start gap-2">
            <span>ⓘ</span>
            <span>
              Pay Per Lead prices vary by zip code and property type. Monthly plan volumes are targets, backed by the guarantee — territory exclusivity is subject to availability in your market.
            </span>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20" id="testimonials">
        <div className="wrap">
          <div className="max-w-xl mb-12">
            <div className="eyebrow">From working agents</div>
            <h2 className="text-3xl font-bold mt-2">What it's like to build a pipeline on Mavrix</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E4DCC9] rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="text-[#B8834A] text-sm tracking-widest mb-3">★★★★★</div>
                <p className="text-[14.5px] text-[#1C1B18] leading-relaxed mb-6">
                  "I could actually hear the prospect say they wanted to sell before I paid a dollar. That alone changed how I budget for leads."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#EED3B0] to-[#B8834A] text-white flex items-center justify-center font-bold text-xs">
                  SM
                </div>
                <div>
                  <h5 className="text-[13.5px] font-bold text-[#0D1B3D]">Sarah M.</h5>
                  <span className="text-[12px] text-[#5B5A54]">Broker, Austin TX</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E4DCC9] rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="text-[#B8834A] text-sm tracking-widest mb-3">★★★★★</div>
                <p className="text-[14.5px] text-[#1C1B18] leading-relaxed mb-6">
                  "Moved from Pay Per Lead to Standard once I saw the close rate. Having a flat monthly number made forecasting my quarter simple."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#25407F] to-[#14285A] text-white flex items-center justify-center font-bold text-xs">
                  DK
                </div>
                <div>
                  <h5 className="text-[13.5px] font-bold text-[#0D1B3D]">David K.</h5>
                  <span className="text-[12px] text-[#5B5A54]">Agent, Tampa FL</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E4DCC9] rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="text-[#B8834A] text-sm tracking-widest mb-3">★★★★★</div>
                <p className="text-[14.5px] text-[#1C1B18] leading-relaxed mb-6">
                  "The written agreement on the refund guarantee is what got me to try it. No other lead source I've used puts that on paper."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0D1B3D] text-white flex items-center justify-center font-bold text-xs">
                  RL
                </div>
                <div>
                  <h5 className="text-[13.5px] font-bold text-[#0D1B3D]">Renee L.</h5>
                  <span className="text-[12px] text-[#5B5A54]">Team Lead, Columbus OH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ACCORDION ============ */}
      <section className="bg-[#F2E9D8] py-20" id="faq">
        <div className="wrap max-w-3xl">
          <div className="text-center mb-12">
            <div className="eyebrow center">FAQ</div>
            <h2 className="text-3xl font-bold mt-2">Common questions</h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl border transition-colors ${isOpen ? 'border-[#B8834A]' : 'border-[#E4DCC9]'
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-[15px] text-[#0D1B3D] bg-transparent border-0 cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <span
                      className={`text-[#B8834A] text-xl transition-transform ${isOpen ? 'rotate-45' : ''
                        }`}
                    >
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

      {/* ============ FINAL CTA ============ */}
      <section className="py-14">
        <div className="wrap">
          <div className="bg-gradient-to-r from-[#0D1B3D] to-[#14285A] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to fill your pipeline?
              </h2>
              <p className="text-white/70 text-[15px]">
                Pick Pay Per Lead to test the water, or start a monthly plan and know your volume in advance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                onClick={() => onOpenModal('Get Started CTA')}
                className="btn btn-primary"
              >
                Get started →
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('how');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-on-navy"
              >
                See how it works
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
