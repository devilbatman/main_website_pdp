'use client';

import { Building2, Network, ShieldCheck, FileText } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const readinessParameters = [
  {
    icon: Building2,
    title: 'Corporate Legal Structure',
    description: 'Operating as PT PatuhData Solusi Nusantara with full regulatory compliance and capital adequacy for enterprise vendor portals.',
  },
  {
    icon: Network,
    title: 'Enterprise Procurement Compatibility',
    description: 'Ready for seamless integration into major corporate e-procurement platforms, SAP Ariba, and strict background checks.',
  },
  {
    icon: ShieldCheck,
    title: 'Localized Data Governance',
    description: 'Our frameworks fully align with UU PDP, Kominfo standards, and sector-specific risk guidelines featuring local data residency.',
  },
  {
    icon: FileText,
    title: 'Enterprise SLAs & DPO Support',
    description: 'Backed by a robust corporate liability framework, structured timelines, and dedicated expert DPO support.',
  },
];

export default function EnterpriseReadiness() {
  return (
    <section className="py-24 bg-sky-950 border-t border-sky-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-widest text-sky-300 mb-3">
              Enterprise Readiness
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Enterprise-Grade Onboarding & Compliance Vetting
            </h2>
            <p className="mt-4 text-lg text-sky-100/80 leading-relaxed">
              PT PatuhData Solusi Nusantara is fully structured to meet the rigorous legal and risk management standards of Indonesia's digital landscape.
            </p>
          </FadeIn>
        </div>

        {/* 4-Card Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {readinessParameters.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1} className="flex">
              <article className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:shadow-lg hover:border-sky-400/30 hover:bg-white/10 group backdrop-blur-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-300 shadow-sm transition-colors duration-300 group-hover:bg-sky-400 group-hover:text-white">
                  <item.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-sky-100/70 leading-relaxed">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
