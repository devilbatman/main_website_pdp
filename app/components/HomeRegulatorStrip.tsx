'use client';

import { Building2, FileCheck2, Shield } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const items = [
  {
    icon: Building2,
    title: 'Regulator-Aligned',
    text: 'We help companies align operations with UU PDP and audit readiness—not just policy text.',
  },
  {
    icon: FileCheck2,
    title: 'Evidence-Ready',
    text: 'Critical alerts, monitoring logs, and structured audit trails become your answer when regulators or partners demand proof of control.',
  },
  {
    icon: Shield,
    title: 'Practitioner-Led',
    text: 'Documentation, review cadences, and seamless integration with your existing IT governance and security stack.',
  },
];

export default function HomeRegulatorStrip() {
  return (
    <section id="mengapa" className="scroll-mt-24 border-y border-slate-200/80 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Provable compliance for your business
          </h2>
          <p className="mt-4 text-slate-600">
            We combine deep UU PDP expertise with operational controls that regulators and institutional partners can independently verify.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <article className="card-premium h-full p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
