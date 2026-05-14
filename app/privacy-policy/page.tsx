import Link from 'next/link';

export const metadata = {
  title: 'Kebijakan Privasi | Patuh Data',
  description: 'Kebijakan Privasi PT PATUHDATA SOLUSI NUSANTARA sesuai dengan UU PDP.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-6">
          Kebijakan Privasi (Privacy Policy)
        </h1>
        
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="text-sm text-gray-500">
            <strong>Terakhir diperbarui:</strong> {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p>
            Selamat datang di situs web Patuh Data, layanan konsultasi kepatuhan dari <strong>PT PATUHDATA SOLUSI NUSANTARA</strong>. 
            Kami sangat menghargai privasi Anda dan berkomitmen penuh untuk melindungi Data Pribadi Anda sesuai dengan 
            Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) serta peraturan perundang-undangan 
            terkait lainnya yang berlaku di Republik Indonesia.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Definisi</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Data Pribadi</strong> adalah data tentang orang perseorangan yang teridentifikasi atau dapat diidentifikasi secara tersendiri atau dikombinasi dengan informasi lainnya.</li>
            <li><strong>Pemrosesan Data Pribadi</strong> meliputi pemerolehan, pengumpulan, pengolahan, penganalisisan, penyimpanan, perbaikan, pembaruan, penampilan, pengumuman, transfer, penyebarluasan, atau pengungkapan, dan/atau penghapusan atau pemusnahan Data Pribadi.</li>
            <li><strong>Kami</strong> atau <strong>Patuh Data</strong> adalah PT PATUHDATA SOLUSI NUSANTARA.</li>
            <li><strong>Anda</strong> adalah pengguna situs web atau klien layanan kami.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Data Pribadi yang Kami Kumpulkan</h2>
          <p>Kami dapat mengumpulkan Data Pribadi Anda melalui interaksi dengan situs web, formulir kontak, atau saat Anda menggunakan layanan konsultasi kami. Data yang kami kumpulkan meliputi:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Data Identitas:</strong> Nama lengkap, jabatan, nama perusahaan.</li>
            <li><strong>Data Kontak:</strong> Alamat email, nomor telepon/WhatsApp, alamat kantor.</li>
            <li><strong>Data Teknis:</strong> Alamat IP, jenis peramban (browser), zona waktu, jenis dan versi plug-in peramban, sistem operasi dan platform (melalui Cookie).</li>
            <li><strong>Data Komunikasi:</strong> Pesan atau pertanyaan yang Anda sampaikan melalui formulir konsultasi atau saluran komunikasi lainnya.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Tujuan Pemrosesan Data Pribadi</h2>
          <p>Kami memproses Data Pribadi Anda secara sah, terbatas, spesifik, dan transparan untuk tujuan berikut:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Menjawab pertanyaan, merespons permintaan konsultasi, dan memberikan informasi terkait layanan yang Anda minta.</li>
            <li>Menyediakan layanan konsultasi, gap assessment, pelatihan, dan audit kepatuhan UU PDP.</li>
            <li>Memelihara dan meningkatkan kualitas serta keamanan situs web kami.</li>
            <li>Mematuhi kewajiban hukum dan peraturan yang berlaku.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Dasar Pemrosesan Data</h2>
          <p>Kami hanya memproses Data Pribadi jika memiliki satu atau lebih dasar hukum berikut sesuai Pasal 20 UU PDP:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Persetujuan (Consent)</strong> yang sah dan eksplisit dari Anda.</li>
            <li><strong>Pelaksanaan Perjanjian</strong> di mana Anda merupakan salah satu pihak atau dalam rangka memenuhi permintaan Anda sebelum mengadakan perjanjian.</li>
            <li><strong>Pemenuhan Kewajiban Hukum</strong> dari Kami selaku Pengendali Data Pribadi.</li>
            <li><strong>Pemenuhan Kepentingan yang Sah</strong> dengan tetap memperhatikan hak Anda.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Penyimpanan dan Retensi Data</h2>
          <p>
            Data Pribadi Anda akan disimpan dengan standar keamanan tinggi untuk melindungi dari akses yang tidak sah, 
            pengubahan, pengungkapan, atau penghancuran. Kami akan menyimpan Data Pribadi Anda selama diperlukan untuk 
            mencapai tujuan pengumpulannya, atau sebagaimana diwajibkan oleh hukum dan peraturan terkait retensi arsip 
            perusahaan.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Hak Subjek Data Pribadi</h2>
          <p>Sesuai dengan UU PDP, Anda sebagai Subjek Data memiliki hak-hak berikut:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hak mendapatkan informasi terkait identitas, dasar kepentingan, tujuan dan akuntabilitas pihak yang memproses Data Pribadi.</li>
            <li>Hak untuk melengkapi, memperbarui, atau memperbaiki kesalahan dan/atau ketidakakuratan Data Pribadi.</li>
            <li>Hak untuk mengakses dan mendapatkan salinan Data Pribadi tentang diri Anda.</li>
            <li>Hak untuk mengakhiri pemrosesan, menghapus, dan/atau memusnahkan Data Pribadi Anda.</li>
            <li>Hak untuk menarik persetujuan (consent) yang telah diberikan.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Penggunaan Cookie</h2>
          <p>
            Situs web kami menggunakan cookie untuk membedakan Anda dari pengguna situs web lain, yang membantu kami memberikan pengalaman terbaik 
            saat Anda menjelajahi situs kami. Pengguna dapat mengatur peramban untuk menolak semua atau beberapa cookie peramban. Untuk detail lebih lanjut, 
            silakan lihat Pemberitahuan Cookie yang muncul saat Anda pertama kali mengakses situs ini.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Kontak Kami</h2>
          <p>Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, atau ingin melaksanakan hak-hak Anda, Anda dapat menghubungi kami melalui:</p>
          <div className="bg-gray-100 p-6 rounded-lg mt-4 text-gray-800">
            <p className="font-semibold mb-2">PT PATUHDATA SOLUSI NUSANTARA</p>
            <p>INFINITI OFFICE</p>
            <p>Jl. Permata Regency Jl. H. Kelik, RT.1/RW.6, Srengseng,</p>
            <p>Kec. Kembangan, Kota Jakarta Barat,</p>
            <p className="mb-4">Daerah Khusus Ibukota Jakarta 11630</p>
            <p><strong>Email:</strong> support@patuhdata.id</p>
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
