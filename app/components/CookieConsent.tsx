'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    window.dispatchEvent(new Event('cookie-consent-updated'));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    window.dispatchEvent(new Event('cookie-consent-updated'));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl border border-slate-200 bg-white p-6 shadow-float md:left-8 md:right-auto md:max-w-md"
      role="dialog"
      aria-label="Cookie consent"
    >
      <h3 className="text-base font-semibold text-slate-900">We respect your privacy</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        We use cookies to improve your experience and understand how the site is used. Analytics cookies help us
        improve Patuhdata — only with your consent. Read our{' '}
        <Link href="/cookies" className="font-medium text-brand-600 hover:underline">
          Cookie Policy
        </Link>{' '}
        and{' '}
        <Link href="/privacy-policy" className="font-medium text-brand-600 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-3">
        <button
          type="button"
          onClick={handleDecline}
          className="btn-secondary flex-1 !py-2.5 !text-sm"
        >
          Decline analytics
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="btn-primary flex-1 !py-2.5 !text-sm"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
