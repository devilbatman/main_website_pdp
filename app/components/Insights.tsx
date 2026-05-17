'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { getHomepageFeaturedArticles } from '@/data/blog';
import BlogCard from './BlogCard';
import FadeIn from './motion/FadeIn';

export default function Insights() {
  const { featured, secondary } = getHomepageFeaturedArticles();

  return (
    <section id="insights" className="section-padding bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Wawasan
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Wawasan Tata Kelola &amp; Kesiapan
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Analisis mendalam tentang penegakan UU PDP, kepatuhan operasional, tata kelola vendor,
              dan apa yang harus dipersiapkan bisnis Indonesia pada 2026.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-brand-600"
          >
            Lihat semua artikel
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>

        {/* Featured article */}
        <FadeIn delay={0.05} className="mt-12">
          <Link
            href={`/blog/${featured.slug}`}
            className="card-premium group grid overflow-hidden md:grid-cols-2"
          >
            <div className="relative h-56 bg-slate-100 md:h-auto md:min-h-[280px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="mb-4 inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                Terbaru · {featured.category}
              </span>
              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {featured.date}
                </span>
                <span className="text-slate-300">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTimeMinutes} menit baca
                </span>
              </div>
              <h3 className="text-2xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-600 md:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-4 line-clamp-3 text-base leading-relaxed text-slate-600">
                {featured.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 group-hover:text-brand-600">
                Baca artikel lengkap
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </FadeIn>

        {/* Secondary articles */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondary.map((article, index) => (
            <FadeIn key={article.slug} delay={0.1 + index * 0.08}>
              <BlogCard article={article} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
