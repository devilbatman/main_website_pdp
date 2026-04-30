import Link from 'next/link';

export const metadata = {
  title: 'Syarat & Ketentuan | Patuh Data',
  description: 'Syarat dan Ketentuan layanan konsultasi PT PATUHDATA SOLUSI NUSANTARA.',
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-6">
          Syarat dan Ketentuan (Terms & Conditions)
        </h1>
        
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="text-sm text-gray-500">
            <strong>Terakhir diperbarui:</strong> {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p>
            Syarat dan Ketentuan ini (&quot;Syarat&quot;) mengatur penggunaan situs web Patuh Data dan layanan konsultasi yang 
            disediakan oleh <strong>PT PATUHDATA SOLUSI NUSANTARA</strong> (&quot;Kami&quot;, &quot;Perusahaan&quot;). Dengan mengakses situs web kami 
            atau menggunakan layanan kami, Anda (&quot;Pengguna&quot;, &quot;Klien&quot;) menyetujui untuk terikat oleh Syarat dan Ketentuan ini.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Layanan yang Diberikan</h2>
          <p>
            Kami menyediakan layanan konsultasi, audit, pelatihan, dan pendampingan kepatuhan terkait Undang-Undang Nomor 27 Tahun 2022 tentang 
            Pelindungan Data Pribadi (UU PDP). Detail spesifik dari layanan akan diuraikan lebih lanjut dalam Kontrak Kerja atau Proposal Layanan 
            yang disepakati terpisah antara Kami dan Klien.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Tanggung Jawab Klien</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Memberikan informasi, data, dan dokumen yang akurat, relevan, dan terkini yang diperlukan untuk pelaksanaan layanan.</li>
            <li>Memastikan bahwa pengungkapan informasi apa pun kepada Kami tidak melanggar perjanjian kerahasiaan atau hukum yang berlaku.</li>
            <li>Bekerja sama secara aktif selama proses konsultasi atau audit untuk kelancaran pelaksanaan layanan.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Kerahasiaan (Confidentiality)</h2>
          <p>
            Kami berkomitmen penuh untuk menjaga kerahasiaan seluruh informasi dan data bisnis Klien yang kami terima dalam pelaksanaan layanan, 
            termasuk namun tidak terbatas pada struktur operasional, data pribadi, dan temuan audit. Kami akan menandatangani Perjanjian 
            Kerahasiaan (Non-Disclosure Agreement/NDA) tersendiri sebelum memulai proyek apa pun.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Hak Kekayaan Intelektual</h2>
          <p>
            Seluruh materi, metodologi, kerangka kerja, templat, dan laporan yang kami sediakan selama pelaksanaan layanan adalah 
            Hak Kekayaan Intelektual milik Kami, kecuali dinyatakan sebaliknya. Klien diberikan hak eksklusif terbatas untuk menggunakan 
            dokumen tersebut hanya untuk kepentingan internal perusahaan Klien dan tidak diperkenankan untuk didistribusikan ke pihak ketiga 
            tanpa izin tertulis dari Kami.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Batasan Tanggung Jawab (Limitation of Liability)</h2>
          <p>
            Meskipun Kami akan memberikan upaya dan keahlian profesional terbaik kami dalam memberikan layanan terkait kepatuhan UU PDP, 
            keputusan akhir dan implementasi kebijakan sepenuhnya berada di tangan Klien. Kami tidak bertanggung jawab atas kerugian tidak langsung, 
            denda administratif, atau tuntutan hukum yang diakibatkan oleh kelalaian atau kegagalan Klien dalam mengimplementasikan 
            rekomendasi kami.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Hukum yang Berlaku dan Penyelesaian Sengketa</h2>
          <p>
            Syarat dan Ketentuan ini tunduk dan ditafsirkan berdasarkan hukum Republik Indonesia. Segala sengketa yang timbul dari atau 
            terkait dengan Syarat ini akan diselesaikan secara musyawarah mufakat terlebih dahulu. Apabila tidak tercapai mufakat, maka sengketa 
            akan diselesaikan melalui Pengadilan Negeri Jakarta Barat.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Perubahan Syarat dan Ketentuan</h2>
          <p>
            Kami berhak untuk mengubah atau memperbarui Syarat dan Ketentuan ini dari waktu ke waktu. Setiap perubahan akan berlaku efektif 
            setelah kami memposting versi yang diperbarui di situs web ini. Penggunaan situs web secara berkelanjutan setelah perubahan 
            menandakan persetujuan Anda terhadap Syarat yang baru.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Kontak Kami</h2>
          <p>Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini, Anda dapat menghubungi kami melalui:</p>
          <div className="bg-gray-100 p-6 rounded-lg mt-4 text-gray-800">
            <p className="font-semibold mb-2">PT PATUHDATA SOLUSI NUSANTARA</p>
            <p>INFINITI OFFICE</p>
            <p>Jl. Permata Regency Jl. H. Kelik, RT.1/RW.6, Srengseng,</p>
            <p>Kec. Kembangan, Kota Jakarta Barat,</p>
            <p className="mb-4">Daerah Khusus Ibukota Jakarta 11630</p>
            <p><strong>Email:</strong> richardr@patuhdata.id</p>
            <p><strong>WhatsApp/Telepon:</strong> +62 851 8306 4580</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
