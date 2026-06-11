'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import TrackedLink from './TrackedLink';

const navLinks = [
  { href: '/layanan', label: 'Layanan' },
  { href: '#framework', label: 'Our Framework' },
  { href: '/blog', label: 'Insights' },
];

interface NavigationProps {
  darkHero?: boolean;
}

export default function Navigation({ darkHero = false }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-[#f8f9fa]/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-[4.5rem]">
          <Logo className="h-9 sm:h-10 md:h-11" priority inverted={false} />

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#0a2540] hover:text-[#0069c7] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <TrackedLink
              href="#assessment"
              eventName="cta_click"
              eventParams={{ location: 'navbar', label: 'discuss_assessment_scope' }}
              className="btn-primary !py-2.5 !px-5 !text-sm font-semibold flex items-center gap-1.5"
            >
              Discuss Scope <span className="text-xs">→</span>
            </TrackedLink>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-[#0a2540] hover:bg-slate-100 hover:text-[#0069c7] md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#0a2540] hover:bg-slate-50 hover:text-[#0069c7]"
              >
                {link.label}
              </Link>
            ))}
            <TrackedLink
              href="#assessment"
              eventName="cta_click"
              eventParams={{ location: 'navbar_mobile', label: 'discuss_assessment_scope' }}
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-2 w-full flex items-center justify-center gap-1.5"
            >
              Discuss Scope <span>→</span>
            </TrackedLink>
          </div>
        </div>
      )}
    </nav>
  );
}
