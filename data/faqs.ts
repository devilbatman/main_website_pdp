export type FaqItem = {
  id: number;
  q: string;
  a: string;
};

export const faqs: FaqItem[] = [
  {
    id: 1,
    q: 'Apakah PatuhData firma hukum atau perwakilan regulator?',
    a: 'Tidak. Kami konsultan operasional tata kelola data dan kepercayaan vendor berbasis UU PDP. Untuk opini hukum formal, kami dapat berkoordinasi dengan mitra legal Anda.',
  },
  {
    id: 2,
    q: 'Berapa lama gap assessment biasanya berjalan?',
    a: 'Untuk institusi keuangan menengah, kerangka 2–4 minggu umum dipakai—tergantung jumlah proses, sistem, dan vendor yang dinilai. Vendor readiness yang lebih terfokus dapat lebih singkat.',
  },
  {
    id: 3,
    q: 'Apakah Badan PDP sudah beroperasi?',
    a: 'Per Mei 2026, Badan Perlindungan Data Pribadi belum berdiri resmi. Pengawasan sementara masih melibatkan Kemkomdigi sementara Perpres kelembagaan dalam harmonisasi. Kewajiban UU PDP tetap berlaku—termasuk pengamanan data, hak subjek, dan kesiapan insiden.',
  },
  {
    id: 4,
    q: 'Bagaimana PatuhData berposisi terhadap Kemkomdigi dan Badan PDP?',
    a: 'PatuhData bukan lembaga pemerintah dan tidak mewakili Kemkomdigi atau Badan PDP. Pemerintah membangun kerangka regulasi; kami membangun infrastruktur implementasi untuk sektor swasta—gap assessment, kepercayaan vendor, remediasi, dan bukti operasional. Kami menyelaraskan metodologi dengan arah kebijakan UU PDP tanpa mengklaim pengesahan resmi, kecuali ada perjanjian tertulis yang menyatakan hal tersebut.',
  },
  {
    id: 5,
    q: 'Apa yang dimaksud program kepercayaan vendor (vendor trust)?',
    a: 'Program terstruktur untuk menilai kesiapan vendor—kontrol data, dokumentasi, dan bukti—sebelum due diligence enterprise atau tinjauan mitra. Meliputi vendor readiness assessment, scoring tata kelola, gap register, dan roadmap perbaikan yang dapat dilacak tim Anda serta dibagikan kepada pembeli atau pihak ketiga sesuai kebutuhan kontrak.',
  },
  {
    id: 6,
    q: 'Apakah PatuhData hanya untuk bank besar? Apakah UMKM, SaaS, dan vendor bisa menggunakan layanan ini?',
    a: 'Tidak hanya bank besar. Kami mendampingi bank & BPR, fintech, perusahaan SaaS yang melayani institusi teregulasi, vendor keuangan, layanan kesehatan dengan data sensitif, dan penyedia infrastruktur digital—dengan ruang lingkup dan kedalaman assessment yang disesuaikan skala organisasi Anda.',
  },
  {
    id: 7,
    q: 'Apakah DPO internal wajib menurut UU PDP?',
    a: 'Tidak untuk semua organisasi secara otomatis. UU PDP mengatur kewajiban menunjuk Petugas Perlindungan Data Pribadi (DPO) jika memenuhi kriteria tertentu—misalnya pemrosesan skala besar, kegiatan inti berupa pemrosesan data, atau pemrosesan data sensitif dalam skala signifikan. Institusi keuangan sering masuk profil ini, tetapi penunjukan bisa internal, eksternal, atau gabungan selama mandat, akses, dan independensi terdokumentasi. Gap assessment kami memetakan apakah Anda wajib menunjuk, peran yang belum terisi, dan struktur tata kelola minimum.',
  },
  {
    id: 8,
    q: 'Bagaimana data kami ditangani selama proyek?',
    a: 'NDA sebelum kick-off, akses minimum yang diperlukan, dan penghapusan atau pengembalian materi sesuai kesepakatan kontrak.',
  },
  {
    id: 9,
    q: 'Apakah layanan hanya untuk institusi keuangan besar?',
    a: 'Tidak. Selain bank dan BPR, kami juga mendampingi fintech, SaaS B2B, dan vendor yang melayani sektor finansial—dengan pendekatan yang disesuaikan skala dan kompleksitas operasi Anda.',
  },
  {
    id: 10,
    q: 'Apa langkah pertama yang disarankan?',
    a: 'Mulai dengan konsultasi singkat atau preliminary gap review untuk memetakan prioritas vendor, data, dan kepatuhan sebelum engagement penuh.',
  },
  {
    id: 11,
    q: 'Apa yang dimaksud 52 kontrol?',
    a: 'Kerangka operasional PatuhData untuk menilai kesiapan UU PDP—dari DPO dan consent hingga vendor, keamanan, dan bukti audit. Detail ada di halaman Gap Assessment UU PDP.',
  },
];

/** Legacy shape for components expecting { q, a } */
export const faqsForSchema = faqs.map(({ q, a }) => ({ q, a }));
