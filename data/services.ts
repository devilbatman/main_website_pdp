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
    slug: 'pdp-readiness-assessment',
    title: 'PDP Readiness Assessment',
    description: 'Assessment kesiapan operasional dan identifikasi risiko implementasi UU PDP.',
    heroDescription:
      'Membantu organisasi memahami posisi kesiapan UU PDP melalui assessment proses, data flow, kontrol, dan temuan prioritas.',
    intro:
      'Layanan ini memetakan kondisi operasional organisasi terhadap kebutuhan kepatuhan UU PDP. Fokusnya bukan hanya dokumen hukum, tetapi bagaimana data dikumpulkan, digunakan, dibagikan, diamankan, dan dipertanggungjawabkan dalam proses bisnis sehari-hari.',
    idealFor: [
      'Perusahaan yang mulai menyiapkan kepatuhan UU PDP',
      'Tim legal, compliance, risk, IT, dan operations yang perlu menyelaraskan proses',
      'Bisnis digital yang mengelola data pelanggan, pasien, pengguna, atau karyawan',
    ],
    deliverables: [
      'Pemetaan area risiko dan prioritas perbaikan',
      'Gap assessment terhadap proses data utama',
      'Ringkasan temuan dan rekomendasi implementasi',
      'Roadmap awal untuk operational readiness',
    ],
    process: [
      'Review proses pengumpulan, penggunaan, penyimpanan, dan pembagian data',
      'Identifikasi gap pada kebijakan, SOP, akses, vendor, dan kontrol operasional',
      'Prioritisasi temuan berdasarkan risiko dan dampak bisnis',
      'Penyusunan rekomendasi yang bisa langsung ditindaklanjuti',
    ],
    outcomes: [
      'Organisasi memahami gap utama terhadap UU PDP',
      'Tim memiliki prioritas implementasi yang jelas',
      'Kepatuhan mulai diterjemahkan menjadi aktivitas operasional',
    ],
    keywords: ['UU PDP', 'PDP readiness assessment', 'gap assessment PDP', 'konsultan UU PDP'],
  },
  {
    slug: 'operational-data-governance',
    title: 'Operational Data Governance',
    description: 'Pendampingan SOP, tata kelola data, dan implementasi proses operasional.',
    heroDescription:
      'Membangun tata kelola data yang bisa dijalankan oleh tim operasional, bukan hanya tertulis di dokumen.',
    intro:
      'Operational Data Governance membantu organisasi membuat aturan, peran, kontrol, dan alur kerja data yang jelas. Layanan ini cocok untuk perusahaan yang ingin membuat tata kelola data lebih praktis, terukur, dan mudah dijalankan lintas fungsi.',
    idealFor: [
      'Perusahaan dengan proses data lintas tim yang belum terdokumentasi rapi',
      'Organisasi yang perlu memperjelas owner, kontrol, dan alur persetujuan data',
      'Tim yang ingin menurunkan risiko operasional dari penggunaan data sehari-hari',
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
      'Membantu organisasi menyiapkan kontrol penggunaan AI agar tetap aman, bertanggung jawab, dan selaras dengan tata kelola data.',
    intro:
      'AI Governance Readiness dirancang untuk bisnis yang mulai menggunakan AI dalam proses kerja, layanan pelanggan, analisis, atau otomasi. Fokusnya adalah memastikan penggunaan AI memiliki batasan, kontrol, dan akuntabilitas yang jelas.',
    idealFor: [
      'Perusahaan yang mulai menggunakan AI tools dalam operasional',
      'Tim yang perlu mengelola risiko data, privasi, dan output AI',
      'Bisnis yang ingin menyiapkan prinsip internal sebelum adopsi AI lebih luas',
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
    title: 'Vendor Risk Review',
    description: 'Assessment vendor dan pihak ketiga yang mengelola data organisasi.',
    heroDescription:
      'Menilai kesiapan vendor dan pihak ketiga yang memproses data agar risiko operasional dan kepatuhan lebih terkendali.',
    intro:
      'Vendor Risk Review membantu organisasi memahami risiko dari vendor, partner, platform, atau pihak ketiga yang mengakses dan mengelola data. Layanan ini menghubungkan aspek kontrak, kontrol operasional, keamanan, dan tata kelola data.',
    idealFor: [
      'Perusahaan yang menggunakan vendor untuk sistem, customer service, HR, cloud, atau analytics',
      'Tim procurement, legal, compliance, dan operations yang perlu review vendor',
      'Organisasi yang ingin memperkuat kontrol pihak ketiga terhadap data',
    ],
    deliverables: [
      'Checklist dan assessment risiko vendor',
      'Review kontrol data dan keamanan vendor',
      'Rekomendasi klausul dan kontrol operasional',
      'Prioritas mitigasi untuk vendor berisiko tinggi',
    ],
    process: [
      'Memetakan vendor yang mengakses atau memproses data organisasi',
      'Menilai jenis data, tujuan pemrosesan, dan kontrol yang tersedia',
      'Mengidentifikasi gap pada kontrak, akses, keamanan, dan monitoring',
      'Menyusun rekomendasi mitigasi dan tindak lanjut',
    ],
    outcomes: [
      'Risiko pihak ketiga lebih terlihat dan terukur',
      'Tim memiliki dasar yang lebih kuat untuk review vendor',
      'Pengelolaan vendor lebih selaras dengan kebutuhan kepatuhan data',
    ],
    keywords: ['vendor risk review', 'third party risk', 'vendor governance', 'risiko vendor data'],
  },
  {
    slug: 'advisory-retainer',
    title: 'Advisory & Retainer',
    description: 'Pendampingan berkala untuk tata kelola data dan operasional compliance.',
    heroDescription:
      'Pendampingan berkelanjutan untuk membantu tim mengambil keputusan data governance dan compliance secara praktis.',
    intro:
      'Advisory & Retainer cocok untuk organisasi yang membutuhkan partner diskusi berkala saat membangun, menguji, dan memperbaiki tata kelola data. Layanan ini memberi akses ke arahan praktis untuk isu yang muncul dalam operasional harian.',
    idealFor: [
      'Perusahaan yang sedang menjalankan roadmap data governance',
      'Tim yang membutuhkan second opinion untuk keputusan data dan compliance',
      'Organisasi yang ingin menjaga momentum implementasi setelah assessment',
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
