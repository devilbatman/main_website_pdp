import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import JsonLd from '@/app/components/JsonLd';
import ServicePageTracker from '@/app/components/ServicePageTracker';
import TrackedLink from '@/app/components/TrackedLink';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import { getServiceBySlug, services } from '@/data/services';
import { getServiceImagery } from '@/lib/serviceImagery';
import { getServiceCta } from '@/lib/serviceCta';
import PdpGapFramework from '@/app/components/PdpGapFramework';
import PdpTemplatesUseCases from '@/app/components/PdpTemplatesUseCases';
import { createPageMetadata, getServiceJsonLd } from '@/lib/seo';

const defaultFaqs = [
  {
    question: 'Apakah hanya laporan?',
    answer: 'Tidak. Deliverable dipakai tim Anda: prioritas, owner, dan bukti yang bisa ditindaklanjuti.',
  },
  {
    question: 'Berapa lama?',
    answer: 'Biasanya 2–4 minggu, tergantung ruang lingkup proses dan jumlah vendor.',
  },
];

const pdpFaqs = [
  ...defaultFaqs,
  {
    question: 'Apa itu 52 kontrol?',
    answer:
      'Matriks operasional Patuhdata yang memetakan tata kelola, consent, hak subjek, keamanan, insiden, vendor, retensi, transfer, dan dokumentasi—diselaraskan prinsip UU PDP. Bukan checklist resmi regulator.',
  },
  {
    question: 'Template apa yang disertakan?',
    answer:
      'Antara lain: register 52 kontrol, ROPA, gap register, vendor checklist, preliminary summary, roadmap 90 hari, dan indeks bukti audit—disesuaikan profil institusi Anda.',
  },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Layanan Tidak Ditemukan' };

  return {
    ...createPageMetadata({
      title: service.title,
      description: service.description,
      path: `/layanan/${service.slug}`,
      keywords: service.keywords,
    }),
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const imagery = getServiceImagery(slug);
  const cta = getServiceCta(slug);
  const isPdpGap = slug === 'pdp-readiness-assessment';
  const isFlagshipVendor = slug === 'vendor-risk-review';
  const pageTitle =
    isFlagshipVendor ? 'Vendor Trust Readiness Assessment' : service.title;
  const pageFaqs = isPdpGap ? pdpFaqs : defaultFaqs;
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={getServiceJsonLd({
          slug: service.slug,
          title: service.title,
          description: service.description,
        })}
      />
      <Navigation />
      <ServicePageTracker service={service.slug} />

      <main>
        <section className="gradient-mesh border-b border-slate-200/80 pt-28 pb-12 md:pt-36 md:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/layanan"
              className="mb-8 inline-flex text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              ← Semua layanan
            </Link>

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600">
                  Layanan Patuhdata
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                  {pageTitle}
                </h1>
                {isFlagshipVendor && (
                  <p className="mt-2 text-sm font-medium text-brand-700">{service.title}</p>
                )}
                <p className="mt-4 text-lg text-slate-600">{service.heroDescription}</p>
                <TrackedLink
                  href="/#assessment"
                  eventName="cta_click"
                  eventParams={{ location: 'service_hero', service: slug, label: cta.eventLabel }}
                  className="btn-primary mt-6 px-7 py-3.5"
                >
                  {cta.label}
                </TrackedLink>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <Image
                  src={imagery.hero}
                  alt={imagery.heroAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                {isPdpGap && (
                  <p className="mb-3 text-sm font-semibold text-brand-600">Layanan inti · Gap assessment</p>
                )}
                <p className="text-slate-600">{service.intro}</p>

                <h2 className="mt-10 text-lg font-semibold text-slate-900">Yang Anda dapatkan</h2>
                <ul className="mt-4 space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h2 className="mt-10 text-lg font-semibold text-slate-900">Cara kerja</h2>
                <ol className="mt-4 space-y-3">
                  {service.process.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm text-slate-600">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-900 text-xs font-semibold text-white">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                  <Image
                    src={imagery.challenge}
                    alt={imagery.challengeAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="card-premium p-6">
                  <h2 className="text-lg font-semibold text-slate-900">Hasil</h2>
                  <ul className="mt-4 space-y-2">
                    {service.outcomes.map((item) => (
                      <li key={item} className="text-sm text-slate-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-4">
                  {pageFaqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl border border-slate-200 p-4">
                      <p className="text-sm font-semibold text-slate-900">{faq.question}</p>
                      <p className="mt-1 text-sm text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {isPdpGap && (
          <>
            <PdpGapFramework />
            <PdpTemplatesUseCases />
          </>
        )}

        <section className="border-t border-slate-200/80 bg-white py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                  Program lain
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-ocean-950">
                  Lihat semua layanan Patuhdata
                </h2>
              </div>
              <Link
                href="/layanan"
                className="text-sm font-semibold text-brand-700 hover:text-brand-600"
              >
                Semua program →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/layanan/${s.slug}`}
                  className="card-premium block p-5 transition-colors hover:border-brand-200"
                >
                  <p className="text-sm font-semibold text-ocean-950">{s.title}</p>
                  <p className="mt-2 line-clamp-2 text-xs text-slate-600">{s.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50/80 py-14">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              {isPdpGap ? 'Butuh gap assessment UU PDP?' : 'Diskusikan kebutuhan Anda'}
            </h2>
            <p className="mt-3 text-slate-600">
              {isPdpGap
                ? 'Kami petakan gap operasional terhadap UU PDP dan prioritas perbaikan.'
                : 'Ceritakan ruang lingkup—kami sesuaikan pendekatan.'}
            </p>
            <TrackedLink
              href="/#assessment"
              eventName="cta_click"
              eventParams={{ location: 'service_bottom', service: slug, label: cta.eventLabel }}
              className="btn-primary mt-6 px-8 py-3.5"
            >
              {cta.label}
            </TrackedLink>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
