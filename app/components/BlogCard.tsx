import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import type { Article } from '@/data/blog';

interface BlogCardProps {
  article: Article;
  className?: string;
}

export default function BlogCard({ article, className = '' }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`card-premium group flex h-full flex-col overflow-hidden ${className}`}
    >
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700 shadow-sm ring-1 ring-slate-200/60 backdrop-blur-sm">
          {article.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-1.5 text-xs text-slate-500">
          <Calendar className="h-3.5 w-3.5" />
          <span>{article.date}</span>
          <span className="text-slate-300">·</span>
          <span>{article.readTimeMinutes} menit baca</span>
        </div>

        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-600">
          {article.title}
        </h3>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
          {article.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-900 group-hover:text-brand-600">
          Baca artikel
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
