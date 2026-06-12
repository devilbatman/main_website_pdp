'use client';

import { Building2, Network, ShieldCheck, FileText } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const readinessParameters = [
  {
    icon: Building2,
    title: 'Corporate Legal Structure',
    description: 'Operating as PT PatuhData Solusi Nusantara with full regulatory compliance and capital requirements for enterprise-tier vendor portals.',
  },
  {
    icon: Network,
    title: 'Banking Portal Compatibility',
    description: 'Ready for seamless integration into major banking e-procurement platforms, SAP Ariba, and rigorous background checks.',
  },
  {
    icon: ShieldCheck,
    title: 'Localized Data Governance',
    description: 'Our hybrid Compliance-as-a-Service (CaaS) platform fully aligns with OJK and Bank Indonesia IT risk guidelines, featuring local data residency.',
  },
  {
    icon: FileText,
    title: 'Enterprise Service Level Agreements (SLAs)',
    description: 'Backed by robust corporate liability framework, structured implementation timelines, and dedicated expert support.',
  },
];

export default function EnterpriseReadiness() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-widest text-[#00B4D8] mb-3">
              Procurement Readiness
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Enterprise-Grade Onboarding & Compliance Vetting
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              PT PatuhData Solusi Nusantara is fully structured to meet the rigorous administrative, legal, and risk management standards of Indonesia's financial sector.
            </p>
          </FadeIn>
        </div>

        {/* 4-Card Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {readinessParameters.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1} className="flex">
              <article className="flex-1 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8 transition-all duration-300 hover:shadow-lg hover:border-[#00B4D8]/30 group">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#0B132B] shadow-sm transition-colors duration-300 group-hover:bg-[#00B4D8]/10 group-hover:text-[#00B4D8]">
                  <item.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-[#0B132B] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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
