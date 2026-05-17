'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Layers } from 'lucide-react';
import { pdpDomains, totalPdpControls } from '@/data/pdpGapFramework';
import FadeIn from './motion/FadeIn';

interface PdpGapFrameworkProps {
  compact?: boolean;
  showLink?: boolean;
}

export default function PdpGapFramework({ compact = false, showLink = true }: PdpGapFrameworkProps) {
  const [openId, setOpenId] = useState<string | null>(compact ? null : pdpDomains[0]?.id ?? null);

  return (
    <section
      id="kerangka-52-kontrol"
      className={`scroll-mt-24 ${compact ? 'py-14 md:py-16' : 'section-padding bg-white'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className={compact ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Kerangka assessment
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {totalPdpControls} kontrol operasional UU PDP
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Matriks PatuhData untuk gap assessment institusi keuangan—dari tata kelola hingga vendor,
            keamanan, dan bukti audit. Bukan checklist resmi regulator; diselaraskan prinsip UU PDP dan
            praktik governance di lingkungan ISO 27001.
          </p>
          {showLink && compact && (
            <Link
              href="/layanan/pdp-readiness-assessment#kerangka-52-kontrol"
              className="mt-4 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Lihat kerangka lengkap &amp; template →
            </Link>
          )}
        </FadeIn>

        <div className={`mt-10 ${compact ? 'max-h-[28rem] overflow-y-auto rounded-2xl border border-slate-200 p-2' : ''}`}>
          <div className="grid gap-3 lg:grid-cols-2">
            {pdpDomains.map((domain, i) => {
              const isOpen = openId === domain.id;
              return (
                <FadeIn key={domain.id} delay={compact ? 0 : i * 0.03}>
                  <div className="card-premium overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : domain.id)}
                      className="flex w-full items-center justify-between gap-3 p-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                          <Layers className="h-4 w-4 text-slate-700" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{domain.title}</p>
                          <p className="text-xs text-slate-500">{domain.controls.length} kontrol</p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <ul className="border-t border-slate-100 px-4 pb-4 pt-2">
                        {domain.controls.map((c) => (
                          <li
                            key={c.code}
                            className="flex gap-2 border-b border-slate-50 py-2 text-sm last:border-0"
                          >
                            <span className="shrink-0 font-mono text-[10px] text-brand-600">{c.code}</span>
                            <span className="text-slate-700">{c.title}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Setiap kontrol dinilai: memenuhi · partial · gap · tidak berlaku—dengan bukti dan owner yang
          ditindaklanjuti.
        </p>
      </div>
    </section>
  );
}
