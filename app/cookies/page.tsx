import LegalPageLayout from '../components/LegalPageLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Kebijakan Cookie',
  description:
    'Bagaimana PatuhData menggunakan cookie dan teknologi serupa di patuhdata.id, serta cara mengelola preferensi Anda.',
  path: '/cookies',
});

export default function CookiesPolicyPage() {
  return (
    <LegalPageLayout
      title="Kebijakan Cookie"
      description="Informasi transparan tentang cookie yang kami gunakan dan cara mengontrolnya."
    >
      <p>
        Kebijakan Cookie ini menjelaskan bagaimana PatuhData (&quot;kami&quot;) menggunakan cookie dan
        teknologi serupa ketika Anda mengunjungi patuhdata.id. Baca bersama{' '}
        <a href="/privacy-policy">Kebijakan Privasi</a> kami.
      </p>

      <h2>Apa itu cookie?</h2>
      <p>
        Cookie adalah berkas teks kecil yang disimpan di perangkat Anda saat mengunjungi situs web.
        Cookie membantu situs mengingat preferensi Anda, menjaga sesi tetap aman, dan — dengan izin
        Anda — memahami cara pengunjung menggunakan situs agar kami dapat memperbaikinya.
      </p>

      <h2>Bagaimana kami menggunakan cookie</h2>
      <p>Kami menggunakan cookie untuk tujuan berikut:</p>

      <h3>Cookie yang sangat diperlukan</h3>
      <p>
        Cookie ini diperlukan agar situs berfungsi. Termasuk preferensi yang Anda tetapkan di banner
        cookie (disimpan di local storage browser sebagai{' '}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">cookie-consent</code>) agar kami
        tidak meminta pilihan Anda setiap kunjungan. Cookie ini tidak melacak Anda di situs lain.
      </p>

      <h3>Cookie analitik (opsional)</h3>
      <p>
        Jika Anda mengeklik &quot;Terima semua&quot; pada banner cookie, kami dapat menggunakan Google
        Analytics untuk mengumpulkan statistik agregat seperti halaman yang dilihat, lokasi perkiraan,
        dan jenis perangkat. Ini membantu kami memahami konten yang berguna. Jika Anda mengeklik
        &quot;Tolak analitik&quot;, cookie analitik ini tidak diaktifkan.
      </p>
      <p>
        Data analitik diproses sesuai ketentuan Google dan Kebijakan Privasi kami. Anda dapat menarik
        persetujuan kapan saja dengan menghapus penyimpanan browser untuk situs ini atau menghubungi
        kami.
      </p>

      <h2>Apa yang tidak kami lakukan</h2>
      <ul>
        <li>Kami tidak menggunakan cookie iklan atau retargeting di situs ini.</li>
        <li>Kami tidak menjual data yang berasal dari cookie kepada pihak ketiga.</li>
        <li>Kami tidak menggunakan pixel pelacakan media sosial tanpa penjelasan dan persetujuan.</li>
      </ul>

      <h2>Mengelola cookie di browser</h2>
      <p>
        Sebagian besar browser memungkinkan Anda memblokir atau menghapus cookie melalui pengaturan.
        Memblokir semua cookie dapat memengaruhi fungsi situs. Halaman bantuan umum:
      </p>
      <ul>
        <li>Chrome: Settings → Privacy and security → Cookies</li>
        <li>Safari: Preferences → Privacy</li>
        <li>Firefox: Settings → Privacy &amp; Security</li>
      </ul>

      <h2>Pilihan di banner cookie</h2>
      <p>Saat pertama kali mengunjungi patuhdata.id, banner menawarkan dua opsi:</p>
      <ul>
        <li>
          <strong>Terima semua:</strong> mengaktifkan cookie analitik selain penyimpanan yang diperlukan.
        </li>
        <li>
          <strong>Tolak analitik:</strong> hanya menyimpan preferensi Anda; skrip analitik tidak dijalankan.
        </li>
      </ul>
      <p>
        Pilihan Anda diingat hingga Anda menghapus data situs atau kami memperbarui kebijakan dan meminta
        persetujuan lagi.
      </p>

      <h2>Retensi</h2>
      <p>
        Preferensi persetujuan disimpan secara lokal di browser hingga Anda menghapusnya. Cookie analitik,
        jika diaktifkan, biasanya kedaluwarsa sesuai periode default penyedia (sering hingga 24 bulan
        untuk Google Analytics, tergantung konfigurasi kami).
      </p>

      <h2>Perubahan kebijakan</h2>
      <p>
        Kami dapat memperbarui Kebijakan Cookie ini jika alat atau persyaratan hukum berubah. Perubahan
        material akan tercermin pada tanggal &quot;Terakhir diperbarui&quot; di halaman ini.
      </p>

      <h2>Kontak</h2>
      <p>
        Pertanyaan tentang cookie? Email{' '}
        <a href="mailto:support@patuhdata.id">support@patuhdata.id</a> atau telepon{' '}
        <a href="tel:+6285183064580">+62 851 8306 4580</a>.
      </p>
    </LegalPageLayout>
  );
}
