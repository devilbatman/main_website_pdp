'use client';

import { FileText, ShieldAlert } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const severityRows = [
  { label: 'KRITIS', filled: 3, total: 3, tone: 'rose', text: '3 area memerlukan perhatian segera' },
  { label: 'SEDANG', filled: 2, total: 3, tone: 'amber', text: '4 area perlu perbaikan dalam 90 hari' },
  { label: 'RENDAH', filled: 1, total: 3, tone: 'slate', text: '3 area untuk peningkatan jangka panjang' },
] as const;

const topRisks = [
  'DPO belum ditunjuk secara formal',
  'Tidak ada DPA dengan vendor core banking',
  'Mekanisme consent belum memenuhi Pasal 20 UU PDP',
];

const dotTone: Record<(typeof severityRows)[number]['tone'], string> = {
  rose: 'bg-rose-500',
  amber: 'bg-amber-500',
  slate: 'bg-slate-300',
};

function SeverityDots({
  filled,
  total,
  tone,
}: {
  filled: number;
  total: number;
  tone: (typeof severityRows)[number]['tone'];
}) {
  return (
    <span className="inline-flex gap-0.5" aria-hidden>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${i < filled ? dotTone[tone] : 'bg-slate-200 ring-1 ring-slate-200'}`}
        />
      ))}
    </span>
  );
}

export default function PreliminaryGapSummaryPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto">
      <FadeIn delay={0.08} direction="none">
        <div className="card-premium overflow-hidden p-0 shadow-card ring-1 ring-slate-200/80">
          <div className="flex items-start justify-between gap-3 border-b border-slate-200 bg-slate-50/90 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                <FileText className="h-4 w-4" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-wide text-slate-900">
                  PATUHDATA — PRELIMINARY GAP SUMMARY
                </p>
                <p className="text-[10px] text-slate-500">Contoh deliverable · bukan data klien aktual</p>
              </div>
            </div>
            <span className="shrink-0 rounded border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber-800">
              Rahasia
            </span>
          </div>

          <div className="space-y-4 px-4 py-3.5 font-mono text-[10px] leading-relaxed text-slate-700">
            <div className="grid gap-1 sm:grid-cols-2">
              <p>
                <span className="text-slate-400">Bank:</span>{' '}
                <span className="font-medium text-slate-800">Bank Digital XYZ</span>
              </p>
              <p className="sm:text-right">
                <span className="text-slate-400">Tanggal:</span>{' '}
                <span className="font-medium text-slate-800">15 Mei 2026</span>
              </p>
            </div>
            <p>
              <span className="text-slate-400">Dilakukan oleh:</span>{' '}
              <span className="font-medium text-slate-800">John Doe, PatuhData</span>
            </p>

            <div className="border-t border-dashed border-slate-200 pt-3">
              <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-slate-500">Temuan awal</p>
              <ul className="space-y-2">
                {severityRows.map((row) => (
                  <li key={row.label} className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span
                      className={`w-12 text-[9px] font-bold ${
                        row.tone === 'rose'
                          ? 'text-rose-600'
                          : row.tone === 'amber'
                            ? 'text-amber-700'
                            : 'text-slate-500'
                      }`}
                    >
                      {row.label}
                    </span>
                    <SeverityDots filled={row.filled} total={row.total} tone={row.tone} />
                    <span className="text-slate-600">{row.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-dashed border-slate-200 pt-3">
              <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-slate-500">
                Top 3 risiko yang ditemukan
              </p>
              <ol className="list-decimal space-y-1.5 pl-4 text-slate-700">
                {topRisks.map((risk) => (
                  <li key={risk} className="pl-0.5">
                    {risk}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5">
              <div className="mb-1 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-600">
                <ShieldAlert className="h-3 w-3" />
                Implikasi regulasi
              </div>
              <p className="text-[10px] leading-snug text-slate-600">
                Berdasarkan UU PDP dan ketentuan sektor finansial yang berlaku, kondisi ini berpotensi
                menimbulkan sanksi administratif, risiko reputasi, dan kewajiban pelaporan kepada otoritas
                terkait.
              </p>
            </div>

            <div className="rounded-lg border border-brand-200 bg-brand-50/60 px-3 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider text-brand-700">
                Rekomendasi langkah selanjutnya
              </p>
              <p className="mt-1 text-[10px] leading-snug text-slate-700">
                PatuhData merekomendasikan{' '}
                <span className="font-semibold text-slate-900">Full Gap Assessment (6 minggu)</span> untuk
                memetakan seluruh 52 kontrol dan menghasilkan remediation roadmap yang dapat langsung
                dieksekusi.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50/50 px-4 py-2.5">
            <p className="text-center text-[9px] leading-relaxed text-slate-500">
              Dokumen ini bersifat konfidensial dan hanya untuk penggunaan internal Bank Digital XYZ.
            </p>
            <p className="mt-2 text-center text-[10px] leading-relaxed text-slate-500">
              Ilustrasi format deliverable gap assessment awal—bukan laporan klien nyata.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
