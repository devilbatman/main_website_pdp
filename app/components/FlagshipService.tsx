'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  Map,
  Route,
  Search,
} from 'lucide-react';
import FadeIn from './motion/FadeIn';
import TrackedLink from './TrackedLink';

const deliverables = [
  {
    icon: Search,
    title: 'Governance Assessment',
    description: 'Baseline maturity across policies, ownership, and operational controls.',
  },
  {
    icon: ClipboardCheck,
    title: 'PDP Gap Analysis',
    description: 'Operational mapping against UU PDP principles with prioritized gaps.',
  },
  {
    icon: BarChart3,
    title: 'Operational Risk Review',
    description: 'Structured view of vendor, process, and data-handling risks.',
  },
  {
    icon: Map,
    title: 'Governance Scoring',
    description: 'Clear readiness scores readable by legal, risk, and leadership.',
  },
  {
    icon: Route,
    title: 'Remediation Roadmap',
    description: 'Prioritized improvements with owners, timelines, and evidence paths.',
  },
];

const processSteps = [
  { step: '01', label: 'Scope & context' },
  { step: '02', label: 'Assess & evidence' },
  { step: '03', label: 'Score & gaps' },
  { step: '04', label: 'Roadmap' },
  { step: '05', label: 'Enterprise-ready' },
];

export default function FlagshipService() {
  return (
    <section id="flagship" className="section-padding scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Flagship program
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ocean-950 md:text-4xl">
              Vendor Trust Readiness Assessment
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A structured operational trust review designed for vendors serving regulated industries
              and enterprise ecosystems.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Your primary entry point for enterprise procurement, due diligence, and UU PDP
              alignment—delivered with clarity your stakeholders can act on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedLink
                href="#assessment"
                eventName="cta_click"
                eventParams={{ location: 'flagship', label: 'discuss_assessment_scope' }}
                className="btn-primary-dark gap-2"
              >
                Discuss Assessment Scope
                <ArrowRight className="h-4 w-4" />
              </TrackedLink>
              <Link href="/layanan" className="btn-secondary">
                Lihat semua program
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-brand-50/30 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                Assessment flow
              </p>
              <div className="mt-6 grid grid-cols-5 gap-2">
                {processSteps.map((item, i) => (
                  <div key={item.step} className="relative flex flex-col items-center text-center">
                    {i > 0 && (
                      <div
                        className="absolute -left-1 top-5 hidden h-px w-[calc(50%+0.25rem)] -translate-x-full bg-brand-200 sm:block"
                        aria-hidden
                      />
                    )}
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ocean-950 text-xs font-bold text-white shadow-soft">
                      {item.step}
                    </div>
                    <p className="mt-3 text-[10px] font-medium leading-snug text-slate-600 sm:text-[11px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {deliverables.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <article className="card-premium h-full p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-ocean-950 text-white">
                  <item.icon className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold text-ocean-950">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
