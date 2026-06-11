import Link from 'next/link';
import Footer from '@/app/components/Footer';
import FounderCredibility from '@/app/components/FounderCredibility';
import Navigation from '@/app/components/Navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Tentang Patuhdata',
  description:
    'Konsultan tata kelola data untuk sektor keuangan Indonesia. Gap assessment UU PDP, vendor risk, dan kontrol operasional—PT Patuhdata Solusi Nusantara.',
  path: '/tentang',
});

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-28 pb-20 md:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="mb-8 inline-flex text-sm font-medium text-slate-600 hover:text-slate-900">
            ← Beranda
          </Link>

          <header className="mb-10 border-b border-slate-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Tentang</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Patuhdata
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Kami membantu institusi keuangan Indonesia membangun kepatuhan UU PDP yang dapat dibuktikan
              di operasi—bukan hanya di kebijakan.
            </p>
          </header>

          <div className="legal-prose space-y-8 text-slate-600">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Siapa kami</h2>
              <p>
                <strong className="text-slate-800">PT Patuhdata Solusi Nusantara</strong> (Patuhdata)
                adalah penyedia layanan konsultasi tata kelola data dan kesiapan kepatuhan operasional,
                dengan fokus pada bank, BPR, fintech, dan multifinance, multifinance, dan vendor yang melayani sektor finansial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Apa yang kami lakukan</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Gap assessment kesiapan UU PDP</li>
                <li>Tinjauan risiko vendor dan pihak ketiga</li>
                <li>Pendampingan tata kelola data operasional</li>
                <li>Orkestrasi risiko dan pelacakan remediasi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Apa yang bukan kami</h2>
              <p>
                Patuhdata bukan firma hukum, bukan lembaga pengawas, dan tidak mewakili otoritas regulator
                mana pun. Kami tidak memberikan opini hukum formal atau jaminan kelulusan pemeriksaan.
              </p>
            </section>
          </div>
        </div>

        <FounderCredibility />

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="legal-prose space-y-8 text-slate-600">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Kontak</h2>
              <p>
                Jakarta, Indonesia
                <br />
                <a href="mailto:support@patuhdata.id" className="font-medium text-brand-600 hover:underline">
                  support@patuhdata.id
                </a>
                <br />
                <a href="tel:+6285183064580" className="font-medium text-brand-600 hover:underline">
                  +62 851 8306 4580
                </a>
              </p>
            </section>
          </div>

          <div className="mt-10">
            <Link href="/#assessment" className="btn-primary px-7 py-3.5">
              Ajukan konsultasi
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
