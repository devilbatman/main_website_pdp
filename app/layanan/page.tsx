import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import { services } from '@/data/services';
import { getServiceImagery } from '@/lib/serviceImagery';
import { createPageMetadata } from '@/lib/seo';

const DISPLAY_ORDER = [
  'gap-assessment',
  'ropa',
  'dpia',
  'dpo-as-a-service',
  'caas-platform',
] as const;

export const metadata = createPageMetadata({
  title: 'Layanan',
  description:
    'Gap Assessment UU PDP, ROPA, DPIA, DPO as a Service, dan platform kepatuhan CaaS dari Patuhdata.',
  path: '/layanan',
  ogTitle: 'Layanan Patuhdata | Enterprise RegTech Solutions',
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#00B4D8]">
              Layanan
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-ocean-950 md:text-4xl">
              Enterprise RegTech Solutions
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              End-to-end privacy frameworks engineered for scale, security, and full regulatory alignment. Mulai dari{' '}
              <Link
                href="/layanan/gap-assessment"
                className="font-semibold text-[#00B4D8] hover:underline"
              >
                UU PDP Gap Assessment
              </Link>
              , atau pilih program pendukung di bawah.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6">
              {orderedServices.map((service, index) => {
                const img = getServiceImagery(service.slug);
                const isCore = service.slug === 'gap-assessment';
                return (
                  <Link
                    key={service.slug}
                    href={`/layanan/${service.slug}`}
                    className="group card-premium flex flex-col overflow-hidden p-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
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
                        <span className="absolute left-3 top-3 rounded-full bg-[#00B4D8] px-2 py-0.5 text-[10px] font-semibold uppercase text-[#0B132B]">
                          Layanan Inti
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="font-semibold text-ocean-950 group-hover:text-[#00B4D8] transition-colors">
                        {service.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm text-slate-600 line-clamp-3">
                        {service.description}
                      </p>
                      <span className="mt-3 text-sm font-medium text-[#00B4D8]">
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
