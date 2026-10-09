import React from 'react';
import { FileText, Shield, Scale, Mail, AlertTriangle } from 'lucide-react';

interface LegalPageProps {
  navigate: (path: string) => void;
}

export const TermsOfUse: React.FC<LegalPageProps> = ({ navigate }) => {
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
            <span className="text-white">Terms of Use</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Terms of Use
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-xl">
            Please read these terms carefully before accessing or using the Mavrix Realty website and services.
          </p>
        </div>
      </section>

      {/* Main Legal Body */}
      <section className="py-16">
        <div className="max-w-[880px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E4DCC9] shadow-sm space-y-9 text-[#1C1B18] leading-relaxed">
            
            {/* Quick Links */}
            <div className="p-4 bg-[#FAF6EF] rounded-2xl border border-[#E4DCC9] flex flex-wrap gap-3 items-center justify-between text-xs font-medium">
              <span className="text-[#5B5A54]">Related Legal Documents:</span>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('/privacy-policy')}
                  className="text-[#B8834A] hover:text-[#0D1B3D] font-semibold underline"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => navigate('/communications-policy')}
                  className="text-[#B8834A] hover:text-[#0D1B3D] font-semibold underline"
                >
                  Communications Policy
                </button>
              </div>
            </div>

            {/* Intro */}
            <div>
              <p className="text-[#5B5A54]">
                Welcome to <strong>mavrixrealty.com</strong> (the “Website”). This Website is owned, maintained, and operated by Mavrix Realty (“Company,” “we,” “our,” or “us”). Your access to and use of the Website is subject to these Terms of Use (“Terms”) and all applicable laws.
              </p>
              <p className="text-[#5B5A54] mt-3">
                By accessing or using any part of the Website, you agree to be bound by these Terms without limitation or qualification. If you do not agree to these Terms, you may not access or use the Website.
              </p>
            </div>

            <hr className="border-[#E4DCC9]" />

            {/* ACCESSIBILITY */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#0D1B3D] uppercase tracking-wide">
                Accessibility
              </h2>
              <p className="text-[#5B5A54] text-sm">
                If you are having difficulty accessing any feature or content on the Website, please contact us at:{' '}
                <a href="mailto:privacy@mavrixrealty.com" className="text-[#B8834A] font-semibold underline">
                  privacy@mavrixrealty.com
                </a>
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* AUTHORIZED USE OF WEBSITE */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#0D1B3D] uppercase tracking-wide">
                Authorized Use of Website
              </h2>
              <p className="text-[#5B5A54] text-sm">
                The Website is provided for your personal and lawful use only. Any commercial or unauthorized exploitation of the Website without the prior written consent of the Company is strictly prohibited.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* USER CONTENT */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#0D1B3D] uppercase tracking-wide">
                User Content
              </h2>
              <p className="text-[#5B5A54] text-sm">
                Through the Website, you may submit information including, but not limited to, personal details, contact information, property-related information, territory specifications, or service inquiries (“User Content”). You represent and warrant that all User Content you submit is accurate, complete, and truthful. You are solely responsible for any consequences arising from inaccurate, misleading, or false User Content.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* CONTENT AND INTELLECTUAL PROPERTY */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#0D1B3D] uppercase tracking-wide">
                Content and Intellectual Property
              </h2>
              <p className="text-[#5B5A54] text-sm">
                We grant you a limited, non-exclusive, non-transferable, revocable license to access and view the Website and its content for personal use only. All content on the Website, including text, graphics, logos, software, designs, trademarks, service marks, and other intellectual property, is owned by or licensed to Mavrix Realty and is protected by applicable intellectual property laws.
              </p>
              <p className="text-[#5B5A54] text-sm">
                You may not copy, reproduce, distribute, modify, display, create derivative works from, or otherwise exploit any Website content without prior written consent from Mavrix Realty. All rights not expressly granted are reserved.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* UNAUTHORIZED USE OF WEBSITE */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#0D1B3D] uppercase tracking-wide">
                Unauthorized Use of Website
              </h2>
              <p className="text-[#5B5A54] text-sm">You agree not to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-[#5B5A54] text-sm ml-2">
                <li>Use bots, spiders, scrapers, or automated tools to access or collect data from the Website</li>
                <li>Interfere with or disrupt Website functionality or security</li>
                <li>Circumvent access controls or exceed authorized access</li>
                <li>Frame, mirror, or resell any portion of the Website or verified lead data</li>
                <li>Use the Website for unlawful, deceptive, or fraudulent purposes</li>
              </ul>
              <p className="text-[#5B5A54] text-sm">
                Mavrix Realty reserves the right to suspend or terminate access immediately for violations of these Terms.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* ACCESS CREDENTIALS */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#0D1B3D] uppercase tracking-wide">
                Access Credentials
              </h2>
              <p className="text-[#5B5A54] text-sm">
                Certain features may require account creation. You agree to provide accurate registration information and to safeguard your login credentials. You are responsible for all activity occurring under your account. We may suspend or terminate access at any time, with or without notice. Use of personal information is governed by our Privacy Policy.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* NO IDEAS ACCEPTED */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#0D1B3D] uppercase tracking-wide">
                No Ideas Accepted
              </h2>
              <p className="text-[#5B5A54] text-sm">
                Mavrix Realty does not accept unsolicited ideas, proposals, or suggestions. If you submit any such ideas, you agree that they are not confidential and that Mavrix Realty may use them without restriction or compensation. To the extent permitted by law, all rights to such submissions are irrevocably assigned to Mavrix Realty.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* LINKS TO THIRD PARTIES */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#0D1B3D] uppercase tracking-wide">
                Links to Third Parties
              </h2>
              <p className="text-[#5B5A54] text-sm">
                The Website may contain links to third-party websites or services. Mavrix Realty is not responsible for the content, policies, or practices of third parties. Accessing third-party sites is at your own risk.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* NO WARRANTIES & LIMITATION OF LIABILITY */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-[#0D1B3D] uppercase tracking-wide">
                No Warranties &amp; Limitation of Liability
              </h2>
              <div className="p-4 rounded-xl bg-[#F2E9D8] text-xs font-semibold text-[#0D1B3D] leading-relaxed">
                THE WEBSITE AND ALL CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE.” MAVRIX REALTY MAKES NO WARRANTIES OR REPRESENTATIONS OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </div>
              <p className="text-[#5B5A54] text-sm">
                YOUR USE OF THE WEBSITE IS AT YOUR OWN RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, MAVRIX REALTY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING FROM OR RELATED TO YOUR USE OF THE WEBSITE.
              </p>
              <p className="text-[#5B5A54] text-sm">
                IN NO EVENT SHALL MAVRIX REALTY’S TOTAL LIABILITY EXCEED THE AMOUNT PAID BY YOU TO MAVRIX REALTY IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* WAIVER BY CALIFORNIA RESIDENTS */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#0D1B3D] uppercase tracking-wide">
                Waiver by California Residents
              </h2>
              <p className="text-[#5B5A54] text-sm">
                If you are a California resident, you waive California Civil Code Section 1542, which provides that a general release does not extend to claims unknown at the time of execution.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* GOVERNING LAW & JURISDICTION */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#0D1B3D] uppercase tracking-wide">
                Governing Law &amp; Dispute Resolution
              </h2>
              <p className="text-[#5B5A54] text-sm">
                These Terms are governed by the laws of the State of Michigan, without regard to conflict-of-law principles. You consent to exclusive jurisdiction and venue in courts located in Okemos, Michigan.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF6EF] border border-[#E4DCC9] text-xs font-semibold text-[#0D1B3D] leading-relaxed">
                WAIVER OF JURY TRIAL &amp; CLASS ACTION: YOU AGREE TO WAIVE THE RIGHT TO A JURY TRIAL AND TO PARTICIPATE IN ANY CLASS ACTION, COLLECTIVE ACTION, OR REPRESENTATIVE PROCEEDING. ALL CLAIMS MUST BE BROUGHT ON AN INDIVIDUAL BASIS.
              </div>
              <p className="text-[#5B5A54] text-sm">
                <strong>Time Limit on Claims:</strong> Any claim arising out of or relating to these Terms must be brought within one (1) year of the event giving rise to the claim.
              </p>
            </section>

            <hr className="border-[#E4DCC9]" />

            {/* QUESTIONS */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-[#0D1B3D] uppercase tracking-wide">
                Questions
              </h2>
              <p className="text-[#5B5A54] text-sm">
                If you have questions regarding these Terms of Use, please contact us at:{' '}
                <a href="mailto:privacy@mavrixrealty.com" className="text-[#B8834A] font-semibold underline">
                  privacy@mavrixrealty.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};
