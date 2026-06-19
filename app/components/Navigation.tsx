'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import TrackedLink from './TrackedLink';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
          ? 'border-b border-slate-800 bg-[#0B132B]/95 shadow-md backdrop-blur-md'
          : 'border-b border-transparent bg-[#0B132B] backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Logo className="h-9 sm:h-10 md:h-11" priority inverted={true} />

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            
            {/* Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              
              <div 
                className={`absolute left-0 top-full mt-2 w-72 rounded-xl border border-slate-700 bg-[#0B132B] p-2 shadow-2xl transition-all duration-200 ${
                  dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <Link href="/layanan/gap-assessment" className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
                  Gap Assessment
                </Link>
                <Link href="/layanan/ropa" className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
                  ROPA
                </Link>
                <Link href="/layanan/dpia" className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
                  DPIA
                </Link>
                <Link href="/layanan/dpo-as-a-service" className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
                  DPO-as-a-Service
                </Link>
                <Link href="/layanan/corporate-governance-training" className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
                  Corporate Governance & Training
                </Link>
              </div>
            </div>

            <Link href="#metodologi" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Methodology
            </Link>
            <Link href="#tentang-kami" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              About Us
            </Link>

            <TrackedLink
              href="#assessment"
              eventName="cta_click"
              eventParams={{ location: 'navbar', label: 'request_consultation' }}
              className="inline-flex h-10 items-center justify-center rounded bg-[#00B4D8] px-6 text-sm font-bold uppercase tracking-wider text-[#0B132B] transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] ml-4"
            >
              Request Consultation
            </TrackedLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white md:hidden transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-[#0B132B]/95 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-4 py-6">
            
            <div className="mb-4">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Services</p>
              <div className="space-y-1 pl-3 border-l-2 border-slate-800 ml-3">
                <Link href="/layanan/gap-assessment" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800">Gap Assessment</Link>
                <Link href="/layanan/ropa" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800">ROPA</Link>
                <Link href="/layanan/dpia" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800">DPIA</Link>
                <Link href="/layanan/dpo-as-a-service" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800">DPO-as-a-Service</Link>
                <Link href="/layanan/corporate-governance-training" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800">Corporate Governance & Training</Link>
              </div>
            </div>

            <Link
              href="#metodologi"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Methodology
            </Link>
            <Link
              href="#tentang-kami"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              About Us
            </Link>
            
            <div className="mt-6 px-3">
              <TrackedLink
                href="#assessment"
                eventName="cta_click"
                eventParams={{ location: 'navbar_mobile', label: 'request_consultation' }}
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded bg-[#00B4D8] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0B132B] hover:bg-white transition-colors"
              >
                Request Consultation
              </TrackedLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
