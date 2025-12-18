'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-blue-900/95 backdrop-blur-sm z-50 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-20 w-[420px]">
                <Image
                  src="/logo-transparent.png"
                  alt="Patuh Data Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#beranda" className="text-white hover:text-blue-300 transition-colors">
              Beranda
            </Link>
            <Link href="#layanan" className="text-white hover:text-blue-300 transition-colors">
              Layanan
            </Link>
            <Link href="#tentang" className="text-white hover:text-blue-300 transition-colors">
              Tentang Kami
            </Link>
            <Link
              href="#konsultasi"
              className="px-6 py-2 gradient-blue text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 border-t border-blue-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#beranda"
              className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="#layanan"
              className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Layanan
            </Link>
            <Link
              href="#tentang"
              className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="#konsultasi"
              className="block mx-3 my-2 px-4 py-2 gradient-blue text-white font-semibold rounded-md text-center"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
