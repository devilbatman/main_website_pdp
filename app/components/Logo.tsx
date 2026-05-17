'use client';

import Image from 'next/image';
import Link from 'next/link';

const LOGO_WIDTH = 985;
const LOGO_HEIGHT = 341;

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export default function Logo({
  className = 'h-9 w-auto sm:h-10 md:h-11',
  priority = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`relative inline-flex shrink-0 items-center ${className}`}
      aria-label="PatuhData home"
    >
      <Image
        src="/logo.png"
        alt="PatuhData — Kedalaman regulasi. Kontrol terlindungi."
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="h-full w-auto object-contain object-left"
        priority={priority}
        sizes="(max-width: 768px) 180px, 220px"
      />
    </Link>
  );
}
