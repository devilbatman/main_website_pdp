import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Panduan Utama UU PDP 2026: Kepatuhan, Sanksi, dan Badan PDP | Patuh Data',
  description: 'Update Mei 2026: Memahami implementasi penuh UU No. 27 Tahun 2022. Pelajari status Badan PDP, sanksi denda 2% pendapatan tahunan, dan langkah mitigasi risiko hukum bagi perusahaan.',
  keywords: [
    'UU PDP 2026',
    'Update UU PDP',
    'Badan Perlindungan Data Pribadi',
    'Sanksi UU PDP',
    'Denda 2 persen UU PDP',
    'Compliance Data Pribadi',
    'Hukum Perlindungan Data Indonesia',
    'Kemkomdigi PDP',
    'Data Protection Officer Indonesia'
  ],
  openGraph: {
    title: 'Panduan Utama UU PDP 2026: Implementasi Penuh & Mitigasi Risiko',
    description: 'Masa transisi telah berakhir. Pelajari bagaimana Badan PDP 2026 dan Kemkomdigi melakukan pengawasan serta sanksi berat bagi ketidakpatuhan.',
    url: 'https://patuhdata.id/blog/uu-pdp',
    siteName: 'Patuh Data',
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2026-05-01T00:00:00.000Z',
    authors: ['Patuh Data Legal Team'],
  },
};

export default function BlogUUPDP() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'UU PDP 2026: Panduan Komprehensif Implementasi dan Penegakan Hukum',
    description: 'Analisis mendalam implementasi penuh UU No. 27 Tahun 2022 per Mei 2026, termasuk pembentukan Badan PDP dan rincian sanksi administratif bagi korporasi.',
    image: 'https://patuhdata.id/logo-transparent.png',
    author: {
      '@type': 'Organization',
      name: 'Patuh Data',
      url: 'https://patuhdata.id',
    },
    datePublished: '2024-12-01T00:00:00.000Z',
    dateModified: '2026-05-01T00:00:00.000Z',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-50">
        {/* Progress Bar for Reading Status */}
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
              href="/"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Pusat Wawasan
            </Link>
            <div className="mb-6">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Analisis Hukum
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              UU PDP 2026: <span className="text-blue-400">Era Penegakan Hukum</span> Perlindungan Data di Indonesia
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Masa transisi telah resmi berakhir. Bagaimana status pembentukan Badan PDP 2026 dan apa dampaknya bagi strategi kepatuhan korporasi Anda?
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
                Terakhir diperbarui: 1 Mei 2026
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Waktu baca: 12 Menit
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white shadow-xl -mt-10 rounded-t-3xl relative z-20">
          {/* Executive Summary */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Ringkasan Eksekutif
            </h2>
            <p className="text-slate-700 leading-relaxed italic">
              "Per Mei 2026, UU No. 27 Tahun 2022 (UU PDP) telah sepenuhnya mengikat secara hukum bagi seluruh subjek hukum di Indonesia. Ketidaktahuan akan regulasi bukan lagi pembelaan yang sah. Dengan target pembentukan Badan PDP di tahun 2026 oleh Presiden, intensitas pengawasan kepatuhan kini berada pada level tertinggi sejak undang-undang ini diundangkan."
            </p>
          </div>

          {/* Konten 1: Status Terkini 2026 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-1.5 h-8 bg-blue-600 mr-4 rounded-full"></span>
              Update 2026: Status Penegakan & Badan PDP
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 leading-extra-relaxed">
              <p>
                Berdasarkan perkembangan terkini di awal tahun 2026, implementasi UU PDP telah memasuki fase krusial:
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-600">
                  <h3 className="text-blue-900 font-bold mb-3">Badan Pelindungan Data Pribadi</h3>
                  <p className="text-sm">
                    Target pembentukan **Badan PDP** diharapkan selesai pada tahun 2026 melalui Peraturan Presiden. Saat ini, fungsi pengawasan masih dijalankan secara transisi oleh **Kemkomdigi**.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl border-t-4 border-orange-500">
                  <h3 className="text-orange-900 font-bold mb-3">Audit Kepatuhan Proaktif</h3>
                  <p className="text-sm">
                    Pemerintah mulai melakukan audit kepatuhan proaktif terhadap Penyelenggara Sistem Elektronik (PSE) yang mengelola data pribadi skala besar dan sensitif.
                  </p>
                </div>
              </div>
              <p>
                <strong>Masa Transisi Telah Berakhir:</strong> Sejak 17 Oktober 2024, periode dua tahun yang diberikan pasal 74 UU PDP telah usai. Ini berarti seluruh sanksi, baik administratif maupun pidana, sudah dapat dijatuhkan secara penuh terhadap pelanggaran yang ditemukan.
              </p>
            </div>
          </section>

          {/* Konten 2: Sanksi Analisis Deep Dive */}
          <section className="mb-16 bg-slate-900 text-white rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <svg className="w-10 h-10 mr-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Ancaman Nyata: Sanksi Administratif 2%
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Pasal 57 UU PDP mengatur sanksi administratif yang paling ditakuti oleh korporasi: **Denda administratif hingga 2% dari pendapatan tahunan.**
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-black text-red-500 mr-6">2%</div>
                <div>
                  <h4 className="font-bold text-white">Denda Omzet Tahunan</h4>
                  <p className="text-slate-400 text-sm">Dihitung dari total pendapatan tahunan korporasi, bukan sekadar keuntungan bersih.</p>
                </div>
              </div>
              <div className="flex items-center bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-black text-blue-400 mr-6">Rp6M</div>
                <div>
                  <h4 className="font-bold text-white">Pidana Denda Maksimal</h4>
                  <p className="text-slate-400 text-sm">Sanksi pidana bagi individu atau pengurus korporasi yang sengaja melanggar hukum.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-red-500/10 rounded-2xl border border-red-500/20">
              <p className="text-sm leading-relaxed text-red-200">
                <strong>Catatan Legal:</strong> Selain denda, korporasi juga dapat dijatuhi pidana tambahan berupa perampasan keuntungan, pembekuan seluruh atau sebagian usaha, hingga pembubaran korporasi.
              </p>
            </div>
          </section>

          {/* Konten 3: Klasifikasi Data */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-1.5 h-8 bg-blue-600 mr-4 rounded-full"></span>
              Taksonomi Data Pribadi dalam UU PDP
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 font-bold text-slate-900">Data Pribadi Spesifik (Sensitif)</div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600">Memerlukan Penilaian Dampak (DPIA) dan standar keamanan tertinggi:</p>
                  <ul className="grid grid-cols-1 gap-2">
                    {['Data Kesehatan', 'Biometrik & Genetika', 'Catatan Kejahatan', 'Data Anak', 'Keuangan Pribadi'].map((item) => (
                      <li key={item} className="flex items-center text-slate-700 text-sm">
                        <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 font-bold text-slate-900">Data Pribadi Umum</div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600">Data yang bersifat mengidentifikasi secara umum:</p>
                  <ul className="grid grid-cols-1 gap-2">
                    {['Nama Lengkap', 'Jenis Kelamin', 'Kewarganegaraan', 'Agama', 'Status Perkawinan'].map((item) => (
                      <li key={item} className="flex items-center text-slate-700 text-sm">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Checklist Kepatuhan */}
          <section className="mb-16 bg-blue-600 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Quick Checklist Kepatuhan 2026</h2>
              <p className="mb-8 opacity-90 text-lg">Apakah korporasi Anda sudah memenuhi pilar-pilar berikut?</p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Penunjukan DPO (Data Protection Officer) yang kompeten',
                  'Penyusunan ROPA (Record of Processing Activities)',
                  'Implementasi DPIA (Data Protection Impact Assessment)',
                  'Pembaruan Privacy Policy & Terms of Use sesuai UU PDP',
                  'Sistem Pelaporan Pelanggaran Data (Data Breach Notification)',
                  'Mekanisme Pemenuhan Hak Subjek Data'
                ].map((check, idx) => (
                  <div key={idx} className="flex items-start bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center mr-4 shrink-0 font-bold text-xs">{idx + 1}</div>
                    <span className="text-sm font-medium">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Kesimpulan & CTA */}
          <section className="text-center py-10 border-t border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Jangan Menunda Kepatuhan</h2>
            <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Risiko denda 2% pendapatan tahunan dan kerusakan reputasi jauh lebih mahal dibanding investasi untuk kepatuhan hari ini.
            </p>
            <Link
              href="/#konsultasi"
              className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 hover:-translate-y-1"
            >
              Dapatkan Gap Assessment sekarang
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </section>
        </article>

        {/* Sidebar / More Articles (Simplified as Footer for now) */}
        <aside className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/badan-pdp-2026" className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all cursor-pointer block">
              <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Artikel Terkait</h4>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Update 2026: Pembentukan Badan Pelindungan Data Pribadi
              </h3>
            </Link>
            <Link href="/blog/strategi-kepatuhan-korporasi" className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all cursor-pointer block">
              <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Strategi Korporasi</h4>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                7 Langkah Taktis Mencapai Kepatuhan UU PDP Menyeluruh
              </h3>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
