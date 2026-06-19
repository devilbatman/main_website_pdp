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
import { createPageMetadata, getServiceJsonLd, getBreadcrumbJsonLd } from '@/lib/seo';

const defaultFaqs = [
  {
    question: 'How long does this implementation take?',
    answer: 'Timelines vary by enterprise scale, but our standard sprints are designed to deliver actionable value within 2-4 weeks.',
  },
  {
    question: 'Do you provide the necessary documentation templates?',
    answer: 'Yes, all our engagements include access to our proprietary suite of enterprise-grade compliance templates.',
  },
];

const coreFaqs = [
  ...defaultFaqs,
  {
    question: 'Is this aligned specifically with UU PDP?',
    answer: 'Absolutely. Our frameworks are engineered from the ground up to address the specific requirements of Indonesia\'s UU No. 27/2022.',
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
  if (!service) return { title: 'Service Not Found' };

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
  const isCore = slug === 'gap-assessment' || slug === 'ropa';
  const pageFaqs = isCore ? coreFaqs : defaultFaqs;
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
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: 'Beranda', url: '/' },
          { name: 'Layanan', url: '/layanan' },
          { name: service.title, url: `/layanan/${service.slug}` },
        ])}
      />
      <Navigation />
      <ServicePageTracker service={service.slug} />

      <main>
        <section className="gradient-mesh border-b border-slate-200/80 pt-28 pb-12 md:pt-36 md:pb-16 bg-[#0B132B] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/layanan"
              className="mb-8 inline-flex text-sm font-medium text-slate-400 hover:text-white"
            >
              ← Back to All Services
            </Link>

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#00B4D8]">
                  PatuhData Pillar
                </p>
                <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-4 text-lg text-slate-300">{service.heroDescription}</p>
                <TrackedLink
                  href="/#assessment"
                  eventName="cta_click"
                  eventParams={{ location: 'service_hero', service: slug, label: cta.eventLabel }}
                  className="inline-flex items-center justify-center rounded-lg bg-[#00B4D8] hover:bg-[#48CAE4] mt-6 px-8 py-3.5 text-base font-semibold text-[#0B132B] transition-all duration-300"
                >
                  {cta.label}
                </TrackedLink>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
                <Image
                  src={imagery.hero}
                  alt={imagery.heroAlt}
                  fill
                  className="object-cover opacity-80 mix-blend-luminosity"
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
                <p className="text-slate-600 text-lg leading-relaxed">{service.intro}</p>

                <h2 className="mt-10 text-xl font-bold text-[#0B132B]">What You Receive</h2>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-base text-slate-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00B4D8]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h2 className="mt-10 text-xl font-bold text-[#0B132B]">Our Engagement Process</h2>
                <ol className="mt-4 space-y-4">
                  {service.process.map((step, i) => (
                    <li key={step} className="flex gap-4 text-base text-slate-600 items-start">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#0B132B] text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
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

                <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8">
                  <h2 className="text-xl font-bold text-[#0B132B]">Engagement Outcomes</h2>
                  <ul className="mt-4 space-y-3">
                    {service.outcomes.map((item) => (
                      <li key={item} className="text-base text-slate-600 flex gap-2">
                        <span className="text-[#00B4D8] font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-semibold text-[#0B132B] mb-2">Common Questions</h3>
                  {pageFaqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl border border-slate-200 p-5">
                      <p className="font-semibold text-[#0B132B]">{faq.question}</p>
                      <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200/80 bg-[#F8FAFC] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#00B4D8]">
                  Explore More
                </p>
                <h2 className="mt-2 text-3xl font-bold text-[#0B132B]">
                  Other Core Capabilities
                </h2>
              </div>
              <Link
                href="/layanan"
                className="text-sm font-semibold text-[#00B4D8] hover:underline"
              >
                View all pillars →
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/layanan/${s.slug}`}
                  className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-[#00B4D8]/30"
                >
                  <p className="font-bold text-[#0B132B] mb-2">{s.title}</p>
                  <p className="line-clamp-2 text-sm text-slate-600">{s.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold text-[#0B132B]">
              Ready to secure your enterprise?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Schedule a consultation to discuss your specific compliance requirements and regulatory challenges.
            </p>
            <TrackedLink
              href="/#assessment"
              eventName="cta_click"
              eventParams={{ location: 'service_bottom', service: slug, label: cta.eventLabel }}
              className="inline-flex items-center justify-center rounded-lg bg-[#00B4D8] hover:bg-[#48CAE4] mt-8 px-8 py-4 text-base font-semibold text-[#0B132B] transition-all duration-300"
            >
              Request a Consultation
            </TrackedLink>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
