import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import {
  getArticleBySlug,
  getLatestArticles,
  articles,
} from '@/data/blog';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import BlogCard from '../../components/BlogCard';
import type { Metadata } from 'next';
import { getArticleJsonLd, getArticleMetadata } from '@/lib/blogMetadata';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Artikel tidak ditemukan' };
  }

  return getArticleMetadata(article);
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const readTime = article.readTimeMinutes;
  const relatedArticles = getLatestArticles(4).filter((a) => a.slug !== slug).slice(0, 2);
  const articleJsonLd = getArticleJsonLd(article);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navigation />

      <main className="pt-28 md:pt-32">
        <article>
          <header className="border-b border-slate-200 bg-slate-50/80">
            <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <Link
                href="/blog"
                className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali ke wawasan
              </Link>

              <span className="inline-block rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700 shadow-sm ring-1 ring-slate-200/60">
                {article.category}
              </span>

              <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                {article.title}
              </h1>

              <p className="mt-5 text-xl leading-relaxed text-slate-600">{article.description}</p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>
                <span className="text-slate-300">·</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {readTime} menit baca · Mendalam
                </span>
                <span className="text-slate-300">·</span>
                <span>Editorial PatuhData</span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="relative -mt-8 mb-12 h-64 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card sm:h-80">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            <div
              className="article-prose pb-16"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <section className="mb-16 rounded-2xl border border-slate-200 bg-slate-50/80 p-8 text-center">
              <h2 className="text-xl font-semibold text-slate-900">
                Butuh bantuan kesiapan tata kelola?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                Butuh gap assessment UU PDP atau pendampingan tata kelola? Hubungi kami.
              </p>
              <Link href="/layanan/pdp-readiness-assessment" className="btn-primary mt-6 inline-flex">
                Gap Assessment UU PDP
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </section>
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <aside className="border-t border-slate-200 bg-slate-50/80 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight text-slate-900">
                Lanjut membaca
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedArticles.map((item) => (
                  <BlogCard key={item.slug} article={item} />
                ))}
              </div>
            </div>
          </aside>
        )}
      </main>

      <Footer />
    </div>
  );
}
