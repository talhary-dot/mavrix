import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user already made choice
    const saved = localStorage.getItem('mvx_cookie_consent');
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('mvx_cookie_consent', 'all');
    setVisible(false);
    setModalOpen(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('mvx_cookie_consent', 'essential_only');
    setVisible(false);
    setModalOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('mvx_cookie_consent', JSON.stringify(preferences));
    setVisible(false);
    setModalOpen(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-md z-[200] bg-white border border-[#E4DCC9] rounded-2xl p-5 shadow-2xl animate-modal text-[#1C1B18]">
        <h4 className="text-[15px] font-bold text-[#0D1B3D] mb-1.5">
          We respect your privacy
        </h4>
        <p className="text-[12.5px] text-[#5B5A54] leading-relaxed mb-4">
          Cookies help us improve your experience, deliver personalized content, and analyze traffic. You can choose which cookies to allow by clicking <b>Customize</b>.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setModalOpen(true)}
            className="px-3.5 py-1.5 text-xs font-semibold text-[#14285A] bg-[#FAF6EF] hover:bg-[#F2E9D8] rounded-md border border-[#E4DCC9] transition-colors"
          >
            Customize
          </button>
          <button
            onClick={handleRejectAll}
            className="px-3.5 py-1.5 text-xs font-semibold text-[#5B5A54] hover:text-[#1C1B18] bg-transparent rounded-md transition-colors"
          >
            Reject All
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-1.5 text-xs font-semibold text-[#0D1B3D] bg-gradient-to-r from-[#D4A574] to-[#B8834A] rounded-md hover:brightness-105 transition-all shadow-sm ml-auto"
          >
            Accept All
          </button>
        </div>
      </div>

      {/* Preferences Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[310] flex items-center justify-center p-4 bg-[#0D1B3D]/65 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl animate-modal">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4DCC9]">
              <h3 className="text-lg font-bold text-[#0D1B3D]">
                Personalize Cookie Preferences
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 border-0 bg-transparent cursor-pointer text-xl p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-[13px] text-[#5B5A54] my-3 leading-relaxed">
              We use cookies to ensure smooth navigation and enable essential site functions. You can review detailed categories below.
            </p>

            <div className="space-y-3.5 mt-4">
              {/* Necessary */}
              <div className="p-3.5 bg-[#FAF6EF] rounded-xl border border-[#E4DCC9]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-[13.5px] text-[#0D1B3D]">Necessary Cookies</span>
                  <span className="text-[11px] font-bold text-[#B8834A] uppercase bg-[#EED3B0]/40 px-2 py-0.5 rounded">Always Active</span>
                </div>
                <p className="text-[12px] text-[#5B5A54]">
                  Necessary cookies enable essential site features like secure requests and navigation.
                </p>
              </div>

              {/* Functional */}
              <div className="p-3.5 bg-white rounded-xl border border-[#E4DCC9]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-[13.5px] text-[#0D1B3D]">Functional Cookies</span>
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                    className="accent-[#B8834A] w-4 h-4 cursor-pointer"
                  />
                </div>
                <p className="text-[12px] text-[#5B5A54]">
                  Functional cookies support features like media players and form enhancements.
                </p>
              </div>

              {/* Analytical */}
              <div className="p-3.5 bg-white rounded-xl border border-[#E4DCC9]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-[13.5px] text-[#0D1B3D]">Analytical Cookies</span>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="accent-[#B8834A] w-4 h-4 cursor-pointer"
                  />
                </div>
                <p className="text-[12px] text-[#5B5A54]">
                  Analytical cookies track visitor interactions, providing insights on metrics and speed.
                </p>
              </div>

              {/* Advertisement */}
              <div className="p-3.5 bg-white rounded-xl border border-[#E4DCC9]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-[13.5px] text-[#0D1B3D]">Advertisement Cookies</span>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="accent-[#B8834A] w-4 h-4 cursor-pointer"
                  />
                </div>
                <p className="text-[12px] text-[#5B5A54]">
                  Advertisement cookies deliver relevant promotional content and monitor campaigns.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6 pt-3 border-t border-[#E4DCC9]">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-xs font-semibold text-[#5B5A54] hover:text-[#1C1B18] bg-transparent border border-[#E4DCC9] rounded-lg transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#14285A] hover:bg-[#0D1B3D] rounded-lg transition-colors shadow-sm"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
