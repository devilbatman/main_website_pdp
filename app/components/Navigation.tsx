'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import TrackedLink from './TrackedLink';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#framework', label: 'Framework' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Insights' },
  { href: '/tentang', label: 'About' },
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

  const onDark = darkHero && !scrolled;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        onDark
          ? 'border-b border-white/10 bg-ocean-950/30 backdrop-blur-xl'
          : scrolled
            ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl'
            : 'border-b border-transparent bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-[4.5rem]">
          <Logo className="h-9 sm:h-10 md:h-11" priority inverted={onDark} />

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  onDark
                    ? 'text-sky-100/90 hover:text-white'
                    : 'text-slate-600 hover:text-ocean-950'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <TrackedLink
              href="#assessment"
              eventName="cta_click"
              eventParams={{ location: 'navbar', label: 'book_assessment' }}
              className={
                onDark
                  ? 'btn-primary !py-2.5 !text-sm'
                  : 'btn-primary-dark !py-2.5 !text-sm'
              }
            >
              Book Assessment
            </TrackedLink>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-lg p-2 md:hidden ${
              onDark ? 'text-white hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'
            }`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`border-t md:hidden ${
            onDark
              ? 'border-white/10 bg-ocean-950/95 backdrop-blur-xl'
              : 'border-slate-200 bg-white/95 backdrop-blur-xl'
          }`}
        >
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                  onDark ? 'text-sky-100 hover:bg-white/10' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <TrackedLink
              href="#assessment"
              eventName="cta_click"
              eventParams={{ location: 'navbar_mobile', label: 'book_assessment' }}
              onClick={() => setIsOpen(false)}
              className={onDark ? 'btn-primary mt-2 w-full' : 'btn-primary-dark mt-2 w-full'}
            >
              Book Assessment
            </TrackedLink>
          </div>
        </div>
      )}
    </nav>
  );
}
