'use client';

import { Briefcase, FileStack } from 'lucide-react';
import { pdpTemplates, pdpUseCases } from '@/data/pdpGapFramework';
import FadeIn from './motion/FadeIn';

export default function PdpTemplatesUseCases() {
  return (
    <>
      <section id="template-gap-assessment" className="scroll-mt-24 section-padding bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Template</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Template gap assessment UU PDP
            </h2>
            <p className="mt-4 text-slate-600">
              Paket dokumen siap pakai tim Anda—disesuaikan ruang lingkup, diserahkan dalam format yang
              dapat dilanjutkan (spreadsheet, register, roadmap).
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pdpTemplates.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.04}>
                <article className="card-premium flex h-full flex-col p-5">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200/80">
                    <FileStack className="h-4 w-4 text-slate-700" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{t.name}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">{t.description}</p>
                  <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-brand-600">
                    {t.format}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
            Template disertakan dalam engagement Gap Assessment penuh. Konten disesuaikan profil institusi
            keuangan Anda—bukan dokumen generik tanpa konteks.
          </p>
        </div>
      </section>

      <section id="use-case" className="scroll-mt-24 section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Use case</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Kapan institusi keuangan membutuhkan ini
            </h2>
            <p className="mt-4 text-slate-600">
              Skenario umum di bank, BPR, fintech, dan vendor yang melayani sektor finansial.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {pdpUseCases.map((uc, i) => (
              <FadeIn key={uc.title} delay={i * 0.06}>
                <article className="card-premium h-full p-6 md:p-7">
                  <div className="mb-3 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-brand-600" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                      {uc.segment}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{uc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{uc.scenario}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Hasil tipikal
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {uc.outcomes.map((o) => (
                      <li key={o} className="flex gap-2 text-sm text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
