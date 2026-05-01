"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-[600px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50 p-6 border border-gray-100 transition-transform duration-300 ease-in-out">
      <div className="flex items-center mb-3">
        <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-1 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
        </svg>
        <h3 className="text-lg font-bold text-[#1e3250]">Privasi Anda Begitu Penting</h3>
      </div>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        Kami menggunakan cookie untuk meningkatkan pengalaman Anda di Patuh Data. Dengan memilih &quot;Terima Semua,&quot; Anda menyetujui penggunaan semua cookie, serta memungkinkan kami menawarkan konten dan fitur yang sesuai dengan kebutuhan Anda. Pelajari lebih lanjut di{' '}
        <Link href="/cookies" className="font-bold text-[#0a2f5c] hover:underline">
          Kebijakan Cookie
        </Link>{' '}kami.
      </p>
      <div className="flex flex-row justify-between items-center gap-3">
        <button
          onClick={handleDecline}
          className="px-6 py-2.5 text-sm font-semibold text-[#0a2f5c] bg-white border border-[#0a2f5c] hover:bg-slate-50 rounded-md transition-colors"
        >
          Personalisasi
        </button>
        <button
          onClick={handleAccept}
          className="px-6 py-2.5 text-sm font-semibold text-white bg-[#0a2f5c] hover:bg-[#072144] rounded-md transition-colors"
        >
          Terima Semua
        </button>
      </div>
    </div>
  );
}
