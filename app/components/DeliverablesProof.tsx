'use client';

import { CheckCircle2 } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const deliverables = [
  'Matriks 52 kontrol UU PDP: status memenuhi / partial / gap + owner',
  'Preliminary gap summary (KRITIS · SEDANG · RENDAH)',
  'Template ROPA, gap register, vendor checklist, roadmap 90 hari',
  'Peta vendor & alur data (siapa memproses data apa)',
  'Remediation roadmap lintas legal, IT, dan operasi',
  'Indeks bukti audit siap due diligence & tinjauan mitra',
];

export default function DeliverablesProof() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Deliverable</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Apa yang Anda terima
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Setiap engagement dirancang agar tim legal, IT, dan operasional dapat{' '}
              <strong className="font-medium text-slate-800">langsung bertindak</strong>—bukan dokumen yang
              berakhir di laci.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Ilustrasi di hero menunjukkan format ringkasan gap awal; deliverable penuh disesuaikan ruang
              lingkup proyek.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <ul className="card-premium space-y-3 p-6 md:p-8">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
