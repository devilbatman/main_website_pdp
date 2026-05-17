'use client';

import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from './motion/FadeIn';

const steps = [
  {
    number: '01',
    title: 'Tinjau',
    description:
      'Kami menilai kematangan tata kelola, eksposur vendor, dan risiko operasional.',
  },
  {
    number: '02',
    title: 'Prioritaskan',
    description: 'Kami mengidentifikasi kesenjangan kritis dan prioritas perbaikan.',
  },
  {
    number: '03',
    title: 'Operasionalkan',
    description: 'Kami menerapkan alur kerja dan kontrol tata kelola yang praktis.',
  },
  {
    number: '04',
    title: 'Pertahankan',
    description: 'Dukungan tata kelola berkelanjutan dan pemantauan kesiapan.',
  },
];

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Proses
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Cara Kami Bekerja
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Jalur terstruktur dari gap assessment hingga remediasi—dirancang untuk tim legal, IT, dan
            operasional institusi keuangan.
          </p>
        </FadeIn>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block"
            aria-hidden
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.1}>
                <div className="relative">
                  {index < steps.length - 1 && (
                    <div
                      className="absolute -right-3 top-8 hidden h-px w-6 bg-slate-200 lg:block"
                      aria-hidden
                    />
                  )}
                  <motion.div
                    className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
                    whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-soft">
                      <span className="text-sm font-semibold text-brand-600">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
