'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import {
  breachStatusLabels,
  dataBreachTrackerMeta,
  getSortedBreaches,
  type BreachStatus,
} from '@/data/dataBreaches';

const statusStyles: Record<BreachStatus, string> = {
  dibantah: 'bg-slate-100 text-slate-700 ring-slate-200',
  diselidiki: 'bg-amber-50 text-amber-900 ring-amber-200',
  'klaim-belum-verifikasi': 'bg-orange-50 text-orange-900 ring-orange-200',
  'terkonfirmasi-sebagian': 'bg-red-50 text-red-800 ring-red-200',
};

const filters: { value: BreachStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'Semua' },
  { value: 'diselidiki', label: 'Diselidiki' },
  { value: 'dibantah', label: 'Dibantah' },
  { value: 'klaim-belum-verifikasi', label: 'Belum diverifikasi' },
  { value: 'terkonfirmasi-sebagian', label: 'Terkonfirmasi sebagian' },
];

export default function DataBreachTracker() {
  const [filter, setFilter] = useState<BreachStatus | 'all'>('all');
  const incidents = getSortedBreaches();

  const filtered = useMemo(
    () => (filter === 'all' ? incidents : incidents.filter((i) => i.status === filter)),
    [filter, incidents]
  );

  return (
    <>
      <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-sm leading-relaxed text-slate-600 md:p-6">
        <p>
          <strong className="text-slate-800">Kurasi lokal Patuhdata</strong> — insiden dan klaim
          kebocoran di Indonesia dari media &amp; instansi (belum tentu ada di HIBP). Terakhir diperbarui:{' '}
          <strong className="text-slate-800">{dataBreachTrackerMeta.lastUpdatedLabel}</strong>.
        </p>
        <p className="mt-3">{dataBreachTrackerMeta.disclaimer}</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              filter === f.value
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filtered.map((incident) => (
          <article
            key={incident.id}
            className="card-premium overflow-hidden"
            id={incident.id}
          >
            <div className="border-b border-slate-100 bg-white px-6 py-4 sm:flex sm:items-start sm:justify-between sm:gap-4">
              <div>
                <time
                  dateTime={incident.reportedAt}
                  className="text-xs font-medium uppercase tracking-wide text-slate-500"
                >
                  {new Date(incident.reportedAt).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
                <h2 className="mt-2 text-lg font-semibold text-slate-900">{incident.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{incident.sector}</p>
              </div>
              <span
                className={`mt-3 inline-flex shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 sm:mt-0 ${statusStyles[incident.status]}`}
              >
                {breachStatusLabels[incident.status]}
              </span>
            </div>

            <div className="space-y-4 p-6">
              <p className="text-sm leading-relaxed text-slate-600">{incident.summary}</p>
              <p className="text-sm text-slate-600">
                <strong className="font-medium text-slate-800">Catatan status:</strong>{' '}
                {incident.statusNote}
              </p>

              <dl className="grid gap-3 text-sm sm:grid-cols-2">
                {incident.estimatedRecords && (
                  <div>
                    <dt className="font-medium text-slate-500">Skala klaim</dt>
                    <dd className="text-slate-800">{incident.estimatedRecords}</dd>
                  </div>
                )}
                <div className={incident.estimatedRecords ? '' : 'sm:col-span-2'}>
                  <dt className="font-medium text-slate-500">Jenis data</dt>
                  <dd className="text-slate-800">{incident.dataTypes.join(' · ')}</dd>
                </div>
              </dl>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Sumber
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {incident.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-white"
                      >
                        {source.name}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-brand-50/80 p-4 text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  Implikasi sektor keuangan
                </p>
                <p className="mt-1 leading-relaxed">{incident.relevanceForFinance}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-slate-500">Tidak ada insiden pada filter ini.</p>
      )}

      <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-900 p-8 text-center text-white">
        <h2 className="text-xl font-semibold">Butuh kesiapan insiden &amp; UU PDP?</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-slate-300">
          Gap assessment memetakan kontrol insiden, vendor, dan bukti audit sebelum tekanan regulator
          atau mitra B2B meningkat.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/#assessment" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            Konsultasi
          </Link>
          <Link
            href="/blog/kebocoran-data-indonesia-2026"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Panduan respons 72 jam
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
