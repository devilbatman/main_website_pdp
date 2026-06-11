import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import { services } from '@/data/services';
import { getServiceImagery } from '@/lib/serviceImagery';
import { createPageMetadata } from '@/lib/seo';

const DISPLAY_ORDER = [
  'pdp-readiness-assessment',
  'vendor-risk-review',
  'risk-orchestration-readiness',
  'operational-data-governance',
  'ai-governance-readiness',
  'advisory-retainer',
] as const;

export const metadata = createPageMetadata({
  title: 'Layanan',
  description:
    'Gap Assessment UU PDP, vendor readiness, tata kelola data, orkestrasi risiko, AI governance, dan advisory Patuhdata.',
  path: '/layanan',
  ogTitle: 'Layanan Patuhdata | Tata Kelola Data & Risiko',
});

export default function ServicesLandingPage() {
  const orderedServices = DISPLAY_ORDER.map(
    (slug) => services.find((s) => s.slug === slug)!
  ).filter(Boolean);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navigation />

      <main>
        <section className="gradient-mesh border-b border-slate-200/80 pt-28 pb-10 md:pt-36 md:pb-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600">
              Layanan
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-ocean-950 md:text-4xl">
              Tata kelola data &amp; risiko—langsung ke poinnya
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Mulai dari{' '}
              <Link
                href="/layanan/pdp-readiness-assessment"
                className="font-semibold text-brand-600 hover:underline"
              >
                Gap Assessment UU PDP
              </Link>
              , atau pilih program pendukung di bawah.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {orderedServices.map((service) => {
                const img = getServiceImagery(service.slug);
                const isCore = service.slug === 'pdp-readiness-assessment';
                return (
                  <Link
                    key={service.slug}
                    href={`/layanan/${service.slug}`}
                    className="group card-premium flex h-full flex-col overflow-hidden p-0"
                  >
                    <div className="relative aspect-[16/10] bg-slate-100">
                      <Image
                        src={img.hero}
                        alt={img.heroAlt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {isCore && (
                        <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
                          Inti
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="font-semibold text-ocean-950 group-hover:text-brand-700">
                        {service.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm text-slate-600 line-clamp-3">
                        {service.description}
                      </p>
                      <span className="mt-3 text-sm font-medium text-brand-600">
                        Selengkapnya →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200/80 py-12">
          <div className="mx-auto max-w-lg px-4 text-center">
            <p className="text-slate-600">Butuh bantuan memilih program?</p>
            <Link href="/#assessment" className="btn-primary-dark mt-4 inline-flex px-7 py-3">
              Ajukan konsultasi
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
