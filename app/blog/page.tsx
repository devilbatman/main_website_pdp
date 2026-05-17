import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { getLatestArticles } from '@/data/blog';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wawasan | Tata Kelola & Kesiapan UU PDP',
  description:
    'Artikel dan panduan praktis tentang UU PDP, tata kelola vendor, dan kepatuhan operasional untuk bisnis berkembang di Indonesia.',
};

export default function BlogIndex() {
  const articles = getLatestArticles();
  const [featured, ...rest] = articles;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-28 pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Wawasan
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Wawasan Tata Kelola &amp; Kesiapan
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Analisis mendalam, panduan praktis, dan update regulasi agar organisasi Anda tetap siap audit dan dipercaya mitra enterprise.
            </p>
          </div>

          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="card-premium group mb-14 block overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 overflow-hidden bg-slate-100 md:h-auto md:min-h-[320px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar className="h-3.5 w-3.5" />
                      {featured.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold leading-tight text-slate-900 transition-colors group-hover:text-brand-600 md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 line-clamp-3 text-base leading-relaxed text-slate-600">
                    {featured.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-brand-600">
                    Baca artikel
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
