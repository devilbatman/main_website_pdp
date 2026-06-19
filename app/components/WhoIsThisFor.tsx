'use client';

import { CheckCircle2, Building2, ShoppingCart, Megaphone, HeartPulse, ShieldCheck, Briefcase, Landmark, Layers, Wallet } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const targets = [
  {
    icon: Layers,
    title: 'Fintech & Financial Services',
    description: 'UU PDP alignment with OJK standards and partner due diligence for banks/multifinance.',
  },
  {
    icon: HeartPulse,
    title: 'Health-Tech & Medical',
    description: 'Strict compliance for high-risk specific data (medical records) carrying heavy statutory penalties.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Retail',
    description: 'Protect millions of customer transactions from data breaches and reputational damage.',
  },
  {
    icon: Building2,
    title: 'Tech Startups & B2B SaaS',
    description: 'Prove compliance standards (as a Data Processor) to investors and enterprise clients.',
  },
  {
    icon: Megaphone,
    title: 'Digital & Creative Agencies',
    description: 'Ensure data collection campaigns are secure to protect your corporate clients.',
  },
];

const frameworkFits = [
  'Organizations needing a managed, full-time external DPO-as-a-Service.',
  'Companies with internal DPOs seeking third-party validation (Independent Gap Assessment).',
  'Businesses requiring a structured, measurable compliance roadmap.',
  'Organizations prioritizing data security and user trust as a competitive advantage.',
];

export default function WhoIsThisFor() {
  return (
    <section id="who-is-this-for" className="section-padding bg-white text-[#1a202c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                Who We Serve
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Scalable Compliance for Your Business Size.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Whether you need full DPO-as-a-Service or an independent Gap Assessment for your internal legal team—we have the right framework.
              </p>
            </FadeIn>

            <div className="space-y-6">
              {targets.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1} className="flex gap-4 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <item.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.2} className="h-full">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-12 h-full flex flex-col justify-center relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 text-sky-100 opacity-50">
                <ShieldCheck className="w-64 h-64" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Framework is Ideal For:
                </h3>
                <p className="mt-3 text-slate-600">
                  Our productized approach prioritizes guaranteed outcomes, transparent pricing, and tactical execution.
                </p>

                <ul className="mt-8 space-y-4">
                  {frameworkFits.map((fit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-sky-600" />
                      <span className="text-slate-700 font-medium">{fit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
