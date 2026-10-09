import React from 'react';
import { MessageSquare, PhoneCall, Mail, Bell, Shield, CheckCircle2 } from 'lucide-react';

interface LegalPageProps {
  navigate: (path: string) => void;
}

export const CommunicationsPolicy: React.FC<LegalPageProps> = ({ navigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF6EF]">
      {/* Header */}
      <section className="bg-[#0D1B3D] text-white pt-20 pb-16 border-b border-[#E4DCC9]">
        <div className="max-w-[880px] mx-auto px-6 md:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-3">
            <button onClick={() => navigate('/')} className="hover:underline">Home</button>
            <span>/</span>
            <span>Legal</span>
            <span>/</span>
            <span className="text-white">Communications Policy</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Communications Policy
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-xl">
            Detailed standards for automated &amp; non-automated telephone, SMS, and email messaging in compliance with TCPA and CAN-SPAM regulations.
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-16">
        <div className="max-w-[880px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E4DCC9] shadow-sm space-y-10 text-[#1C1B18] leading-relaxed">
            
            {/* Quick Navigation Cards */}
            <div className="p-4 bg-[#FAF6EF] rounded-2xl border border-[#E4DCC9] flex flex-wrap gap-3 items-center justify-between text-xs font-medium">
              <span className="text-[#5B5A54]">Related Legal Documents:</span>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('/privacy-policy')}
                  className="text-[#8C5823] hover:text-[#0D1B3D] font-semibold underline"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => navigate('/terms-of-use')}
                  className="text-[#8C5823] hover:text-[#0D1B3D] font-semibold underline"
                >
                  Terms of Use
                </button>
              </div>
            </div>

            {/* 1. Overview */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#0D1B3D] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#FAF6EF] border border-[#E4DCC9] flex items-center justify-center text-sm font-bold text-[#8C5823]">
                  1
                </span>
                Overview
              </h2>
              <p className="text-[#5B5A54]">
                By providing your contact information to Mavrix Realty (“Company”, “we”, “us”, or “our”), you consent to receive communications from us via SMS/text messages, phone calls, and email, in accordance with this policy, the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, and other applicable laws.
              </p>
              <p className="text-[#5B5A54]">
                Communications may include service-related messages, account notifications, lead updates, onboarding information, marketing messages, and promotional offers related to our services.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* 2. SMS / Text Message Communications (TCPA Compliance) */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#0D1B3D] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#FAF6EF] border border-[#E4DCC9] flex items-center justify-center text-sm font-bold text-[#8C5823]">
                  2
                </span>
                SMS / Text Message Communications (TCPA Compliance)
              </h2>
              
              <div className="space-y-2 pl-3 border-l-2 border-[#D4A574]/40 ml-2">
                <h3 className="font-bold text-[#0D1B3D] text-base">Consent</h3>
                <p className="text-[#5B5A54] text-sm">
                  By submitting your phone number through our website, forms, landing pages, or other opt-in methods, you expressly consent to receive automated and non-automated SMS/text messages and calls from Mavrix Realty, including marketing and informational messages. <strong>Consent is not a condition of purchase.</strong>
                </p>
              </div>

              <div className="space-y-2 pl-3 border-l-2 border-[#D4A574]/40 ml-2">
                <h3 className="font-bold text-[#0D1B3D] text-base">Message Frequency</h3>
                <p className="text-[#5B5A54] text-sm">
                  Message frequency may vary depending on your interaction with our services.
                </p>
              </div>

              <div className="space-y-2 pl-3 border-l-2 border-[#D4A574]/40 ml-2">
                <h3 className="font-bold text-[#0D1B3D] text-base">Opt-Out</h3>
                <p className="text-[#5B5A54] text-sm">
                  You may opt out of SMS communications at any time by replying <strong>STOP</strong> to any message. After opting out, you may receive a final confirmation message, and no further messages will be sent unless you re-opt in.
                </p>
              </div>

              <div className="space-y-2 pl-3 border-l-2 border-[#D4A574]/40 ml-2">
                <h3 className="font-bold text-[#0D1B3D] text-base">Help</h3>
                <p className="text-[#5B5A54] text-sm">
                  For help, reply <strong>HELP</strong> or contact us using the information below.
                </p>
              </div>

              <div className="space-y-2 pl-3 border-l-2 border-[#D4A574]/40 ml-2">
                <h3 className="font-bold text-[#0D1B3D] text-base">Message &amp; Data Rates</h3>
                <p className="text-[#5B5A54] text-sm">
                  Standard message and data rates may apply based on your mobile carrier plan.
                </p>
              </div>

              <div className="space-y-2 pl-3 border-l-2 border-[#D4A574]/40 ml-2">
                <h3 className="font-bold text-[#0D1B3D] text-base">Carriers</h3>
                <p className="text-[#5B5A54] text-sm">
                  Wireless carriers are not liable for delayed or undelivered messages.
                </p>
              </div>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* 3. Email Communications (CAN-SPAM Compliance) */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#0D1B3D] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#FAF6EF] border border-[#E4DCC9] flex items-center justify-center text-sm font-bold text-[#8C5823]">
                  3
                </span>
                Email Communications (CAN-SPAM Compliance)
              </h2>
              <p className="text-[#5B5A54]">
                By providing your email address, you consent to receive emails from Mavrix Realty, including service-related communications and marketing messages. All marketing emails will:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-[#5B5A54] text-sm ml-2">
                <li>Clearly identify the sender</li>
                <li>Include a valid contact method</li>
                <li>Contain an unsubscribe link</li>
              </ul>
              <p className="text-[#5B5A54] text-sm">
                <strong>Opt-Out:</strong> You may unsubscribe from marketing emails at any time by clicking the unsubscribe link included in our emails. Transactional or service-related emails may still be sent as required to manage your account or services.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* 4. Data Usage & Privacy */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#0D1B3D] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#FAF6EF] border border-[#E4DCC9] flex items-center justify-center text-sm font-bold text-[#8C5823]">
                  4
                </span>
                Data Usage &amp; Privacy
              </h2>
              <div className="p-4 bg-[#F2E9D8] rounded-xl border border-[#E4DCC9] text-sm text-[#0D1B3D] font-medium">
                We do not sell your personal contact information.
              </div>
              <p className="text-[#5B5A54] text-sm">
                Your information is used solely in accordance with our Privacy Policy to provide services, communicate with you, and improve our offerings.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* 5. Eligibility */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#0D1B3D] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#FAF6EF] border border-[#E4DCC9] flex items-center justify-center text-sm font-bold text-[#8C5823]">
                  5
                </span>
                Eligibility
              </h2>
              <p className="text-[#5B5A54] text-sm">
                By providing your contact information, you confirm that:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-[#5B5A54] text-sm ml-2">
                <li>You are the authorized user of the phone number and/or email address provided</li>
                <li>You are at least 18 years of age</li>
              </ul>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* 6. Changes to This Policy */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#0D1B3D] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#FAF6EF] border border-[#E4DCC9] flex items-center justify-center text-sm font-bold text-[#8C5823]">
                  6
                </span>
                Changes to This Policy
              </h2>
              <p className="text-[#5B5A54] text-sm">
                We reserve the right to modify this policy at any time. Updates will be posted on this page, and continued use of our services constitutes acceptance of those changes.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* 7. Contact Information */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#0D1B3D] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#FAF6EF] border border-[#E4DCC9] flex items-center justify-center text-sm font-bold text-[#8C5823]">
                  7
                </span>
                Contact Information
              </h2>
              <p className="text-[#5B5A54] text-sm">
                If you have questions regarding this policy or our communications practices, you may contact us at:
              </p>
              <div className="bg-[#FAF6EF] p-5 rounded-2xl border border-[#E4DCC9] space-y-2 text-sm text-[#0D1B3D]">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#8C5823]" />
                  <span>Email:</span>
                  <a href="mailto:support@mavrixrealty.com" className="font-semibold text-[#8C5823] underline">
                    support@mavrixrealty.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#8C5823]" />
                  <span>Phone:</span>
                  <a href="tel:5176285353" className="font-semibold text-[#0D1B3D] hover:text-[#8C5823]">
                    (517) 628-5353
                  </a>
                </p>
                <p className="text-xs text-[#5B5A54] pt-1">
                  Mavrix Realty • 2222 W. Grand River Ave, Ste A, Okemos, MI 48864, USA
                </p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};
