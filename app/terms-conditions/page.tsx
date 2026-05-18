import LegalPageLayout from '../components/LegalPageLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Syarat & Ketentuan',
  description:
    'Ketentuan penggunaan situs web PatuhData dan layanan konsultasi tata kelola profesional.',
  path: '/terms-conditions',
});

export default function TermsConditionsPage() {
  return (
    <LegalPageLayout
      title="Syarat &amp; Ketentuan"
      description="Ketentuan penggunaan patuhdata.id dan layanan profesional PatuhData."
    >
      <p>
        Syarat &amp; Ketentuan ini (&quot;Ketentuan&quot;) mengatur akses Anda ke patuhdata.id dan
        penggunaan layanan yang disediakan oleh <strong>PT PatuhData Solusi Nusantara</strong>{' '}
        (&quot;PatuhData&quot;, &quot;kami&quot;). Dengan menggunakan situs atau layanan kami, Anda
        menyetujui Ketentuan ini. Jika tidak setuju, mohon tidak menggunakan situs atau layanan.
      </p>

      <h2>1. Tentang layanan kami</h2>
      <p>
        PatuhData menyediakan tata kelola operasional, risiko vendor, kesiapan UU PDP, dan advisory
        terkait untuk bisnis di Indonesia. Ruang lingkup, deliverable, biaya, dan jadwal spesifik
        diatur dalam proposal, statement of work, atau perjanjian layanan terpisah dengan klien.
        Ketentuan ini bersifat umum; bila kontrak tertulis bertentangan, yang berlaku adalah kontrak.
      </p>

      <h2>2. Penggunaan situs</h2>
      <p>Anda setuju menggunakan situs kami hanya untuk tujuan yang sah. Anda tidak boleh:</p>
      <ul>
        <li>Mencoba akses tidak sah ke sistem atau data kami.</li>
        <li>Mengirim malware, spam, atau kode berbahaya.</li>
        <li>Mengambil atau menyalin konten dalam skala besar tanpa izin tertulis.</li>
        <li>Menyesatkan mengenai identitas atau afiliasi Anda saat menghubungi kami.</li>
      </ul>
      <p>
        Konten di situs ini (teks, grafik, metodologi, kerangka kerja) dimiliki PatuhData atau dilisensi
        kepada kami dan dilindungi hukum kekayaan intelektual.
      </p>

      <h2>3. Bukan nasihat profesional hanya dari situs</h2>
      <p>
        Artikel, wawasan, dan informasi umum di patuhdata.id bersifat edukatif. Itu bukan nasihat hukum,
        regulasi, atau audit untuk situasi spesifik Anda. Nasihat hukum formal diberikan hanya dalam
        engagement dengan ruang lingkup dan ketentuan ketergantungan yang disepakati.
      </p>

      <h2>4. Pertanyaan dan assessment</h2>
      <p>
        Mengirim formulir konsultasi tidak otomatis membentuk hubungan klien atau kewajiban
        menyediakan layanan. Kami berhak menolak engagement di luar keahlian kami, yang menimbulkan
        konflik kepentingan, atau tidak selaras dengan kebijakan kami.
      </p>

      <h2>5. Tanggung jawab klien</h2>
      <p>Saat menggunakan layanan kami, Anda setuju untuk:</p>
      <ul>
        <li>Memberikan informasi yang akurat dan tepat waktu yang diperlukan untuk engagement.</li>
        <li>Menunjuk stakeholder internal yang memiliki wewenang mengambil keputusan.</li>
        <li>Memastikan pengungkapan kepada kami tidak melanggar kerahasiaan kepada pihak ketiga.</li>
        <li>Menerapkan rekomendasi dengan risiko Anda sendiri, dengan kepemilikan keputusan bisnis akhir.</li>
      </ul>

      <h2>6. Kerahasiaan</h2>
      <p>
        Kami memperlakukan informasi klien sebagai rahasia. Untuk proyek formal, kami biasanya
        menandatangani perjanjian kerahasiaan bersama (NDA) sebelum menerima data sensitif. Personel
        kami terikat kewajiban kerahasiaan profesional.
      </p>

      <h2>7. Kekayaan intelektual</h2>
      <p>
        Kecuali disepakati lain secara tertulis, PatuhData tetap memiliki metodologi, template, kerangka
        kerja, dan materi praeksisting yang digunakan dalam deliverable. Klien mendapat lisensi terbatas
        untuk menggunakan deliverable khusus proyek untuk keperluan internal bisnis, tanpa hak menjual
        kembali, mensublisensikan, atau mempublikasikan tanpa persetujuan.
      </p>

      <h2>8. Pembatasan tanggung jawab</h2>
      <p>
        Sepanjang diizinkan hukum Indonesia, PatuhData tidak bertanggung jawab atas kerugian tidak
        langsung, insidental, khusus, atau konsekuensial yang timbul dari penggunaan situs atau layanan,
        termasuk kehilangan laba, denda regulator, atau pelanggaran data yang disebabkan kegagalan klien
        menerapkan kontrol yang disepakati. Total tanggung jawab kami dalam suatu engagement dibatasi
        pada biaya yang dibayar untuk engagement tersebut, kecuali tanggung jawab tidak dapat dibatasi
        menurut hukum.
      </p>

      <h2>9. Ganti rugi</h2>
      <p>
        Anda setuju mengganti rugi PatuhData atas klaim yang timbul dari penyalahgunaan situs oleh Anda,
        pelanggaran Ketentuan ini, atau penyediaan informasi yang melanggar hukum atau tidak akurat
        kepada kami.
      </p>

      <h2>10. Tautan pihak ketiga</h2>
      <p>
        Situs kami dapat menaut ke situs eksternal. Kami tidak bertanggung jawab atas konten atau
        praktik privasi mereka.
      </p>

      <h2>11. Hukum yang mengatur dan sengketa</h2>
      <p>
        Ketentuan ini tunduk pada hukum Republik Indonesia. Sengketa akan diselesaikan terlebih dahulu
        melalui negosiasi itikad baik. Jika tidak tercapai, sengketa diserahkan kepada pengadilan yang
        berwenang di Jakarta Barat, kecuali hukum wajib menentukan lain.
      </p>

      <h2>12. Perubahan</h2>
      <p>
        Kami dapat merevisi Ketentuan ini dari waktu ke waktu. Ketentuan yang diperbarui berlaku ketika
        dipublikasikan di halaman ini. Penggunaan situs yang berkelanjutan berarti Anda menerima revisi.
      </p>

      <h2>13. Kontak</h2>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-slate-800">
        <p className="font-semibold text-slate-900">PT PatuhData Solusi Nusantara</p>
        <p className="mt-2 text-sm leading-relaxed">INFINITI OFFICE, Jakarta Barat 11630, Indonesia</p>
        <p className="mt-3 text-sm">
          <a href="mailto:support@patuhdata.id">support@patuhdata.id</a> ·{' '}
          <a href="tel:+6285183064580">+62 851 8306 4580</a>
        </p>
      </div>
    </LegalPageLayout>
  );
}
