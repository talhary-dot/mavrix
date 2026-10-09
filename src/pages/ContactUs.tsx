import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2, Send, MessageSquare } from 'lucide-react';

interface ContactUsProps {
  navigate: (path: string) => void;
  onOpenModal: (plan?: string) => void;
}

export const ContactUs: React.FC<ContactUsProps> = ({ navigate, onOpenModal }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
    termsAgreed: false,
    consentAgreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    if (!formData.termsAgreed) {
      setErrorMsg('You must agree to the Terms & Conditions and Privacy Policy.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF6EF]">
      {/* Hero Header */}
      <section className="relative bg-[#0D1B3D] text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4A574_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="eyebrow !text-[#EED3B0] before:!bg-[#EED3B0] mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Connect with the <span className="text-[#D4A574]">Mavrix Realty</span> Team
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Have questions about our verified real estate leads, pricing plans, or onboarding process? Our specialists are here to assist you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Contact Info & Guarantees */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0D1B3D] mb-3">
                  Direct Inquiries
                </h2>
                <p className="text-[#5B5A54] leading-relaxed">
                  Reach out directly through phone or email, or submit the contact form and our partnership desk will respond within 2 business hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl border border-[#E4DCC9] shadow-sm flex items-start gap-4 transition-all hover:border-[#D4A574]">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6EF] border border-[#E4DCC9] flex items-center justify-center text-[#B8834A] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#B8834A] uppercase tracking-wider block mb-1">
                      Direct Phone
                    </span>
                    <a
                      href="tel:9062104947"
                      className="text-lg font-bold text-[#0D1B3D] hover:text-[#B8834A] transition-colors"
                    >
                      (906) 210-4947
                    </a>
                    <p className="text-xs text-[#5B5A54] mt-1">Monday – Friday: 8:00 AM – 7:00 PM EST</p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-[#E4DCC9] shadow-sm flex items-start gap-4 transition-all hover:border-[#D4A574]">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6EF] border border-[#E4DCC9] flex items-center justify-center text-[#B8834A] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#B8834A] uppercase tracking-wider block mb-1">
                      Email Desk
                    </span>
                    <a
                      href="mailto:contact@mavrixrealty.com"
                      className="text-lg font-bold text-[#0D1B3D] hover:text-[#B8834A] transition-colors"
                    >
                      contact@mavrixrealty.com
                    </a>
                    <p className="text-xs text-[#5B5A54] mt-1">Inquiries typically answered within 2 hours</p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-[#E4DCC9] shadow-sm flex items-start gap-4 transition-all hover:border-[#D4A574]">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6EF] border border-[#E4DCC9] flex items-center justify-center text-[#B8834A] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#B8834A] uppercase tracking-wider block mb-1">
                      Headquarters
                    </span>
                    <p className="text-base font-bold text-[#0D1B3D]">
                      Mavrix Realty LLC
                    </p>
                    <p className="text-sm text-[#5B5A54] mt-1">
                      2222 W. Grand River Ave, Ste A<br />
                      Okemos, MI 48864, USA
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Pledge Box */}
              <div className="p-6 bg-[#F2E9D8] rounded-2xl border border-[#E4DCC9]">
                <div className="flex items-center gap-3 mb-2 text-[#0D1B3D] font-bold">
                  <Clock className="w-5 h-5 text-[#B8834A]" />
                  <span>Agent Priority Support</span>
                </div>
                <p className="text-sm text-[#5B5A54] leading-relaxed">
                  Are you an active subscriber on our Pay Per Lead or Monthly Service tiers? Log into your agent dashboard or mention your account ID for priority escalation.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E4DCC9] shadow-xl relative overflow-hidden">
                <div className="mb-8">
                  <span className="text-xs font-bold text-[#B8834A] uppercase tracking-wider block mb-2">
                    Send a Message
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B3D]">
                    Start a Conversation
                  </h3>
                  <p className="text-[#5B5A54] text-sm mt-1">
                    Fill out the form below and an agent specialist will review your service territory.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 px-6 text-center bg-[#FAF6EF] rounded-2xl border border-[#E4DCC9]">
                    <div className="w-16 h-16 bg-[#D4A574]/20 text-[#B8834A] rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#0D1B3D] mb-2">
                      Message Received!
                    </h4>
                    <p className="text-[#5B5A54] max-w-md mx-auto mb-6 text-sm">
                      Thank you, <strong>{formData.firstName}</strong>. We have routed your inquiry to our brokerage accounts team. We will contact you at <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          notes: '',
                          termsAgreed: false,
                          consentAgreed: false,
                        });
                      }}
                      className="btn btn-ghost text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMsg && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                        {errorMsg}
                      </div>
                    )}

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0D1B3D] uppercase tracking-wider mb-2">
                          First Name <span className="text-[#B8834A]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="First Name"
                          className="w-full px-4 py-3 rounded-xl border border-[#E4DCC9] bg-[#FAF6EF]/50 text-[#0D1B3D] text-sm focus:outline-none focus:border-[#B8834A] focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0D1B3D] uppercase tracking-wider mb-2">
                          Last Name <span className="text-[#B8834A]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Last Name"
                          className="w-full px-4 py-3 rounded-xl border border-[#E4DCC9] bg-[#FAF6EF]/50 text-[#0D1B3D] text-sm focus:outline-none focus:border-[#B8834A] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0D1B3D] uppercase tracking-wider mb-2">
                          Work Email <span className="text-[#B8834A]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@brokerage.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#E4DCC9] bg-[#FAF6EF]/50 text-[#0D1B3D] text-sm focus:outline-none focus:border-[#B8834A] focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0D1B3D] uppercase tracking-wider mb-2">
                          Phone Number <span className="text-[#B8834A]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-[#E4DCC9] bg-[#FAF6EF]/50 text-[#0D1B3D] text-sm focus:outline-none focus:border-[#B8834A] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Optional Note */}
                    <div>
                      <label className="block text-xs font-semibold text-[#0D1B3D] uppercase tracking-wider mb-2">
                        Anything we should know? <span className="text-[#5B5A54] font-normal lowercase">(optional)</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us about your target county, current volume, or preferred plan..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E4DCC9] bg-[#FAF6EF]/50 text-[#0D1B3D] text-sm focus:outline-none focus:border-[#B8834A] focus:bg-white transition-all resize-y"
                      />
                    </div>

                    {/* Required Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer select-none text-xs text-[#5B5A54] leading-relaxed">
                        <input
                          type="checkbox"
                          checked={formData.termsAgreed}
                          onChange={(e) => setFormData({ ...formData, termsAgreed: e.target.checked })}
                          className="mt-0.5 w-4 h-4 rounded text-[#B8834A] border-[#E4DCC9] focus:ring-[#D4A574]"
                        />
                        <span>
                          I agree to the{' '}
                          <button
                            type="button"
                            onClick={() => navigate('/terms-of-use')}
                            className="text-[#B8834A] font-semibold underline hover:text-[#0D1B3D]"
                          >
                            Terms &amp; Conditions
                          </button>{' '}
                          and acknowledge the{' '}
                          <button
                            type="button"
                            onClick={() => navigate('/privacy-policy')}
                            className="text-[#B8834A] font-semibold underline hover:text-[#0D1B3D]"
                          >
                            Privacy Policy
                          </button>
                          . <strong className="text-[#0D1B3D]">Required.</strong>
                        </span>
                      </label>
                    </div>

                    {/* Optional Consent Checkbox */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer select-none text-xs text-[#5B5A54] leading-relaxed">
                        <input
                          type="checkbox"
                          checked={formData.consentAgreed}
                          onChange={(e) => setFormData({ ...formData, consentAgreed: e.target.checked })}
                          className="mt-0.5 w-4 h-4 rounded text-[#B8834A] border-[#E4DCC9] focus:ring-[#D4A574]"
                        />
                        <span>
                          I consent to receive service-related calls or messages about this request. Marketing consent is optional and is not a condition of purchasing a service. Messaging frequency, opt-out instructions, and provider details will be disclosed before messaging is enabled. See our{' '}
                          <button
                            type="button"
                            onClick={() => navigate('/terms-of-use')}
                            className="text-[#B8834A] font-semibold underline hover:text-[#0D1B3D]"
                          >
                            Terms &amp; Conditions
                          </button>{' '}
                          and{' '}
                          <button
                            type="button"
                            onClick={() => navigate('/privacy-policy')}
                            className="text-[#B8834A] font-semibold underline hover:text-[#0D1B3D]"
                          >
                            Privacy Policy
                          </button>
                          . Optional.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="btn btn-primary w-full !py-3.5 !text-base shadow-md font-bold"
                      >
                        <Send className="w-4 h-4 mr-1" /> Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Alternative CTA Section */}
      <section className="bg-[#0D1B3D] text-white py-16 border-t border-white/10">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Prefer to explore our plans right away?
          </h3>
          <p className="text-white/70 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Review verified lead pricing by county, pay-at-closing options, and monthly concierge tiers with complete transparency.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/pricing')}
              className="btn btn-primary"
            >
              View Full Pricing
            </button>
            <button
              onClick={() => onOpenModal('Pay Per Lead')}
              className="btn btn-on-navy"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
