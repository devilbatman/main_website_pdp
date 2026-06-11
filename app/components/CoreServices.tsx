'use client';

import Link from 'next/link';
import { ArrowUpRight, ClipboardCheck, Map, Route, Search, UserCheck } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const services = [
  {
    icon: Search,
    title: 'Vendor Readiness Assessment',
    description:
      'Structured evaluation of vendor controls, data handling, and evidence—before enterprise due diligence.',
    href: '/layanan/vendor-risk-review',
  },
  {
    icon: ClipboardCheck,
    title: 'PDP Gap Analysis',
    description:
      'Operational mapping against UU PDP principles with prioritized gaps, owners, and remediation paths.',
    href: '/layanan/pdp-readiness-assessment',
  },
  {
    icon: Map,
    title: 'Governance Scoring',
    description:
      'Clear maturity scoring across vendor, process, and documentation—readable by legal, risk, and leadership.',
    href: '/layanan/operational-data-governance',
  },
  {
    icon: Route,
    title: 'Remediation Roadmap',
    description:
      'From findings to tracked closure—workflows, timelines, and audit-ready evidence your teams can run.',
    href: '/layanan/risk-orchestration-readiness',
  },
  {
    icon: UserCheck,
    title: 'DPO as a Service',
    description:
      'External Data Protection Officer to guide daily compliance and oversee DPIAs without full-time hires.',
    href: '/layanan/dpo-as-a-service',
  },
];

export default function CoreServices() {
  return (
    <section id="services" className="section-padding scroll-mt-24 gradient-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            What we deliver
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ocean-950 md:text-4xl">
            Core Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Enterprise-ready assessments and governance programs—designed for clarity, not complexity.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.06}>
              <Link
                href={service.href}
                className="card-premium group flex h-full flex-col p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-950 text-white shadow-soft transition-transform group-hover:scale-105">
                    <service.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ocean-950">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <span className="mt-6 text-sm font-medium text-brand-700 group-hover:text-brand-600">
                  Learn more
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Link href="/layanan" className="btn-secondary">
            View all services
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
