'use client';

import {
  ClipboardCheck,
  Database,
  ShieldAlert,
  UserCheck,
  Building2,
  ArrowRight
} from 'lucide-react';
import FadeIn from './motion/FadeIn';

const services = [
  {
    icon: ClipboardCheck,
    title: 'UU PDP Gap Assessment',
    hook: 'A comprehensive legal and operational audit of your current data processing frameworks to identify compliance vulnerabilities.',
    link: '/layanan/gap-assessment',
  },
  {
    icon: Database,
    title: 'ROPA Framework Construction',
    hook: 'Structured mapping and classification of your enterprise data lifecycle into a legally defensible Record of Processing Activities.',
    link: '/layanan/ropa',
  },
  {
    icon: ShieldAlert,
    title: 'Data Protection Impact Assessment (DPIA)',
    hook: 'Expert evaluation of high-risk processing activities, ensuring new products and integrations meet strict statutory requirements.',
    link: '/layanan/dpia',
  },
  {
    icon: UserCheck,
    title: 'Managed DPO-as-a-Service',
    hook: 'Retain fractional, certified Data Protection Officer expertise to independently oversee your corporate privacy roadmap and handle regulatory liaisons.',
    link: '/layanan/dpo-as-a-service',
  },
  {
    icon: Building2,
    title: 'Corporate Governance & Training',
    hook: 'Crafting internal data protection policies, vendor data processing agreements (DPAs), and delivering executive-level compliance training.',
    link: '/layanan/caas-platform',
  },
];

export default function FlagshipService() {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#00B4D8] mb-3">Advisory Pillars</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Enterprise RegTech Solutions
            </h3>
            <p className="mt-4 text-lg text-slate-600">
              End-to-end privacy frameworks engineered for scale, security, and full regulatory alignment.
            </p>
          </FadeIn>
        </div>

        {/* Responsive Grid with flex-wrap to center the last row perfectly */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <FadeIn 
              key={service.title} 
              delay={index * 0.1} 
              className="flex w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
            >
              <article className="group flex flex-col w-full rounded-2xl bg-white p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#00B4D8]/30 hover:-translate-y-1">
                
                {/* Icon Slot */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B132B]/5 text-[#0B132B] transition-colors duration-300 group-hover:bg-[#00B4D8]/10 group-hover:text-[#00B4D8]">
                  <service.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0B132B] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {service.hook}
                  </p>
                </div>
                
                {/* Learn More Link */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B132B] transition-colors group-hover:text-[#00B4D8]"
                  >
                    Explore Service Framework
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
