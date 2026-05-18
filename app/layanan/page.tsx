import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import { services } from '@/data/services';
import { getServiceImagery } from '@/lib/serviceImagery';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Layanan',
  description:
    'Gap assessment UU PDP, tata kelola vendor, orkestrasi risiko, dan advisory—untuk kepatuhan regulator yang terbukti.',
  path: '/layanan',
  ogTitle: 'Layanan PatuhData | Tata Kelola Data & Risiko',
});

export default function ServicesLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <section className="gradient-mesh border-b border-slate-200/80 pt-28 pb-14 md:pt-36 md:pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-600">
              Layanan
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Tata kelola data &amp; risiko—langsung ke poinnya
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Mulai dari{' '}
              <Link href="/layanan/pdp-readiness-assessment" className="font-semibold text-brand-600 hover:underline">
                Gap Assessment UU PDP
              </Link>
              , atau pilih layanan pendukung di bawah.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const img = getServiceImagery(service.slug);
                const isPdp = service.slug === 'pdp-readiness-assessment';
                return (
                  <Link
                    key={service.slug}
                    href={`/layanan/${service.slug}`}
                    className={`group card-premium flex h-full flex-col overflow-hidden p-0 ${isPdp ? 'ring-2 ring-brand-500/30' : ''}`}
                  >
                    <div className="relative aspect-[16/10] bg-slate-100">
                      <Image
                        src={img.hero}
                        alt={img.heroAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {isPdp && (
                        <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-2.5 py-1 text-[10px] font-semibold uppercase text-white">
                          Layanan inti
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                        {service.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm text-slate-600">{service.description}</p>
                      <span className="mt-4 text-sm font-semibold text-slate-900 group-hover:text-brand-600">
                        Detail →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50/80 py-14">
          <div className="mx-auto max-w-xl px-4 text-center">
            <p className="text-slate-600">Tidak yakin layanan mana yang tepat?</p>
            <Link href="/#assessment" className="btn-primary mt-4 px-8 py-3.5">
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
