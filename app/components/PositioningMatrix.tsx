'use client';

import FadeIn from './motion/FadeIn';

/** Category labels only — aligned to PatuhData positioning framework (no vendor names). */
const quadrants = [
  {
    label: 'Firma hukum',
    hint: 'Kedalaman legal · lintas industri',
    position: 'top-3 left-3 md:top-4 md:left-4',
  },
  {
    label: 'Penyedia teknologi',
    hint: 'Kedalaman teknis & AI · lintas industri',
    position: 'bottom-3 left-3 md:bottom-4 md:left-4',
  },
];

export default function PositioningMatrix() {
  return (
    <section className="border-b border-slate-200/80 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Kerangka positioning
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Spesifik sektor keuangan—di persimpangan regulasi dan operasi
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              PatuhData menempati posisi yang menggabungkan{' '}
              <strong className="font-semibold text-slate-800">kedalaman regulasi UU PDP</strong>{' '}
              dan{' '}
              <strong className="font-semibold text-slate-800">kerangka kepatuhan sektor finansial</strong>{' '}
              dengan{' '}
              <strong className="font-semibold text-slate-800">kontrol operasional yang dapat dieksekusi</strong>
              —untuk bank, BPR, fintech, dan institusi keuangan yang dituntut bukti oleh regulator serta mitra
              strategis.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                <span>
                  <strong className="font-medium text-slate-800">Kedalaman regulasi</strong> — gap
                  assessment, implikasi UU PDP, dan kesiapan pengawasan
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                <span>
                  <strong className="font-medium text-slate-800">Spesifik sektor keuangan</strong> —{' '}
                  kontrol, vendor, dan dokumentasi dalam bahasa institusi finansial
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                <span>
                  <strong className="font-medium text-slate-800">Eksekusi operasional</strong> —{' '}
                  remediation, audit trail, dan bukti yang dapat ditindaklanjuti tim Anda
                </span>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.08} direction="none">
            <div
              className="relative aspect-[4/3] max-w-md rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm md:mx-auto lg:ml-auto"
              aria-label="Kerangka positioning PatuhData: spesifik sektor keuangan, antara kedalaman legal dan teknis"
            >
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6">
                <div className="h-full w-px bg-slate-300" />
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6">
                <div className="h-px w-full bg-slate-300" />
              </div>

              <p className="absolute left-1/2 top-2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                ↑ Kedalaman legal
              </p>
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                ↓ Kedalaman teknis / AI
              </p>
              <p className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                Lintas industri
              </p>
              <p className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-[9px] font-bold uppercase tracking-widest text-brand-600">
                Spesifik finansial
              </p>

              {quadrants.map((q) => (
                <div key={q.label} className={`absolute max-w-[44%] text-slate-500 ${q.position}`}>
                  <p className="text-xs font-semibold text-slate-600">{q.label}</p>
                  <p className="mt-0.5 text-[10px] leading-snug">{q.hint}</p>
                </div>
              ))}

              <div className="absolute right-[16%] top-[40%] flex flex-col items-center">
                <span className="text-2xl text-brand-600" aria-hidden>
                  ★
                </span>
                <span className="mt-1 rounded-full bg-brand-600 px-2.5 py-0.5 text-[10px] font-bold text-white">
                  PatuhData
                </span>
                <p className="mt-1 max-w-[8rem] text-center text-[9px] leading-snug text-slate-600">
                  Posisi target
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
