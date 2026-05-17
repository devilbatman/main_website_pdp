'use client';

import { Building, Landmark, Smartphone } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const segments = [
  {
    icon: Landmark,
    title: 'Bank & BPR',
    description:
      'Kesiapan UU PDP, vendor core banking & payment, dokumentasi untuk due diligence dan pengawasan sektor finansial.',
  },
  {
    icon: Smartphone,
    title: 'Fintech & payment',
    description:
      'Gap assessment sebelum scale, DPA vendor, consent & retensi data nasabah—siap tinjauan mitra strategis.',
  },
  {
    icon: Building,
    title: 'Vendor ke institusi keuangan',
    description:
      'SaaS, KYC, cloud, dan outsourcer yang perlu membuktikan kontrol data kepada klien bank atau fintech.',
  },
];

export default function WhoWeServe() {
  return (
    <section className="section-padding bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Untuk siapa</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Dibangun untuk institusi keuangan &amp; ekosistemnya
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Kami tidak menawarkan solusi generik lintas industri—fokus pada konteks data nasabah, mitra, dan
            regulator sektor finansial.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {segments.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <article className="card-premium h-full p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
                  <item.icon className="h-6 w-6 text-slate-800" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
