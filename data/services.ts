export interface Service {
  slug: string;
  title: string;
  description: string;
  heroDescription: string;
  intro: string;
  idealFor: string[];
  deliverables: string[];
  process: string[];
  outcomes: string[];
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: 'risk-orchestration-readiness',
    title: 'Risk Orchestration Readiness',
    description:
      'Membangun risk register, ownership, remediation workflow, dan evidence tracking untuk risiko data, AI, vendor, dan compliance.',
    heroDescription:
      'Ubah temuan gap menjadi risk register, owner, workflow perbaikan, dan bukti siap audit.',
    intro:
      'Dari daftar temuan ke risiko yang terpantau: prioritas, owner, status perbaikan, dan evidence untuk audit atau review manajemen.',
    idealFor: [
      'Banyak temuan, belum ada tracking terpusat',
      'Legal, compliance, risk, IT, dan operations butuh satu sumber risiko',
      'Persiapan audit atau review manajemen',
    ],
    deliverables: [
      'Risk register untuk risiko data, AI, vendor, dan compliance',
      'Model prioritas risiko berdasarkan impact, urgency, owner, dan readiness',
      'Remediation workflow dengan status, target waktu, dan action owner',
      'Evidence tracking untuk keputusan, SOP, approval, dan bukti implementasi',
    ],
    process: [
      'Menilai kondisi risiko dan temuan yang sudah ada',
      'Mencatat risiko dalam format yang konsisten dan bisa dipantau',
      'Memprioritaskan berdasarkan dampak bisnis, regulasi, sensitivitas data, dan urgensi',
      'Menetapkan owner dan tindak lanjut lintas legal, IT, risk, compliance, procurement, dan operations',
      'Memperbaiki dengan pelacakan status, deadline, dan keputusan',
      'Mendokumentasikan bukti setiap penyelesaian agar siap audit, review, atau pelaporan manajemen',
    ],
    outcomes: [
      'Risiko tidak berhenti sebagai laporan, tetapi masuk ke workflow operasional',
      'Manajemen memiliki visibility atas prioritas dan progres remediation',
      'Tim memiliki bukti yang bisa ditelusuri untuk audit dan keputusan compliance',
    ],
    keywords: [
      'orkestrasi risiko',
      'kesiapan orkestrasi risiko',
      'platform orkestrasi risiko',
      'register risiko',
      'manajemen risiko AI',
      'risiko vendor',
      'pelacakan bukti',
    ],
  },
  {
    slug: 'pdp-readiness-assessment',
    title: 'Gap Assessment UU PDP',
    description: 'Gap assessment kesiapan operasional terhadap UU PDP—temuan prioritas dan rencana perbaikan.',
    heroDescription:
      'Assessment 52 kontrol operasional UU PDP—plus template ROPA, gap register, dan roadmap remediasi untuk bank & fintech.',
    intro:
      'Layanan inti Patuhdata: penilaian terhadap 52 kontrol operasional (tata kelola, consent, keamanan, vendor, insiden, dokumentasi) diselaraskan prinsip UU PDP. Bukan sekadar cek dokumen—setiap gap punya owner, prioritas, dan template lanjutan.',
    idealFor: [
      'Bank, BPR, dan fintech yang menyiapkan kepatuhan UU PDP',
      'Tim legal, compliance, risk, IT, dan operations yang perlu menyelaraskan proses',
      'Institusi keuangan yang mengelola data nasabah, karyawan, dan mitra pihak ketiga',
    ],
    deliverables: [
      'Assessment 52 kontrol operasional UU PDP (matriks status & owner)',
      'Paket template: ROPA, gap register, vendor checklist, roadmap 90 hari',
      'Preliminary gap summary untuk manajemen',
      'Remediation roadmap dan indeks bukti audit',
    ],
    process: [
      'Review alur data: koleksi, penggunaan, penyimpanan, pembagian',
      'Identifikasi gap kebijakan, SOP, akses, dan vendor',
      'Prioritisasi berdasarkan risiko & dampak bisnis',
      'Serahkan rekomendasi yang bisa langsung dijalankan tim',
    ],
    outcomes: [
      'Peta gap UU PDP yang jelas',
      'Prioritas implementasi terurut',
      'Dasar bukti untuk regulator & mitra',
    ],
    keywords: [
      'UU PDP',
      'gap assessment PDP',
      '52 kontrol UU PDP',
      'template gap assessment',
      'konsultan UU PDP bank fintech',
    ],
  },
  {
    slug: 'operational-data-governance',
    title: 'Operational Data Governance',
    description: 'Pendampingan SOP, tata kelola data, dan implementasi proses operasional.',
    heroDescription:
      'SOP, peran, dan kontrol data yang bisa dijalankan tim operasional—bukan hanya di dokumen.',
    intro:
      'Perjelas owner, kontrol, dan alur kerja data lintas fungsi agar tata kelola praktis dan terukur.',
    idealFor: [
      'Proses data lintas tim belum terdokumentasi',
      'Perlu owner, kontrol, dan persetujuan yang jelas',
      'Ingin menurunkan risiko operasional penggunaan data',
    ],
    deliverables: [
      'Struktur peran dan tanggung jawab tata kelola data',
      'SOP dan kontrol operasional terkait data',
      'RACI atau workflow governance untuk proses penting',
      'Rekomendasi monitoring dan review berkala',
    ],
    process: [
      'Memetakan proses bisnis yang melibatkan data penting',
      'Menentukan prinsip, peran, dan kontrol yang relevan',
      'Menyusun SOP dan workflow yang mudah diadopsi tim',
      'Membantu transisi dari policy menjadi proses operasional',
    ],
    outcomes: [
      'Alur kerja data menjadi lebih jelas dan terkontrol',
      'Risiko akses, penggunaan, dan perubahan data lebih mudah dipantau',
      'Tim memiliki panduan praktis untuk menjalankan tata kelola data',
    ],
    keywords: ['operational data governance', 'tata kelola data', 'SOP data governance'],
  },
  {
    slug: 'ai-governance-readiness',
    title: 'AI Governance Readiness',
    description: 'Panduan penggunaan AI yang aman, bertanggung jawab, dan sesuai tata kelola data.',
    heroDescription:
      'Kontrol penggunaan AI yang aman, bertanggung jawab, dan selaras tata kelola data.',
    intro:
      'Untuk tim yang mulai memakai AI: batasan, kontrol data, dan akuntabilitas sebelum adopsi meluas.',
    idealFor: [
      'AI dipakai di operasional atau layanan pelanggan',
      'Perlu mengelola risiko data, privasi, dan output AI',
      'Menyiapkan prinsip internal sebelum skala lebih besar',
    ],
    deliverables: [
      'Assessment risiko penggunaan AI',
      'Prinsip dan guardrail penggunaan AI internal',
      'Rekomendasi kontrol data untuk AI workflow',
      'Checklist readiness untuk implementasi AI governance',
    ],
    process: [
      'Mengidentifikasi use case AI dan data yang terlibat',
      'Menilai risiko privasi, keamanan, bias, dan akuntabilitas',
      'Menyusun kontrol dan batasan penggunaan AI',
      'Membuat rekomendasi governance yang bisa dioperasikan tim',
    ],
    outcomes: [
      'Penggunaan AI memiliki batasan dan kontrol yang lebih jelas',
      'Risiko data dan privasi dapat dikelola sejak awal',
      'Organisasi siap mengembangkan AI secara lebih bertanggung jawab',
    ],
    keywords: ['AI governance', 'AI governance readiness', 'tata kelola AI', 'responsible AI'],
  },
  {
    slug: 'vendor-risk-review',
    title: 'Vendor Readiness Sprint',
    description:
      'Sprint terstruktur untuk kesiapan vendor—kontrol data, bukti, dan prioritas sebelum due diligence enterprise.',
    heroDescription:
      'Satu vendor atau entitas Anda: skor kesiapan, gap utama, dan daftar perbaikan sebelum review bank atau klien enterprise.',
    intro:
      'Vendor Readiness Sprint adalah paket assessment Patuhdata untuk pihak ketiga dan vendor—bukan sekadar “vendor risk review” generik, melainkan engagement 2 minggu dengan deliverable siap due diligence. Kami menilai kontrak, kontrol data, keamanan, dan bukti operasional.',
    idealFor: [
      'SaaS, fintech, atau vendor yang menghadapi kuesioner keamanan bank',
      'Tim procurement, legal, atau compliance yang butuh jawaban terstruktur',
      'Organisasi yang ingin memperkuat kontrol pihak ketiga sebelum deal ditutup',
    ],
    deliverables: [
      'Vendor readiness score dan ringkasan untuk manajemen',
      'Checklist assessment risiko vendor (kontrol & data handling)',
      'Top gaps dengan prioritas mitigasi',
      'Rekomendasi klausul dan kontrol operasional',
    ],
    process: [
      'Kick-off: ruang lingkup vendor/entitas dan data yang diproses',
      'Review kontrak, akses, keamanan, dan dokumentasi kontrol',
      'Identifikasi gap dan prioritas berdasarkan risiko bisnis',
      'Serahkan sprint report dan rencana tindak lanjut',
    ],
    outcomes: [
      'Lebih siap menghadapi due diligence enterprise',
      'Risiko pihak ketiga terlihat dan terukur',
      'Dasar bukti untuk procurement dan compliance',
    ],
    keywords: [
      'vendor readiness sprint',
      'vendor risk review',
      'third party risk',
      'vendor governance',
      'due diligence vendor',
    ],
  },
  {
    slug: 'advisory-retainer',
    title: 'Advisory & Retainer',
    description: 'Pendampingan berkala untuk tata kelola data dan operasional compliance.',
    heroDescription:
      'Pendampingan berkala untuk keputusan tata kelola data dan compliance yang praktis.',
    intro:
      'Partner diskusi rutin saat membangun dan memperbaiki tata kelola data—arah praktis untuk isu operasional harian.',
    idealFor: [
      'Sedang menjalankan roadmap tata kelola data',
      'Butuh second opinion keputusan data & compliance',
      'Ingin menjaga momentum setelah gap assessment',
    ],
    deliverables: [
      'Sesi advisory berkala',
      'Review dokumen, SOP, workflow, atau vendor terkait data',
      'Rekomendasi praktis untuk isu operasional yang muncul',
      'Pendampingan prioritas implementasi dan monitoring',
    ],
    process: [
      'Menentukan ruang lingkup advisory dan ritme pendampingan',
      'Membahas isu operasional, risiko, atau keputusan yang sedang berjalan',
      'Memberikan rekomendasi berbasis prioritas bisnis dan kepatuhan',
      'Mengevaluasi progres implementasi secara berkala',
    ],
    outcomes: [
      'Tim memiliki partner yang memahami konteks operasional',
      'Keputusan compliance menjadi lebih cepat dan terarah',
      'Implementasi data governance tetap berjalan konsisten',
    ],
    keywords: ['data governance advisory', 'compliance retainer', 'advisory UU PDP'],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
