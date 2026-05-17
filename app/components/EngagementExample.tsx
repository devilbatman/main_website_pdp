'use client';

import FadeIn from './motion/FadeIn';

const phases = [
  {
    week: 'Minggu 1',
    title: 'Scoping & kick-off',
    items: ['Workshop stakeholder', 'Inventaris vendor & alur data', 'NDA & akses dokumen'],
  },
  {
    week: 'Minggu 2–3',
    title: 'Assessment',
    items: ['Review kontrol & gap UU PDP', 'Wawancara PIC legal/IT/ops', 'Draft temuan prioritas'],
  },
  {
    week: 'Minggu 4',
    title: 'Serah & handover',
    items: ['Presentasi ke manajemen', 'Roadmap 90 hari', 'Register risiko & owner'],
  },
];

export default function EngagementExample() {
  return (
    <section className="section-padding bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Format engagement
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Contoh alur proyek Gap Assessment
          </h2>
          <p className="mt-4 text-slate-600">
            Kerangka tipikal 4 minggu untuk institusi keuangan menengah—durasi disesuaikan kompleksitas
            proses dan jumlah vendor.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {phases.map((phase, i) => (
            <FadeIn key={phase.week} delay={i * 0.08}>
              <article className="card-premium h-full p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{phase.week}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{phase.title}</h3>
                <ul className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600">
                      <span className="mr-2 text-slate-300">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
          Contoh kerangka kerja—bukan janji hasil regulasi. Ruang lingkup dan deliverable final ditetapkan
          dalam proposal tertulis sebelum kick-off.
        </p>
      </div>
    </section>
  );
}
