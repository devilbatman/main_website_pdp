import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import { getServiceBySlug, services } from '@/data/services';

const siteUrl = 'https://patuhdata.id';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Layanan Tidak Ditemukan',
    };
  }

  const url = `${siteUrl}/layanan/${service.slug}`;

  return {
    title: `${service.title} untuk Bisnis Indonesia`,
    description: service.heroDescription,
    keywords: service.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.title} | PatuhData`,
      description: service.heroDescription,
      url,
      siteName: 'PatuhData',
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: '/patuhdata.png',
          width: 1200,
          height: 630,
          alt: `${service.title} - PatuhData`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | PatuhData`,
      description: service.heroDescription,
      images: ['/patuhdata.png'],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceUrl = `${siteUrl}/layanan/${service.slug}`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.heroDescription,
    provider: {
      '@type': 'ProfessionalService',
      name: 'PatuhData',
      url: siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    url: serviceUrl,
    serviceType: service.title,
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 pt-36 pb-24 text-white">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #3b82f6 0, #3b82f6 1px, transparent 0, transparent 50%)',
                backgroundSize: '10px 10px',
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/#layanan"
              className="mb-8 inline-flex items-center text-sm font-semibold text-blue-200 hover:text-white"
            >
              <span className="mr-2">&larr;</span>
              Kembali ke Solusi PatuhData
            </Link>

            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-blue-200">
                Solusi PatuhData
              </p>
              <h1 className="mb-8 text-4xl font-bold leading-tight md:text-6xl">
                {service.title}
              </h1>
              <p className="max-w-3xl text-xl leading-relaxed text-blue-100 md:text-2xl">
                {service.heroDescription}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#konsultasi"
                  className="rounded-lg bg-white px-8 py-4 text-center text-lg font-bold text-blue-800 shadow-lg transition-all hover:scale-105 hover:opacity-90"
                >
                  Schedule Assessment
                </Link>
                <Link
                  href="/#framework"
                  className="rounded-lg border-2 border-blue-300/40 bg-blue-600/30 px-8 py-4 text-center text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-blue-600/60"
                >
                  Lihat Framework
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                Overview
              </p>
              <h2 className="mb-6 text-3xl font-bold text-blue-950 md:text-5xl">
                Dari assessment menjadi implementasi yang bisa dijalankan.
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">
                {service.intro}
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8">
              <h3 className="mb-5 text-2xl font-bold text-blue-950">Cocok untuk</h3>
              <ul className="space-y-4">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                Scope
              </p>
              <h2 className="text-3xl font-bold text-blue-950 md:text-5xl">
                Apa yang akan Anda dapatkan
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {service.deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold leading-relaxed text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                  Process
                </p>
                <h2 className="mb-8 text-3xl font-bold text-blue-950 md:text-5xl">
                  Cara kami bekerja
                </h2>
                <div className="space-y-5">
                  {service.process.map((item, index) => (
                    <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                        {index + 1}
                      </span>
                      <p className="pt-2 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-blue-950 p-8 text-white">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-200">
                  Outcomes
                </p>
                <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                  Hasil yang dituju
                </h2>
                <ul className="space-y-5">
                  {service.outcomes.map((item) => (
                    <li key={item} className="flex gap-3 text-blue-50">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-300/20 text-blue-100">
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Siap menilai kesiapan operasional Anda?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-blue-100">
              Mulai dari assessment, temuan, sampai prioritas implementasi yang realistis untuk bisnis Anda.
            </p>
            <Link
              href="/#konsultasi"
              className="inline-flex rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-800 shadow-lg transition-all hover:scale-105 hover:opacity-90"
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
