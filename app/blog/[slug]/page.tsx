import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '../../../data/blog';
import type { Metadata } from 'next';

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
  const article = articles.find((a) => a.slug === slug);
  
  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan',
    };
  }

  return {
    title: `${article.title} | Patuh Data`,
    description: article.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-blue-100 z-50">
        <div className="h-full bg-blue-600" style={{ width: '100%' }}></div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/#blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Pusat Wawasan
          </Link>
          <div className="mb-6">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            {article.description}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm border-t border-slate-700 pt-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 font-bold text-white">PD</div>
              <span>Oleh: <strong>Tim Legal Patuh Data</strong></span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {article.date}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white shadow-xl -mt-10 rounded-t-3xl relative z-20">
        <div className="relative h-96 w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div 
          className="prose prose-slate max-w-none text-slate-700 leading-extra-relaxed prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-strong:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA Section */}
        <section className="text-center py-16 mt-16 border-t border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Butuh Bantuan Kepatuhan?</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Konsultasikan kesiapan bisnis Anda terhadap regulasi PDP dengan tim ahli kami.
          </p>
          <Link
            href="/#konsultasi"
            className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 hover:-translate-y-1"
          >
            Mulai Konsultasi Gratis
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </section>
      </article>

      {/* Related Articles */}
      <aside className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Artikel Lainnya</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {articles
            .filter((a) => a.slug !== slug)
            .slice(0, 2)
            .map((item) => (
              <Link 
                key={item.slug}
                href={`/blog/${item.slug}`} 
                className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all cursor-pointer block hover:shadow-md"
              >
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">{item.category}</h4>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
        </div>
      </aside>
    </div>
  );
}
