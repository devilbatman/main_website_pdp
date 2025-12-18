import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UU PDP: Panduan Lengkap Undang-Undang Perlindungan Data Pribadi Indonesia | Patuh Data',
  description: 'Memahami UU Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi Indonesia. Pelajari risiko, sanksi hingga Rp 6 miliar, dan mengapa perusahaan Anda memerlukan konsultan perlindungan data.',
  keywords: [
    'UU PDP',
    'Undang-Undang Perlindungan Data Pribadi',
    'UU 27 Tahun 2022',
    'perlindungan data pribadi Indonesia',
    'sanksi UU PDP',
    'konsultan data pribadi',
    'kepatuhan data pribadi',
    'GDPR Indonesia',
    'DPO Indonesia',
    'Patuh Data'
  ],
  openGraph: {
    title: 'UU PDP: Panduan Lengkap Perlindungan Data Pribadi Indonesia',
    description: 'Memahami UU Nomor 27 Tahun 2022 dan dampaknya terhadap bisnis Anda. Sanksi hingga Rp 6 miliar dan 6 tahun penjara untuk pelanggaran.',
    url: 'https://patuhdata.id/blog/uu-pdp',
    siteName: 'Patuh Data',
    locale: 'id_ID',
    type: 'article',
    publishedTime: '2024-12-01T00:00:00.000Z',
    authors: ['Patuh Data'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UU PDP: Panduan Lengkap Perlindungan Data Pribadi Indonesia',
    description: 'Memahami UU Nomor 27 Tahun 2022 dan dampaknya terhadap bisnis Anda. Pelajari risiko dan sanksi UU PDP.',
  },
  alternates: {
    canonical: 'https://patuhdata.id/blog/uu-pdp',
  },
};

export default function BlogUUPDP() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'UU PDP: Panduan Lengkap Undang-Undang Perlindungan Data Pribadi Indonesia',
    description: 'Memahami UU Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi Indonesia. Pelajari risiko, sanksi hingga Rp 6 miliar, dan mengapa perusahaan Anda memerlukan konsultan perlindungan data.',
    image: 'https://patuhdata.id/logo-transparent.png',
    author: {
      '@type': 'Organization',
      name: 'Patuh Data',
      url: 'https://patuhdata.id',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Patuh Data',
      logo: {
        '@type': 'ImageObject',
        url: 'https://patuhdata.id/logo-transparent.png',
      },
    },
    datePublished: '2024-12-01T00:00:00.000Z',
    dateModified: '2024-12-01T00:00:00.000Z',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://patuhdata.id/blog/uu-pdp',
    },
    keywords: 'UU PDP, Undang-Undang Perlindungan Data Pribadi, UU 27 Tahun 2022, perlindungan data pribadi Indonesia, sanksi UU PDP',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            UU PDP: Panduan Lengkap Undang-Undang Perlindungan Data Pribadi Indonesia
          </h1>
          <p className="text-xl text-blue-100">
            Memahami UU Nomor 27 Tahun 2022 dan dampaknya terhadap bisnis Anda
          </p>
          <div className="mt-6 flex items-center text-blue-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Dipublikasikan: Desember 2024
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Pada 17 Oktober 2022, Indonesia mengesahkan <strong>UU Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi</strong>,
              menandai era baru dalam perlindungan data di Indonesia. Undang-undang ini memberikan kerangka hukum yang komprehensif
              untuk melindungi data pribadi setiap warga negara Indonesia.
            </p>
          </div>
        </section>

        {/* Apa itu UU PDP */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Apa itu UU PDP?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            UU PDP adalah regulasi yang mengatur tentang pemrosesan data pribadi dalam berbagai kegiatan,
            baik yang dilakukan secara elektronik maupun non-elektronik. Undang-undang ini bertujuan untuk:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">Melindungi hak fundamental setiap orang atas perlindungan data pribadi</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">Mengatur hak dan kewajiban dalam pemrosesan data pribadi</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">Mendukung transformasi digital yang aman dan terpercaya</span>
            </li>
          </ul>
        </section>

        {/* Jenis Data Pribadi */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Jenis Data Pribadi yang Dilindungi</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            UU PDP mengklasifikasikan data pribadi menjadi dua kategori utama:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Data Pribadi Spesifik */}
            <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Data Pribadi Spesifik
              </h3>
              <p className="text-sm text-gray-600 mb-3">Data sensitif yang memerlukan perlindungan khusus:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Data dan informasi kesehatan</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Data biometrik</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Data genetika</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Catatan kejahatan</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Data anak</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Data keuangan pribadi</span>
                </li>
              </ul>
            </div>

            {/* Data Pribadi Umum */}
            <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Data Pribadi Umum
              </h3>
              <p className="text-sm text-gray-600 mb-3">Data pribadi yang bersifat umum:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Nama lengkap</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Jenis kelamin</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Kewarganegaraan</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Agama</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Status perkawinan</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Data pribadi yang dikombinasikan</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hak Subjek Data */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Hak Subjek Data (Pemilik Data)</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            UU PDP memberikan hak-hak fundamental kepada pemilik data, termasuk:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Hak untuk mengakses</h4>
              <p className="text-sm text-gray-700">Mendapatkan dan mengetahui data pribadi yang diproses</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Hak untuk memperbaiki</h4>
              <p className="text-sm text-gray-700">Melengkapi, memperbarui, dan memperbaiki kesalahan data</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Hak untuk menghapus</h4>
              <p className="text-sm text-gray-700">Menghapus data pribadi tertentu miliknya</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Hak untuk membatasi</h4>
              <p className="text-sm text-gray-700">Membatasi pemrosesan data secara akurat</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Hak untuk mengajukan keberatan</h4>
              <p className="text-sm text-gray-700">Menolak pemrosesan data untuk kepentingan tertentu</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Hak portabilitas data</h4>
              <p className="text-sm text-gray-700">Mendapatkan salinan data dalam format terstruktur</p>
            </div>
          </div>
        </section>

        {/* Kewajiban Perusahaan */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Kewajiban Pengendali Data (Perusahaan)</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Perusahaan yang mengumpulkan dan memproses data pribadi memiliki kewajiban-kewajiban penting:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-2">1. Dasar Pemrosesan yang Sah</h4>
              <p className="text-gray-700">Harus memiliki dasar hukum yang sah untuk memproses data pribadi, seperti persetujuan, pelaksanaan kontrak, atau kewajiban hukum.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-2">2. Transparansi dan Pemberitahuan</h4>
              <p className="text-gray-700">Memberikan informasi yang jelas tentang tujuan, cara, dan jangka waktu pemrosesan data pribadi.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-2">3. Keamanan Data</h4>
              <p className="text-gray-700">Menerapkan langkah-langkah teknis dan organisasi yang tepat untuk melindungi data pribadi dari akses tidak sah, kehilangan, atau kerusakan.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-2">4. Penunjukan Data Protection Officer (DPO)</h4>
              <p className="text-gray-700">Organisasi tertentu wajib menunjuk DPO untuk memastikan kepatuhan terhadap UU PDP.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-2">5. Pencatatan Aktivitas Pemrosesan</h4>
              <p className="text-gray-700">Mendokumentasikan semua aktivitas pemrosesan data pribadi secara sistematis.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600 shadow-sm">
              <h4 className="font-bold text-blue-900 mb-2">6. Pemberitahuan Insiden Keamanan</h4>
              <p className="text-gray-700">Melaporkan pelanggaran data kepada otoritas dan subjek data dalam waktu 72 jam setelah mengetahui insiden.</p>
            </div>
          </div>
        </section>

        {/* Risiko dan Sanksi */}
        <section className="mb-12">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-red-900 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Risiko dan Sanksi Ketidakpatuhan
            </h2>

            <p className="text-gray-800 mb-6 text-lg font-semibold">
              Ketidakpatuhan terhadap UU PDP dapat mengakibatkan konsekuensi serius bagi perusahaan:
            </p>

            {/* Sanksi Administratif */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">Sanksi Administratif (Pasal 57)</h3>
              <div className="bg-white rounded-lg p-6 mb-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <span className="font-bold text-gray-900">Peringatan tertulis</span>
                      <p className="text-gray-700 text-sm">Teguran formal untuk segera memperbaiki pelanggaran</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <span className="font-bold text-gray-900">Penghentian sementara kegiatan pemrosesan</span>
                      <p className="text-gray-700 text-sm">Penangguhan operasional hingga kepatuhan tercapai</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <span className="font-bold text-gray-900">Penghapusan data pribadi</span>
                      <p className="text-gray-700 text-sm">Kewajiban menghapus seluruh data yang diproses secara ilegal</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <span className="font-bold text-red-900 text-lg">Denda administratif hingga 2% dari pendapatan tahunan</span>
                      <p className="text-red-700 text-sm font-semibold">Untuk perusahaan dengan omzet Rp 100 miliar, denda bisa mencapai Rp 2 miliar!</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sanksi Pidana */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">Sanksi Pidana (Pasal 67-73)</h3>
              <div className="bg-white rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-300">
                    <div className="text-3xl font-bold text-red-900 mb-2">Rp 6 Miliar</div>
                    <p className="text-red-800 font-semibold">Denda maksimal untuk pelanggaran pidana</p>
                  </div>
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-300">
                    <div className="text-3xl font-bold text-red-900 mb-2">6 Tahun</div>
                    <p className="text-red-800 font-semibold">Hukuman penjara maksimal</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4 text-sm">
                  Sanksi pidana dapat dikenakan untuk pelanggaran berat seperti pemrosesan data ilegal yang disengaja,
                  kegagalan melindungi data pribadi yang mengakibatkan kebocoran, atau penyalahgunaan data pribadi.
                </p>
              </div>
            </div>

            {/* Risiko Lainnya */}
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-4">Risiko Bisnis Lainnya</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-bold text-red-900 mb-2">Kerusakan Reputasi</h4>
                  <p className="text-sm text-gray-700">Kehilangan kepercayaan pelanggan dan mitra bisnis</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-bold text-red-900 mb-2">Gugatan Perdata</h4>
                  <p className="text-sm text-gray-700">Subjek data dapat mengajukan tuntutan ganti rugi</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-bold text-red-900 mb-2">Kerugian Operasional</h4>
                  <p className="text-sm text-gray-700">Penghentian layanan dan kehilangan pendapatan</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-yellow-900 mb-4 flex items-center">
              <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Waktu Berjalan! Periode Transisi 2 Tahun
            </h2>
            <p className="text-gray-800 mb-4">
              <strong>Pasal 74 UU PDP</strong> memberikan masa transisi <strong>2 tahun</strong> sejak UU diundangkan
              (17 Oktober 2022) bagi perusahaan untuk menyesuaikan praktik bisnis mereka dengan ketentuan UU PDP.
            </p>
            <div className="bg-white rounded-lg p-6 mt-4">
              <p className="text-lg font-bold text-red-900 mb-2">Deadline: 17 Oktober 2024</p>
              <p className="text-gray-700">
                Setelah periode transisi berakhir, semua perusahaan harus sudah sepenuhnya patuh terhadap UU PDP.
                Pelanggaran setelah deadline akan dikenakan sanksi penuh.
              </p>
            </div>
          </div>
        </section>

        {/* Mengapa Perlu Konsultan */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Mengapa Perusahaan Membutuhkan Konsultan Perlindungan Data?
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Kepatuhan terhadap UU PDP bukan hanya tentang menghindari sanksi, tetapi tentang membangun kepercayaan
            dan melindungi aset paling berharga perusahaan: data. Namun, implementasi UU PDP sangat kompleks dan memerlukan:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-200 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Pemahaman Hukum yang Mendalam</h3>
                  <p className="text-gray-700 text-sm">Interpretasi yang tepat dari 76 pasal UU PDP dan peraturan pelaksanaannya</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-200 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Assessment & Gap Analysis</h3>
                  <p className="text-gray-700 text-sm">Evaluasi menyeluruh praktik pemrosesan data saat ini vs. persyaratan UU PDP</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-200 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Penyusunan Dokumentasi</h3>
                  <p className="text-gray-700 text-sm">Kebijakan privasi, prosedur keamanan, DPIA, dan dokumentasi kepatuhan lainnya</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-200 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Pelatihan Karyawan</h3>
                  <p className="text-gray-700 text-sm">Membangun budaya perlindungan data di seluruh organisasi</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-200 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Implementasi Keamanan</h3>
                  <p className="text-gray-700 text-sm">Langkah-langkah teknis dan organisasi untuk melindungi data pribadi</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-200 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Monitoring & Audit Berkelanjutan</h3>
                  <p className="text-gray-700 text-sm">Memastikan kepatuhan yang berkelanjutan dan identifikasi risiko baru</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patuh Data Solution */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 text-white shadow-xl">
            <div className="flex items-center mb-6">
              <div className="relative h-12 w-48 mr-4">
                <Image
                  src="/logo-transparent.png"
                  alt="Patuh Data Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4">Solusi Komprehensif dari Patuh Data</h2>
            <p className="text-blue-100 mb-6 text-lg leading-relaxed">
              Patuh Data adalah konsultan perlindungan data pribadi terpercaya yang membantu perusahaan Indonesia
              mencapai kepatuhan penuh terhadap UU PDP. Kami menyediakan pendampingan end-to-end dari assessment
              hingga implementasi dan monitoring berkelanjutan.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-blue-300 mb-2">100+</div>
                <p className="text-blue-100">Klien Terlayani</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-blue-300 mb-2">5+</div>
                <p className="text-blue-100">Tahun Pengalaman</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-blue-300 mb-2">24/7</div>
                <p className="text-blue-100">Dukungan Konsultasi</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Layanan Kami Meliputi:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-100">Assessment & Gap Analysis Menyeluruh</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-100">Penyusunan Kebijakan & Prosedur</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-100">Data Protection Impact Assessment (DPIA)</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-100">Pelatihan & Awareness Program</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-100">DPO as a Service</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-100">Continuous Compliance Monitoring</span>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <p className="text-lg mb-4 font-semibold">
                Jangan tunggu hingga terkena sanksi! Mulai perjalanan kepatuhan UU PDP Anda bersama Patuh Data hari ini.
              </p>
              <Link
                href="/#konsultasi"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Konsultasi Gratis Sekarang
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Kesimpulan */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Kesimpulan</h2>
          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
            <p className="text-gray-700 leading-relaxed mb-4">
              UU Perlindungan Data Pribadi adalah peraturan yang komprehensif dan menyeluruh yang membawa perubahan
              signifikan dalam cara perusahaan mengelola data pribadi di Indonesia. Kepatuhan bukan pilihan,
              tetapi kewajiban hukum dengan konsekuensi serius jika diabaikan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dengan sanksi administratif hingga 2% dari pendapatan tahunan dan sanksi pidana hingga Rp 6 miliar
              serta 6 tahun penjara, risiko ketidakpatuhan terlalu besar untuk diabaikan. Ditambah lagi dengan
              risiko reputasi dan kehilangan kepercayaan pelanggan.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Investasi dalam kepatuhan UU PDP bukan hanya tentang menghindari sanksi, tetapi tentang membangun
              fondasi kepercayaan yang kuat dengan pelanggan Anda dan memastikan keberlanjutan bisnis di era digital.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Siap Menjadi Patuh Terhadap UU PDP?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Hubungi tim ahli Patuh Data untuk konsultasi gratis dan temukan bagaimana kami dapat membantu
              perusahaan Anda mencapai kepatuhan penuh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#konsultasi"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Konsultasi Sekarang
              </Link>
              <a
                href="tel:+6285183064580"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors border-2 border-white/30"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +62 851 8306 4580
              </a>
            </div>
          </div>
        </section>
      </article>
      </div>
    </>
  );
}
