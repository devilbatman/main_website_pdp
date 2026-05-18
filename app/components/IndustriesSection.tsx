'use client';

import { Building2, Cloud, HeartPulse, Landmark, Layers } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const industries = [
  {
    icon: Landmark,
    title: 'Banking',
    description: 'Core banking, payments, and outsourcing with enterprise-grade vendor evidence.',
  },
  {
    icon: Layers,
    title: 'Fintech',
    description: 'Scale with confidence—PDP alignment and partner due diligence built in.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Sensitive data ecosystems with heightened governance and vendor scrutiny.',
  },
  {
    icon: Cloud,
    title: 'SaaS',
    description: 'Prove operational trust to regulated buyers before the procurement clock runs out.',
  },
  {
    icon: Building2,
    title: 'Digital Infrastructure',
    description: 'Platforms and integrators serving institutions that cannot accept governance gaps.',
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-padding-sm scroll-mt-24 bg-ocean-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/90">
            Industries
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Built for Regulated Ecosystems
          </h2>
          <p className="mt-4 text-lg text-sky-100/75">
            Banks, fintech, SaaS vendors, and enterprises serving regulated sectors—one governance
            language, operational clarity.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sky-200">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-sky-100/70">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
