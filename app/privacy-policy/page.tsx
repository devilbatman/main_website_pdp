import LegalPageLayout from '../components/LegalPageLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Kebijakan Privasi',
  description:
    'Bagaimana Patuhdata mengumpulkan, menggunakan, dan melindungi data pribadi sesuai UU PDP Indonesia.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Kebijakan Privasi"
      description="Cara PT Patuhdata Solusi Nusantara menangani data pribadi ketika Anda menggunakan situs web dan layanan kami."
    >
      <p>
        Patuhdata (&quot;kami&quot;) dioperasikan oleh{' '}
        <strong>PT Patuhdata Solusi Nusantara</strong>. Kami menyediakan layanan tata kelola operasional,
        risiko vendor, dan kesiapan UU PDP untuk bisnis berkembang di Indonesia. Kebijakan Privasi ini
        menjelaskan data pribadi apa yang kami kumpulkan, mengapa kami mengumpulkannya, bagaimana kami
        menggunakannya, dan hak Anda berdasarkan Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan
        Data Pribadi (UU PDP) serta peraturan terkait.
      </p>

      <h2>1. Siapa saja yang tercakup</h2>
      <p>
        Kebijakan ini berlaku untuk pengunjung patuhdata.id, orang yang menghubungi kami lewat formulir
        atau email, serta klien yang menggunakan layanan konsultasi kami. Jika Anda berinteraksi atas
        nama perusahaan, kami dapat memproses data kontak bisnis Anda sebagai bagian dari hubungan
        tersebut.
      </p>

      <h2>2. Data pribadi yang kami kumpulkan</h2>
      <p>Tergantung cara Anda berinteraksi dengan kami, kami dapat mengumpulkan:</p>
      <ul>
        <li>
          <strong>Data identitas dan kontak:</strong> nama, jabatan, nama perusahaan, email, nomor
          telepon, dan pesan yang Anda kirim lewat formulir konsultasi atau email.
        </li>
        <li>
          <strong>Data teknis:</strong> alamat IP, jenis browser, informasi perangkat, halaman yang
          dikunjungi, dan sumber rujukan — terutama melalui cookie dan alat analitik bila Anda
          menyetujui.
        </li>
        <li>
          <strong>Data terkait layanan:</strong> informasi yang Anda berikan secara sukarela dalam
          assessment, workshop, atau pendampingan advisory, tunduk pada ketentuan kontrak dan kerahasiaan
          terpisah.
        </li>
      </ul>

      <h2>3. Cara kami menggunakan data</h2>
      <p>Kami memproses data pribadi hanya bila mematuhi dasar hukum yang sah menurut UU PDP, termasuk:</p>
      <ul>
        <li>Menanggapi pertanyaan dan menjadwalkan assessment kesiapan tata kelola.</li>
        <li>Memberikan layanan yang Anda minta berdasarkan kontrak.</li>
        <li>Meningkatkan situs, konten, dan pengalaman pengguna (dengan persetujuan untuk analitik).</li>
        <li>Memenuhi kewajiban hukum dan melindungi kepentingan usaha yang sah.</li>
      </ul>

      <h2>4. Dasar hukum pemrosesan</h2>
      <p>Pemrosesan kami dapat mengandalkan satu atau lebih dari berikut:</p>
      <ul>
        <li>Persetujuan eksplisit Anda (mis. cookie analitik, komunikasi pemasaran).</li>
        <li>Pelaksanaan kontrak atau langkah sebelum kontrak.</li>
        <li>Kepatuhan terhadap kewajiban hukum.</li>
        <li>Kepentingan sah yang tidak mengalahkan hak Anda (mis. keamanan situs).</li>
      </ul>

      <h2>5. Cookie dan teknologi serupa</h2>
      <p>
        Kami menggunakan cookie yang diperlukan untuk mengoperasikan situs dan, dengan persetujuan Anda,
        cookie analitik (seperti Google Analytics) untuk memahami pola traffic. Anda dapat menerima atau
        menolak analitik melalui banner cookie kami. Detail lengkap ada di{' '}
        <a href="/cookies">Kebijakan Cookie</a>.
      </p>

      <h2>6. Pembagian dan transfer internasional</h2>
      <p>
        Kami tidak menjual data pribadi. Kami dapat membagikan data kepada pemroses tepercaya (mis.
        hosting, email, penyedia analitik) yang bertindak sesuai instruksi kami dan menerapkan pengamanan
        yang wajar. Jika data diproses di luar Indonesia, kami memastikan perlindungan konsisten dengan
        UU PDP.
      </p>

      <h2>7. Retensi</h2>
      <p>
        Kami menyimpan data pribadi hanya selama diperlukan untuk tujuan di atas atau sesuai hukum. Data
        pertanyaan biasanya disimpan hingga 24 bulan kecuali hubungan klien berlanjut. Anda dapat meminta
        penghapusan dengan tetap mengikuti kewajiban penyimpanan hukum.
      </p>

      <h2>8. Keamanan</h2>
      <p>
        Kami menerapkan langkah administratif, teknis, dan organisasi yang sesuai dengan sifat data yang
        kami pegang. Tidak ada metode transmisi internet yang sepenuhnya aman; kami menyarankan Anda
        menggunakan kata sandi kuat dan melindungi perangkat Anda.
      </p>

      <h2>9. Hak Anda</h2>
      <p>Berdasarkan UU PDP, Anda dapat memiliki hak untuk:</p>
      <ul>
        <li>Mengakses dan memperoleh salinan data pribadi Anda.</li>
        <li>Memperbaiki data yang tidak akurat atau tidak lengkap.</li>
        <li>Meminta penghapusan atau pembatasan pemrosesan dalam kondisi tertentu.</li>
        <li>Menarik persetujuan jika pemrosesan bersifat sukarela.</li>
        <li>Mengajukan pengaduan kepada otoritas pengawas yang berwenang setelah terbentuk.</li>
      </ul>
      <p>
        Untuk menggunakan hak ini, hubungi kami di{' '}
        <a href="mailto:support@patuhdata.id">support@patuhdata.id</a>. Kami akan merespons dalam waktu
        wajar sesuai hukum.
      </p>

      <h2>10. Anak-anak</h2>
      <p>
        Layanan kami ditujukan untuk bisnis dan profesional. Kami tidak dengan sengaja mengumpulkan data
        pribadi dari anak di bawah 18 tahun.
      </p>

      <h2>11. Perubahan kebijakan</h2>
      <p>
        Kami dapat memperbarui Kebijakan Privasi ini untuk mencerminkan perubahan hukum atau operasional.
        Tanggal &quot;Terakhir diperbarui&quot; di atas akan disesuaikan. Penggunaan situs setelah
        perubahan berarti Anda memahami kebijakan terbaru.
      </p>

      <h2>12. Hubungi kami</h2>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-slate-800">
        <p className="font-semibold text-slate-900">PT Patuhdata Solusi Nusantara</p>
        <p className="mt-2 text-sm leading-relaxed">
          INFINITI OFFICE, Jl. Permata Regency Jl. H. Kelik, RT.1/RW.6, Srengseng,
          <br />
          Kec. Kembangan, Jakarta Barat 11630, Indonesia
        </p>
        <p className="mt-3 text-sm">
          <strong>Email:</strong>{' '}
          <a href="mailto:support@patuhdata.id">support@patuhdata.id</a>
        </p>
        <p className="text-sm">
          <strong>Telepon:</strong>{' '}
          <a href="tel:+6285183064580">+62 851 8306 4580</a>
        </p>
      </div>
    </LegalPageLayout>
  );
}
