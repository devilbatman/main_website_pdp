export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: 'uu-pdp',
    title: 'Panduan Lengkap Kepatuhan UU PDP Indonesia 2026',
    description: 'Segala hal yang perlu Anda ketahui tentang implementasi dan sanksi Undang-Undang Pelindungan Data Pribadi.',
    date: '15 Mei 2026',
    image: '/blog/uu-pdp.jpg',
    category: 'Regulasi',
    content: `
      <p>Per Mei 2026, UU No. 27 Tahun 2022 (UU PDP) telah sepenuhnya mengikat secara hukum bagi seluruh subjek hukum di Indonesia. Ketidaktahuan akan regulasi bukan lagi pembelaan yang sah.</p>
      <h2>Status Penegakan 2026</h2>
      <p>Masa transisi dua tahun telah berakhir. Kini, perusahaan yang gagal mematuhi ketentuan perlindungan data pribadi menghadapi risiko denda administratif hingga 2% dari pendapatan tahunan.</p>
      <h2>Langkah Strategis</h2>
      <p>Perusahaan harus segera melakukan audit kepatuhan, menunjuk Data Protection Officer (DPO), dan memastikan sistem keamanan data sesuai standar internasional.</p>
    `
  },
  {
    slug: 'badan-pdp-2026',
    title: 'Pembentukan Badan PDP 2026: Apa yang Perlu Diketahui?',
    description: 'Analisis rencana pembentukan Badan Pelindungan Data Pribadi dan implikasinya terhadap pengawasan data.',
    date: '10 Mei 2026',
    image: '/blog/badan-pdp.jpg',
    category: 'Otoritas',
    content: `
      <p>Salah satu mandat paling krusial dari UU No. 27 Tahun 2022 adalah pembentukan lembaga penyelenggara pelindungan data pribadi yang bertanggung jawab langsung kepada Presiden.</p>
      <h2>Wewenang Badan PDP</h2>
      <p>Badan ini akan memiliki kuasa penuh untuk melakukan audit, menjatuhkan sanksi, hingga menyelesaikan sengketa data pribadi secara independen.</p>
    `
  },
  {
    slug: 'strategi-kepatuhan-korporasi',
    title: '7 Strategi Kepatuhan UU PDP untuk Korporasi Indonesia',
    description: 'Panduan praktis langkah demi langkah bagi korporasi untuk mencapai kepatuhan penuh.',
    date: '5 Mei 2026',
    image: '/blog/strategi.jpg',
    category: 'Strategi',
    content: `
      <p>Banyak korporasi di Indonesia masih menganggap kepatuhan UU PDP hanya sekadar memperbarui "Privacy Policy" di website. Padahal, kepatuhan sejati melibatkan perubahan fundamental.</p>
      <h2>Mapping Data</h2>
      <p>Langkah pertama yang paling krusial adalah melakukan pemetaan data untuk memahami aliran informasi dalam organisasi Anda.</p>
    `
  },
  {
    slug: 'audit-kepatuhan-pdp',
    title: 'Audit Kepatuhan PDP: Kesiapan Teknis vs Hukum',
    description: 'Menyeimbangkan aspek teknologi informasi dan legalitas dalam menghadapi audit kepatuhan data.',
    date: '20 Mei 2026',
    image: '/blog/audit-kepatuhan.png',
    category: 'Audit',
    content: `
      <p>Audit kepatuhan PDP bukan hanya soal checklist legalitas, tapi juga tentang ketangguhan infrastruktur IT dalam melindungi data sensitif.</p>
      <h2>Pilar Audit Utama</h2>
      <ul>
        <li>Enkripsi data saat diam dan berpindah.</li>
        <li>Manajemen akses berbasis peran (RBAC).</li>
        <li>Logging dan pemantauan aktivitas pemrosesan data.</li>
      </ul>
      <p>Keselarasan antara tim legal dan tim IT adalah kunci sukses dalam melewati audit Badan PDP.</p>
    `
  },
  {
    slug: 'peran-dpo-cybersecurity-2026',
    title: 'Peran DPO dalam Menghadapi Ancaman Siber 2026',
    description: 'Bagaimana Data Protection Officer menjadi garda terdepan dalam mitigasi risiko kebocoran data.',
    date: '25 Mei 2026',
    image: '/blog/dpo-cybersecurity.png',
    category: 'Keamanan',
    content: `
      <p>Di tahun 2026, ancaman siber semakin canggih. DPO tidak lagi hanya bertugas mengurus administrasi, tapi juga terlibat dalam strategi keamanan siber perusahaan.</p>
      <h2>Mitigasi Risiko</h2>
      <p>DPO harus mampu menilai risiko dari setiap pemrosesan data (DPIA) dan memberikan rekomendasi teknis untuk mencegah insiden sebelum terjadi.</p>
      <p>Kolaborasi antara DPO dan CISO (Chief Information Security Officer) menjadi sangat vital di era digital saat ini.</p>
    `
  }
];
