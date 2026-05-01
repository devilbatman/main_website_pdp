'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-28 w-[500px]">
                <Image
                  src="/patuhdata.png"
                  alt="Patuh Data Logo"
                  fill
                  className="object-contain object-left scale-110 origin-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#beranda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Beranda
            </Link>
            <Link href="#layanan" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Layanan
            </Link>
            <Link href="#tentang" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Tentang Kami
            </Link>
            <Link href="/blog/uu-pdp" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Wawasan PDP
            </Link>
            <Link
              href="#konsultasi"
              className="px-6 py-2.5 gradient-blue text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
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
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <Link
              href="#beranda"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="#layanan"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Layanan
            </Link>
            <Link
              href="#tentang"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="/blog/uu-pdp"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Wawasan PDP
            </Link>
            <Link
              href="#konsultasi"
              className="block mx-3 mt-4 mb-2 px-4 py-3 gradient-blue text-white font-semibold rounded-lg text-center shadow-md"
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
