'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getLatestArticles } from '@/data/blog';
import FadeIn from './motion/FadeIn';

const topics = [
  {
    tag: 'Vendor Governance',
    title: 'Why vendor readiness is the new enterprise gate',
    slug: 'strategi-kepatuhan-korporasi',
  },
  {
    tag: 'Operational Trust',
    title: 'From policy to proof: governance your auditors can follow',
    slug: 'audit-kepatuhan-pdp',
  },
  {
    tag: 'UU PDP Readiness',
    title: 'Badan PDP 2026: what to prepare before the agency is fully operational',
    slug: 'badan-pdp-2026',
  },
  {
    tag: 'Third-Party Risk',
    title: 'Data breaches in Indonesia: lessons for banks, fintech, and vendors',
    slug: 'kebocoran-data-indonesia-2026',
  },
];

export default function ThoughtLeadership() {
  const articles = getLatestArticles(4);
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
              Thought leadership
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ocean-950 md:text-4xl">
              Insights for governance leaders
            </h2>
            <p className="mt-3 text-slate-600">
              Practical perspectives on vendor trust, UU PDP, and operational readiness.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-brand-700 hover:text-brand-600"
          >
            View all insights →
          </Link>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {insights.map((item, i) => (
            <FadeIn key={item.tag} delay={i * 0.06}>
              <Link
                href={item.href}
                className="card-premium group flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-800">
                    {item.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all group-hover:text-brand-600" />
                </div>
                <h3 className="mt-4 flex-1 text-base font-semibold leading-snug text-ocean-950 group-hover:text-brand-800">
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
