'use client';

import { ExternalLink, ShieldCheck } from 'lucide-react';
import type { HibpBreach } from '@/lib/hibp';
import { formatPwnCount } from '@/lib/hibp';

interface Props {
  breaches: HibpBreach[];
}

export default function HibpBreachList({ breaches }: Props) {
  if (breaches.length === 0) {
    return (
      <p className="text-sm text-slate-600">
        Data Have I Been Pwned tidak dapat dimuat saat ini. Kunjungi langsung{' '}
        <a
          href="https://haveibeenpwned.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-600 hover:underline"
        >
          haveibeenpwned.com
        </a>
        .
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {breaches.map((breach) => (
        <article
          key={breach.name}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  HIBP terverifikasi
                </span>
                {breach.isSensitive && (
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                    Sensitif
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{breach.title}</h3>
              <p className="mt-0.5 text-sm text-slate-500">{breach.domain}</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold text-slate-900">{formatPwnCount(breach.pwnCount)} akun</p>
              <p className="text-slate-500">
                {new Date(breach.breachDate).toLocaleDateString('id-ID', {
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>

          <p className="mt-3 line-clamp-2 text-sm text-slate-600">{breach.description}</p>

          {breach.dataClasses.length > 0 && (
            <p className="mt-2 text-xs text-slate-500">
              <span className="font-medium text-slate-700">Data terdampak:</span>{' '}
              {breach.dataClasses.slice(0, 6).join(' · ')}
              {breach.dataClasses.length > 6 ? ' · …' : ''}
            </p>
          )}

          <a
            href={breach.hibpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline"
          >
            Detail di Have I Been Pwned
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </article>
      ))}

      <p className="text-xs text-slate-500">
        Data breach dikutip dari{' '}
        <a
          href="https://haveibeenpwned.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-600 hover:underline"
        >
          Have I Been Pwned
        </a>{' '}
        (Troy Hunt). Diperbarui otomatis setiap 24 jam. Hanya insiden yang relevan untuk ekosistem
        Indonesia (domain .id &amp; layanan populer di Indonesia).
      </p>
    </div>
  );
}
