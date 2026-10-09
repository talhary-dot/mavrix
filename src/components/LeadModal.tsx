import React, { useState, useEffect } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  planName?: string;
  initialPlan?: string;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, planName, initialPlan, onClose }) => {
  const currentPlan = planName || initialPlan || 'Pay Per Lead';
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
    agreeTerms: false,
    consentMarketing: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-[#0D1B3D]/65 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative bg-white rounded-2xl w-full max-w-[500px] max-h-[90vh] overflow-y-auto p-7 md:p-9 shadow-2xl animate-modal"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F2E9D8] hover:bg-[#EED3B0] flex items-center justify-center border-0 cursor-pointer text-[#0D1B3D] transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="#14285A" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0D1B3D] mb-2">Request Received!</h3>
            <p className="text-[14.5px] text-[#5B5A54] max-w-sm mx-auto mb-6">
              Thank you for requesting information for <strong>{planName}</strong>. Our team will review your market territory and contact you within one business day.
            </p>
            <button
              onClick={onClose}
              className="btn btn-primary w-full py-3 text-sm font-semibold"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Plan Chip */}
            <div className="inline-flex items-center gap-1.5 bg-[#F2E9D8] border border-[#E4DCC9] rounded-full px-3.5 py-1.5 text-[11.5px] tracking-wider uppercase font-semibold text-[#B8834A] mb-3.5">
              <span>★</span> {planName || 'PAY PER LEAD'}
            </div>

            <h3 className="text-[23px] font-bold text-[#0D1B3D] mb-2 pr-6">
              Let's get you set up
            </h3>
            <p className="text-[13.5px] text-[#5B5A54] mb-6">
              Tell us a bit about your business and we'll follow up within one business day.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-medium text-[#14285A] mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E4DCC9] bg-white text-[14px] text-[#1C1B18] placeholder-[#9E9B93] focus:outline-none focus:border-[#B8834A] focus:ring-1 focus:ring-[#B8834A]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-[#14285A] mb-1">Last Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E4DCC9] bg-white text-[14px] text-[#1C1B18] placeholder-[#9E9B93] focus:outline-none focus:border-[#B8834A] focus:ring-1 focus:ring-[#B8834A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-medium text-[#14285A] mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="agent@brokerage.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E4DCC9] bg-white text-[14px] text-[#1C1B18] placeholder-[#9E9B93] focus:outline-none focus:border-[#B8834A] focus:ring-1 focus:ring-[#B8834A]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-[#14285A] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E4DCC9] bg-white text-[14px] text-[#1C1B18] placeholder-[#9E9B93] focus:outline-none focus:border-[#B8834A] focus:ring-1 focus:ring-[#B8834A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-medium text-[#14285A] mb-1">
                  Target Market / Anything we should know? (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Zip codes, property types, buyer vs seller preference..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#E4DCC9] bg-white text-[14px] text-[#1C1B18] placeholder-[#9E9B93] focus:outline-none focus:border-[#B8834A] focus:ring-1 focus:ring-[#B8834A]"
                ></textarea>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  required
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="mt-1 accent-[#B8834A]"
                />
                <label htmlFor="agreeTerms" className="text-[12px] text-[#5B5A54] leading-tight">
                  I agree to the <a href="/terms-of-use" className="underline text-[#14285A]">Terms & Conditions</a> and acknowledge the <a href="/privacy-policy" className="underline text-[#14285A]">Privacy Policy</a>. Required.
                </label>
              </div>

              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="consentMarketing"
                  checked={formData.consentMarketing}
                  onChange={(e) => setFormData({ ...formData, consentMarketing: e.target.checked })}
                  className="mt-1 accent-[#B8834A]"
                />
                <label htmlFor="consentMarketing" className="text-[11.5px] text-[#5B5A54] leading-tight">
                  I consent to receive service-related calls or messages about this request. Marketing consent is optional and is not a condition of purchasing a service. See our <a href="/communications-policy" className="underline text-[#14285A]">Communications Policy</a>.
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full py-3 mt-2 text-[15px] font-semibold"
              >
                Send Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
