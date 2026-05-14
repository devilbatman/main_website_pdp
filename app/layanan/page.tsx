import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import { services } from '@/data/services';

const siteUrl = 'https://patuhdata.id';

export const metadata: Metadata = {
  title: 'Layanan Operational Data Governance',
  description:
    'Layanan PatuhData untuk PDP Readiness Assessment, Operational Data Governance, AI Governance Readiness, Vendor Risk Review, dan Advisory & Retainer.',
  alternates: {
    canonical: `${siteUrl}/layanan`,
  },
  openGraph: {
    title: 'Layanan Operational Data Governance | PatuhData',
    description:
      'Pilih layanan PatuhData untuk assessment, temuan, dan implementasi tata kelola data yang praktis.',
    url: `${siteUrl}/layanan`,
    siteName: 'PatuhData',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/patuhdata.png',
        width: 1200,
        height: 630,
        alt: 'Layanan PatuhData',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Layanan Operational Data Governance | PatuhData',
    description:
      'Layanan assessment dan implementasi tata kelola data untuk bisnis modern di Indonesia.',
    images: ['/patuhdata.png'],
  },
};

export default function ServicesLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 pt-36 pb-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-blue-200">
              Solusi PatuhData
            </p>
            <h1 className="mb-8 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Layanan operational data governance untuk bisnis modern.
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-blue-100 md:text-2xl">
              Dari assessment, temuan, prioritas, hingga implementasi proses yang membantu organisasi lebih siap menghadapi regulasi data.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/layanan/${service.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl"
                >
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                    Layanan
                  </p>
                  <h2 className="mb-4 text-2xl font-bold text-blue-950 group-hover:text-blue-600">
                    {service.title}
                  </h2>
                  <p className="mb-8 leading-relaxed text-slate-700">
                    {service.heroDescription}
                  </p>
                  <span className="font-bold text-blue-600">
                    Pelajari layanan <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-bold text-blue-950 md:text-5xl">
              Butuh arahan layanan yang paling tepat?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-slate-700">
              Ceritakan kondisi organisasi Anda, lalu kami bantu tentukan prioritas assessment dan implementasi.
            </p>
            <Link
              href="/#konsultasi"
              className="inline-flex rounded-lg bg-blue-700 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-800"
            >
              Schedule Assessment
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
