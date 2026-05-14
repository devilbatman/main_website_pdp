import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/blog';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wawasan PDP | Pusat Edukasi Perlindungan Data Pribadi',
  description: 'Kumpulan artikel, panduan, dan pembaruan terkini mengenai implementasi UU PDP di Indonesia.',
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Wawasan PDP</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Pusat Pengetahuan & <span className="text-blue-600">Update Regulasi</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Dapatkan informasi mendalam, panduan praktis, dan analisis hukum terkini untuk memastikan organisasi Anda tetap patuh terhadap UU No. 27 Tahun 2022.
            </p>
          </div>

          {/* Featured Article (Latest) */}
          {articles.length > 0 && (
            <div className="mb-20">
              <Link href={`/blog/${articles[0].slug}`} className="group relative block bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={articles[0].image}
                      alt={articles[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 md:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        {articles[0].category}
                      </span>
                      <span className="text-slate-400 text-xs font-medium">{articles[0].date}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight">
                      {articles[0].title}
                    </h2>
                    <p className="text-slate-600 text-lg mb-8 line-clamp-3 leading-relaxed">
                      {articles[0].description}
                    </p>
                    <div className="flex items-center text-blue-600 font-bold text-lg">
                      Baca Selengkapnya
                      <svg className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.slice(1).map((article) => (
              <Link 
                key={article.slug} 
                href={`/blog/${article.slug}`}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100 flex flex-col h-full"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-slate-400 text-xs mb-4 font-medium flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {article.date}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center text-blue-600 font-bold">
                    Lanjutkan Membaca
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Subscription Section */}
          <div className="mt-24 bg-blue-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Dapatkan Insight PDP Langsung ke Email Anda</h2>
              <p className="text-blue-100 mb-8">Jadilah yang pertama tahu tentang perubahan regulasi dan tips kepatuhan dari tim legal kami.</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Masukkan email Anda" 
                  className="flex-grow px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 outline-none focus:bg-white/20 transition-all"
                />
                <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-lg">
                  Berlangganan
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
