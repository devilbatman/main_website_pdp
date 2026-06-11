'use client';

import { Building2, Cloud, HeartPulse, Landmark, Layers } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const industries = [
  {
    icon: Landmark,
    title: 'Perbankan',
    description: 'Bank KBMI 2/3, BPD, dan BPR yang membutuhkan kesiapan audit regulator dan tata kelola data.',
  },
  {
    icon: Layers,
    title: 'Fintech',
    description: 'Tumbuh dengan percaya diri—keselarasan UU PDP dan uji tuntas mitra dibangun sejak awal.',
  },
  {
    icon: HeartPulse,
    title: 'Multifinance',
    description: 'Perusahaan pembiayaan yang membutuhkan tata kelola data dan kesiapan audit OJK.',
  },
  {
    icon: Cloud,
    title: 'SaaS & Teknologi',
    description: 'Buktikan kepercayaan operasional kepada pembeli di industri yang diatur sebelum proses pengadaan dimulai.',
  },
  {
    icon: Building2,
    title: 'Infrastruktur Digital',
    description: 'Platform dan integrator yang melayani institusi yang tidak bisa menerima celah tata kelola.',
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-padding-sm scroll-mt-24 bg-ocean-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300/90">
            Industri
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Melayani Berbagai Industri
          </h2>
          <p className="mt-4 text-lg text-sky-100/75">
            Kepatuhan dan kesiapan tata kelola untuk bank, fintech, multifinance, dan vendor teknologi yang melayani mereka.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sky-200">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-sky-100/70">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
