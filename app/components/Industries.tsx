'use client';

import {
  Briefcase,
  Cloud,
  Code2,
  CreditCard,
  Globe,
  Users,
} from 'lucide-react';
import FadeIn from './motion/FadeIn';

const industries = [
  { icon: Cloud, name: 'SaaS', description: 'Perusahaan product-led yang melaju ke akun enterprise.' },
  { icon: CreditCard, name: 'Vendor Fintech', description: 'Penyedia pembayaran dan jasa keuangan di bawah pengawasan ketat.' },
  { icon: Users, name: 'HR Tech', description: 'Platform payroll dan SDM yang menangani data karyawan sensitif.' },
  { icon: Briefcase, name: 'Outsourcing', description: 'BPO dan penyedia layanan terkelola dengan rantai vendor kompleks.' },
  { icon: Code2, name: 'Pengembangan Perangkat Lunak', description: 'Software house yang mengirimkan proyek untuk klien teregulasi.' },
  { icon: Globe, name: 'Layanan Digital', description: 'Agensi dan platform yang melayani pelanggan enterprise.' },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Industri
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Dirancang untuk Bisnis Digital Modern
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Program tata kelola yang disesuaikan untuk penyedia layanan digital Indonesia yang tumbuh
            pesat.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <FadeIn key={industry.name} delay={index * 0.06}>
              <article className="card-premium group flex items-start gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80 transition-all group-hover:bg-slate-900 group-hover:ring-slate-900">
                  <industry.icon
                    className="h-5 w-5 text-slate-700 transition-colors group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{industry.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {industry.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
