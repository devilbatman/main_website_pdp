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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 md:p-6 transition-transform duration-300 ease-in-out transform translate-y-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pemberitahuan Penggunaan Cookie</h3>
          <p className="text-sm text-gray-600">
            Kami menggunakan cookie untuk meningkatkan pengalaman Anda di situs web kami, menganalisis lalu lintas situs, dan menyajikan konten yang disesuaikan. Dengan mengklik "Terima", Anda menyetujui penggunaan cookie kami sesuai dengan{' '}
            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
              Kebijakan Privasi
            </Link>{' '}
            kami, sejalan dengan prinsip-prinsip pelindungan data pada UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).
          </p>
        </div>
        <div className="flex flex-row gap-3 w-full md:w-auto shrink-0 justify-end">
          <button
            onClick={handleDecline}
            className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-colors focus:ring-4 focus:ring-gray-200"
          >
            Tolak
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm focus:ring-4 focus:ring-blue-300"
          >
            Terima Cookie
          </button>
        </div>
      </div>
    </div>
  );
}
