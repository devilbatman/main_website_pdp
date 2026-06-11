'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getLatestArticles } from '@/data/blog';
import FadeIn from './motion/FadeIn';

const topics = [
  {
    tag: 'Tata Kelola Vendor',
    title: 'Mengapa kesiapan vendor menjadi gerbang utama enterprise',
    slug: 'strategi-kepatuhan-korporasi',
  },
  {
    tag: 'Kepatuhan Operasional',
    title: 'Dari kebijakan ke bukti: tata kelola yang dipahami pemangku kepentingan',
    slug: 'audit-kepatuhan-pdp',
  },
  {
    tag: 'Operasionalisasi UU PDP',
    title: 'Badan PDP 2026: persiapan sebelum lembaga beroperasi penuh',
    slug: 'badan-pdp-2026',
  },
  {
    tag: 'Risiko Pihak Ketiga',
    title: 'Kebocoran data di Indonesia: pelajaran untuk bank, fintech, dan multifinance',
    slug: 'kebocoran-data-indonesia-2026',
  },
  {
    tag: 'Tata Kelola AI',
    title: 'DPO dan keamanan siber 2026: peran operasional, bukan sekadar gelar',
    slug: 'peran-dpo-cybersecurity-2026',
  },
];

export default function ThoughtLeadership() {
  const articles = getLatestArticles(5);
  const insights = topics.map((topic, i) => {
    const article = articles.find((a) => a.slug === topic.slug) ?? articles[i];
    return { ...topic, href: `/blog/${article?.slug ?? topic.slug}`, date: article?.date };
  });

  return (
    <section id="insights" className="section-padding-sm scroll-mt-24 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Wawasan & Artikel
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ocean-950 md:text-4xl">
              Perspektif Kepatuhan Data Pribadi
            </h2>
            <p className="mt-3 text-slate-600">
              Pandangan strategis tentang tata kelola vendor, operasionalisasi UU PDP, dan kesiapan perusahaan.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-brand-700 hover:text-brand-600"
          >
            Lihat semua artikel →
          </Link>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {insights.map((item, i) => (
            <FadeIn key={item.tag} delay={i * 0.05}>
              <Link
                href={item.href}
                className="card-premium group flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-800">
                    {item.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:text-brand-600" />
                </div>
                <h3 className="mt-4 flex-1 text-sm font-semibold leading-snug text-ocean-950 group-hover:text-brand-800">
                  {item.title}
                </h3>
                {item.date && (
                  <p className="mt-4 text-xs text-slate-500">{item.date}</p>
                )}
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
