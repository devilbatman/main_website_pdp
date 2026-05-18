'use client';

import { Eye, FileCheck, ShieldCheck, Users } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const challenges = [
  {
    icon: Eye,
    title: 'Vendor Risk Visibility',
    description:
      'See how third parties handle data and controls—before procurement, audits, or enterprise reviews stall.',
  },
  {
    icon: ShieldCheck,
    title: 'Procurement Confidence',
    description:
      'Give buyers structured evidence of governance maturity—not promises buried in slide decks.',
  },
  {
    icon: FileCheck,
    title: 'UU PDP Readiness',
    description:
      'Move from policy to operational proof—controls your teams run and stakeholders can verify.',
  },
  {
    icon: Users,
    title: 'Governance Accountability',
    description:
      'Clear owners, priorities, and remediation paths—one view of trust across vendors and operations.',
  },
];

export default function TrustChallenges() {
  return (
    <section id="why-trust" className="section-padding-sm scroll-mt-24 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            The challenge
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ocean-950 md:text-4xl">
            Why Operational Trust Matters
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Regulated ecosystems depend on confidence—in vendors, in data handling, and in how
            organizations prove governance every day.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <article className="card-premium group h-full p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-100">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-ocean-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
