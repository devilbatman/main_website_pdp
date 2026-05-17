import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import DataBreachTracker from '@/app/components/DataBreachTracker';
import HibpBreachList from '@/app/components/HibpBreachList';
import TrustedSourcesBar from '@/app/components/TrustedSourcesBar';
import { countByStatus, dataBreachIncidents } from '@/data/dataBreaches';
import { fetchIndonesiaHibpBreaches } from '@/lib/hibp';

const siteUrl = 'https://patuhdata.id';

export const metadata: Metadata = {
  title: 'Pemantauan Kebocoran Data Indonesia',
  description:
    'Daftar insiden kebocoran data Indonesia — Have I Been Pwned, media, dan threat intelligence. Dikurasi PatuhData untuk sektor keuangan.',
  alternates: { canonical: `${siteUrl}/kebocoran-data` },
  openGraph: {
    title: 'Pemantauan Kebocoran Data Indonesia | PatuhData',
    description:
      'Sumber terpusat: insiden terverifikasi HIBP + klaim & investigasi lokal — untuk bank, fintech, dan vendor.',
    url: `${siteUrl}/kebocoran-data`,
    type: 'website',
  },
};

export default async function KebocoranDataPage() {
  const hibpBreaches = await fetchIndonesiaHibpBreaches();
  const total = dataBreachIncidents.length;
  const investigating = countByStatus('diselidiki');
  const denied = countByStatus('dibantah');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-28 pb-20 md:pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← Beranda
          </Link>

          <header className="mb-10 border-b border-slate-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Pemantauan insiden
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Kebocoran Data Indonesia
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Satu halaman untuk insiden <strong className="font-medium text-slate-800">terverifikasi</strong>{' '}
              (Have I Been Pwned) dan <strong className="font-medium text-slate-800">klaim lokal</strong>{' '}
              yang sedang diselidiki—dengan tautan sumber asli dan implikasi untuk sektor keuangan.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 text-center">
                <dt className="text-2xl font-semibold text-emerald-900">{hibpBreaches.length}</dt>
                <dd className="mt-1 text-xs text-emerald-800">HIBP terverifikasi</dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-center">
                <dt className="text-2xl font-semibold text-slate-900">{total}</dt>
                <dd className="mt-1 text-xs text-slate-600">Klaim / insiden lokal</dd>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4 text-center">
                <dt className="text-2xl font-semibold text-amber-900">{investigating}</dt>
                <dd className="mt-1 text-xs text-amber-800">Diselidiki</dd>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-center">
                <dt className="text-2xl font-semibold text-slate-900">{denied}</dt>
                <dd className="mt-1 text-xs text-slate-600">Dibantah resmi</dd>
              </div>
            </dl>
          </header>

          <TrustedSourcesBar />

          <section className="mb-14">
            <h2 className="text-xl font-semibold text-slate-900">
              Terverifikasi — Have I Been Pwned
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Insiden berikut dikonfirmasi dan dikatalogkan oleh{' '}
              <a
                href="https://haveibeenpwned.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-600 hover:underline"
              >
                Have I Been Pwned
              </a>{' '}
              (Troy Hunt)—standar industri untuk breach yang sudah diverifikasi, bukan sekadar klaim
              media.
            </p>
            <div className="mt-6">
              <HibpBreachList breaches={hibpBreaches} />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Klaim &amp; insiden lokal (kurasi PatuhData)
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Berita Indonesia 2025–2026 yang mungkin belum masuk HIBP—dari media, pemerintah, dan
              komunitas keamanan siber.
            </p>
            <div className="mt-6">
              <DataBreachTracker />
            </div>
          </section>

          <p className="mt-10 text-center text-xs text-slate-500">
            Koreksi atau laporan insiden baru?{' '}
            <a href="mailto:support@patuhdata.id" className="font-medium text-brand-600 hover:underline">
              support@patuhdata.id
            </a>
            {' · '}
            <Link href="/blog/badan-pdp-2026" className="font-medium text-brand-600 hover:underline">
              Status Badan PDP
            </Link>
          </p>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
