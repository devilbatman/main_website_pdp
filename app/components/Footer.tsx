import Link from 'next/link';

interface FooterProps {
  variant?: 'full' | 'minimal';
}

export default function Footer({ variant = 'full' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === 'minimal') {
    return (
      <footer className="border-t border-slate-200/80 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-ocean-950">patuhdata.id</p>
            <p className="mt-1 text-xs text-slate-500">
              Operational trust &amp; vendor governance · Indonesia
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm sm:justify-end">
            <Link href="/faq" className="text-slate-600 transition-colors hover:text-brand-700">
              FAQ
            </Link>
            <a
              href="https://www.linkedin.com/company/patuhdata-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 transition-colors hover:text-brand-700"
            >
              LinkedIn
            </a>
            <a
              href="mailto:support@patuhdata.id"
              className="text-slate-600 transition-colors hover:text-brand-700"
            >
              support@patuhdata.id
            </a>
          </div>
          <p className="text-xs text-slate-400">
            &copy; {currentYear} PT PatuhData Solusi Nusantara
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="text-lg font-semibold text-ocean-950">PatuhData</p>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              Operational trust, vendor governance, and UU PDP readiness for regulated ecosystems.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/layanan" className="text-slate-600 hover:text-ocean-950">
              Services
            </Link>
            <Link href="/blog" className="text-slate-600 hover:text-ocean-950">
              Insights
            </Link>
            <Link href="/tentang" className="text-slate-600 hover:text-ocean-950">
              About
            </Link>
            <Link href="/faq" className="text-slate-600 hover:text-ocean-950">
              FAQ
            </Link>
            <a
              href="https://www.linkedin.com/company/patuhdata-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-ocean-950"
            >
              LinkedIn
            </a>
            <a href="mailto:support@patuhdata.id" className="text-slate-600 hover:text-ocean-950">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {currentYear} PT PatuhData Solusi Nusantara</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-slate-700">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-slate-700">
              Cookies
            </Link>
            <Link href="/terms-conditions" className="hover:text-slate-700">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
