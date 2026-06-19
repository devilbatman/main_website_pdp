'use client';

import { ArrowRight, ClipboardCheck, Scale, Shield, UserCheck } from 'lucide-react';
import Link from 'next/link';
import FadeIn from './motion/FadeIn';

const services = [
  {
    icon: Shield,
    title: 'Vendor Governance Readiness',
    summary:
      'When procurement demands proof, scattered spreadsheets fail the test. We assemble accountable vendor packages, security questionnaire responses, and risk scores aligned with how enterprise buyers evaluate you.',
    items: [
      'Tiered vendor assessments and remediation priorities',
      'Due diligence packages for RFPs and security reviews',
      'Security questionnaire responses that reflect actual conditions',
      'Vendor risk scoring and monitoring cadences',
    ],
    href: '/layanan/vendor-risk-review',
  },
  {
    icon: ClipboardCheck,
    title: 'UU PDP Gap Assessment',
    summary:
      'Operational gap assessment against UU PDP: find gaps in your data processes, controls, and vendors—with a clear remediation priority list.',
    items: [
      'Defensible data processing and flow mapping',
      'Access, retention, and minimization on live systems',
      'Breach & notification playbook aligned to legal deadlines',
      'Processor contracts and vendor data handling review',
    ],
    href: '/layanan/pdp-readiness-assessment',
  },
  {
    icon: Scale,
    title: 'Operational Risk & Governance',
    summary:
      'Governance that lives only in slide decks drifts when teams grow. We design workflows, ownership, and evidence libraries so audit questions are answered from operations—not last-minute improvisation.',
    items: [
      'Cross-functional governance workflows with clear owners',
      'Audit & management review readiness without panic',
      'Centralized evidence: decisions, approvals, and implementation proof',
      'Remediation tracking from finding to closure with accountability',
    ],
    href: '/layanan/risk-orchestration-readiness',
  },
  {
    icon: UserCheck,
    title: 'DPO as a Service',
    summary:
      'An outsourced Data Protection Officer to support ongoing personal data protection compliance—without hiring a full-time team.',
    items: [
      'Day-to-day governance and compliance guidance',
      'Data Protection Impact Assessment (DPIA) review',
      'Incident response and data subject request management',
      'Liaison with supervisory authorities',
    ],
    href: '/layanan/dpo-as-a-service',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Services
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for regulated industries
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Vendor governance, UU PDP compliance, and operational risk—designed for banks, fintech, health-tech, and enterprise SaaS.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <article className="card-premium flex h-full flex-col p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
                  <service.icon className="h-6 w-6 text-slate-800" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.summary}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors hover:text-brand-600"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
