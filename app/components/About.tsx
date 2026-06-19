'use client';

import Image from 'next/image';
import FadeIn from './motion/FadeIn';

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Operational trust infrastructure for Indonesia&apos;s digital economy
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Patuhdata partners with growing SaaS companies, fintech vendors, HR platforms, and digital service providers to operationalize governance—not just document it. We combine practitioner experience with structured workflows so your team can scale with confidence.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              From vendor risk assessments to UU PDP readiness and remediation tracking, we help you build the operational layer that enterprise buyers and regulators expect.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                <Image
                  src="/iso27001lead.png"
                  alt="Sertifikasi Lead Auditor ISO 27001 - Keamanan Informasi"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Led by certified practitioners</p>
                <p className="text-sm text-slate-600">
                  Lead Auditor ISO 27001 · Enterprise governance experience
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Focus', value: 'Operational Governance' },
                { label: 'Clients', value: 'Growing Digital Businesses' },
                { label: 'Region', value: 'Indonesia' },
                { label: 'Approach', value: 'Assess → Operate → Sustain' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
