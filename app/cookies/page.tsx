import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kebijakan Cookies | Patuh Data',
  description: 'Kebijakan penggunaan cookies (Cookies Policy) oleh Patuh Data untuk memberikan pengalaman penelusuran yang optimal dan transparan.',
};

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block font-medium">
          &larr; Kembali ke Beranda
        </Link>
        
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Kebijakan Cookies (Cookies Policy)</h1>
          <div className="text-sm text-slate-500 mb-10 border-b border-slate-100 pb-6">
            Pembaruan Terakhir: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>

          <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-blue-600">
            <p className="lead text-lg text-slate-700">
              Di Patuh Data, kami menghargai privasi Anda dan berkomitmen untuk memastikan bahwa informasi pribadi Anda disimpan serta diproses secara bertanggung jawab. Halaman Kebijakan Patuh Data ini menjelaskan penggunaan cookie dan teknologi serupa pada situs web Patuh Data untuk meningkatkan pengalaman dan kepuasan Anda dalam menjelajahi situs web kami. Dengan menggunakan situs web Patuh Data, Anda menyetujui penempatan dan penggunaan cookie sebagaimana dijelaskan di bawah ini. Setelah Anda memberikan persetujuan terhadap Kebijakan Cookie Patuh Data, data Anda akan tersimpan selama 30 hari. Selanjutnya, Anda akan dimintai persetujuan kembali.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Apa Itu Cookie?</h2>
            <p>
              Cookie adalah file data berukuran kecil yang ditempatkan pada perangkat Anda, yaitu komputer, ponsel pintar, dan tablet, untuk mengunjungi suatu situs web. File ini berisi informasi tentang preferensi dan informasi Anda, yang memungkinkan situs web mempelajari detail untuk mendukung kunjungan Anda berikutnya. Pada situs web Patuh Data, cookie membantu kami dalam meningkatkan pengalaman Anda sebagai pengguna, mengoptimalkan kinerja situs web, serta menghadirkan konten yang relevan untuk Anda.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Penggunaan Cookie oleh Patuh Data</h2>
            <p>
              Situs web Patuh Data menggunakan cookie untuk meningkatkan kinerja situs web, menganalisis interaksi pengguna, dan menyajikan iklan yang dipersonalisasi. Melalui penggunaan cookie, situs web Patuh Data dapat menyesuaikan konten, memahami preferensi Anda, serta menghadirkan pengalaman menjelajahi situs web kami sesuai dengan minat Anda.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Jenis Cookie pada Situs Web Patuh Data</h2>
            <p>Situs web Patuh Data menggunakan tiga tipe cookie dengan masing-masing tujuan, sebagai berikut ini:</p>
            
            <div className="space-y-6 mt-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Cookie Esensial</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Cookie tipe ini sangat penting untuk mendukung fungsi dasar situs web Patuh Data. Cookie ini memungkinkan Anda menavigasi situs web Patuh Data, melakukan akses dengan aman, meningkatkan pengalaman sebagai pengguna serta menggunakan fitur penting, termasuk fitur untuk masuk ke akun Anda di situs web kami. Cookie ini tidak menyimpan informasi pribadi yang dapat teridentifikasi.
                </p>
                <ul className="text-sm text-slate-600 list-disc pl-5">
                  <li><strong>Tujuan:</strong> Memastikan keamanan situs, mengelola sesi masuk, dan mengaktifkan fungsi-fungsi penting</li>
                  <li><strong>Contoh:</strong> cookie sesi masuk, cookie terkait keamanan dan cookie untuk menganalisis trafik situs</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Cookie Analitik</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Cookie yang digunakan untuk tools research, seperti survei, termasuk dalam kategori ini karena memungkinkan kami untuk mengumpulkan informasi penting mengenai preferensi dan kebutuhan pengguna. Data ini membantu kami untuk terus menyempurnakan produk dan layanan yang kami tawarkan.
                </p>
                <ul className="text-sm text-slate-600 list-disc pl-5">
                  <li><strong>Tujuan:</strong> Menganalisis umpan balik pengguna dan mengembangkan situs lebih lanjut</li>
                  <li><strong>Contoh:</strong> Hotjar atau research tool lainnya</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Cookie Iklan</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Cookie iklan memungkinkan kami melakukan personalisasi iklan untuk Anda di situs web Patuh Data. Melalui cookie ini, kami dapat memahami kebiasaan Anda dalam berselancar di situs web, sehingga kami bisa menampilkan konten yang relevan bagi Anda.
                </p>
                <ul className="text-sm text-slate-600 list-disc pl-5">
                  <li><strong>Tujuan:</strong> Menyediakan iklan yang disesuaikan dengan riwayat penjelajahan pengguna di situs web, mengukur efektivitas kampanye iklan</li>
                  <li><strong>Contoh:</strong> Google Ads, piksel media sosial</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Pengaturan Cookie</h2>
            <p>
              Anda dapat mengontrol preferensi cookie pada situs web. Melalui pengaturan browser, Anda bisa memblokir atau menghapus cookie kapan pun. Namun sebagai informasi tambahan, ketika cookie dalam kondisi non-aktif, akses Anda untuk sejumlah fitur di situs web Patuh Data akan dibatasi.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Tombol untuk Mengelola Cookie</h2>
            <p>
              Kami menyediakan tombol &quot;Kelola Cookie&quot; di situs web Patuh Data yang membantu Anda memilih preferensi cookie dengan mudah. Fitur ini memungkinkan Anda untuk menerima atau menolak jenis cookie tertentu secara langsung, sehingga Anda hanya mengizinkan cookie yang sesuai dengan preferensi privasi Anda.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Pengaturan Persetujuan Pop-Up</h2>
            <p>
              Saat Anda pertama kali mengunjungi Patuh Data, jendela pop-up persetujuan cookie akan muncul. Melalui jendela ini, Anda dapat mengelola pilihan cookie. Anda bisa memperbarui preferensi ini kapan pun dengan mengklik tombol &quot;Kelola Cookie&quot; di bagian bawah halaman.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Perubahan Kebijakan Cookie Situs Web Patuh Data</h2>
            <p>
              Patuh Data dapat memperbarui Kebijakan Cookie ini secara berkala sesuai perkembangan termasuk dalam hal relevansi persyaratan hukum. Oleh karena itu, kami menyarankan Anda meninjau halaman ini secara berkala untuk mengetahui informasi terbaru tentang kebijakan cookie pada situs web Patuh Data.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan mengenai Kebijakan Cookie situs web Patuh Data, silakan hubungi kami.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl mt-4 border border-blue-100 text-blue-900">
              <p className="font-bold text-lg mb-4">Informasi Kontak Patuh Data</p>
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:support@patuhdata.id" className="underline hover:text-blue-700">support@patuhdata.id</a></p>
              <p className="mb-2"><strong>Telepon:</strong> <a href="tel:+6285183064580" className="underline hover:text-blue-700">+62 851 8306 4580</a></p>
              <p className="mb-0 leading-relaxed">
                <strong>Alamat:</strong><br />
                PT PATUHDATA SOLUSI NUSANTARA<br />
                INFINITI OFFICE<br />
                Jl. Permata Regency Jl. H. Kelik, RT.1/RW.6, Srengseng,<br />
                Kec. Kembangan, Kota Jakarta Barat,<br />
                Daerah Khusus Ibukota Jakarta 11630
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
