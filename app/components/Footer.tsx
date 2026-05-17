import Link from 'next/link';
import { Mail } from 'lucide-react';
import Logo from './Logo';

const footerLinks = {
  Layanan: [
    { label: 'Tata Kelola Vendor', href: '/layanan/vendor-risk-review' },
    { label: 'Kesiapan UU PDP', href: '/layanan/pdp-readiness-assessment' },
    { label: 'Orkestrasi Risiko', href: '/layanan/risk-orchestration-readiness' },
    { label: 'Semua Layanan', href: '/layanan' },
  ],
  Perusahaan: [
    { label: 'Tentang', href: '/tentang' },
    { label: 'Industri & layanan', href: '/layanan' },
    { label: 'Cara Kerja', href: '/layanan' },
    { label: 'Konsultasi', href: '#assessment' },
  ],
  Wawasan: [
    { label: 'Semua artikel', href: '/blog' },
    { label: 'Status Badan PDP 2026', href: '/blog/badan-pdp-2026' },
    { label: 'Pemantauan kebocoran data', href: '/kebocoran-data' },
    { label: 'DPO & keamanan siber', href: '/blog/peran-dpo-cybersecurity-2026' },
  ],
  Kontak: [
    { label: 'support@patuhdata.id', href: 'mailto:support@patuhdata.id' },
    { label: '+62 851 8306 4580', href: 'tel:+6285183064580' },
    { label: 'Jakarta, Indonesia', href: '#assessment' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo className="h-10" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Tata kelola data dan risiko vendor untuk institusi keuangan Indonesia—berbasis UU PDP dan
              praktik kepatuhan operasional.
            </p>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-slate-500">
              PatuhData bukan lembaga pengawas, bukan firma hukum, dan tidak mewakili otoritas regulator
              mana pun. Layanan bersifat konsultasi dan pendampingan operasional.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/patuhdata-id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:support@patuhdata.id"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} PT PatuhData Solusi Nusantara. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-900">
              Kebijakan Privasi
            </Link>
            <Link href="/cookies" className="text-slate-600 hover:text-slate-900">
              Kebijakan Cookie
            </Link>
            <Link href="/terms-conditions" className="text-slate-600 hover:text-slate-900">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
