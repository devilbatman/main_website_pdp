import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';

interface LegalPageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, description, children }: LegalPageLayoutProps) {
  const lastUpdated = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-28 pb-20 md:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← Kembali ke beranda
          </Link>

          <header className="mb-10 border-b border-slate-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Informasi hukum</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>
            )}
            <p className="mt-4 text-sm text-slate-500">Terakhir diperbarui: {lastUpdated}</p>
          </header>

          <article className="legal-prose">{children}</article>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-200 pt-8 text-sm">
            <Link href="/privacy-policy" className="font-medium text-slate-600 hover:text-brand-600">
              Kebijakan Privasi
            </Link>
            <Link href="/cookies" className="font-medium text-slate-600 hover:text-brand-600">
              Kebijakan Cookie
            </Link>
            <Link href="/terms-conditions" className="font-medium text-slate-600 hover:text-brand-600">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
