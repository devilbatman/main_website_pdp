'use client';

import { Eye, FileCheck, ShieldCheck, Users } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const challenges = [
  {
    icon: Users,
    title: 'Vendor Risk',
    description:
      'Third parties expand your data footprint. Without structured readiness, procurement and audits stall.',
  },
  {
    icon: FileCheck,
    title: 'UU PDP Readiness',
    description:
      'Policy alone is not enough. Regulators and partners expect operational evidence—not paper compliance.',
  },
  {
    icon: ShieldCheck,
    title: 'Procurement Confidence',
    description:
      'Enterprise buyers demand proof. Vendors that cannot demonstrate governance lose deals and renewals.',
  },
  {
    icon: Eye,
    title: 'Governance Visibility',
    description:
      'Leaders need a single view of gaps, owners, and remediation—not scattered spreadsheets and slide decks.',
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
            Regulated ecosystems run on confidence—in vendors, in data handling, and in how
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
