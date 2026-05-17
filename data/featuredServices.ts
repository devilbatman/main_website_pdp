export interface FeaturedService {
  slug: string;
  title: string;
  subtitle?: string;
  tagline: string;
  highlights: string[];
}

export const featuredServices: FeaturedService[] = [
  {
    slug: 'vendor-risk-review',
    title: 'Kesiapan Tata Kelola Vendor',
    subtitle: 'Vendor Governance Readiness',
    tagline:
      'Titik awal tercepat: siapkan due diligence, kuesioner keamanan, dan bukti tata kelola vendor sebelum review klien enterprise.',
    highlights: [
      'Persiapan due diligence vendor',
      'Pendampingan kuesioner keamanan',
      'Penilaian risiko vendor',
      'Organisasi bukti dan evidence',
      'Dokumentasi tata kelola',
    ],
  },
  {
    slug: 'pdp-readiness-assessment',
    title: 'Kesiapan Operasional PDP',
    subtitle: 'PDP Operational Readiness',
    tagline:
      'Mengoperasionalkan UU PDP di lapangan—bukan dokumen hukum semata, melainkan kontrol yang dijalankan tim setiap hari.',
    highlights: [
      'Pemetaan alur data',
      'Tata kelola akses',
      'Penanganan data oleh vendor',
      'Kesiapan insiden',
      'Kontrol operasional',
    ],
  },
  {
    slug: 'risk-orchestration-readiness',
    title: 'Risiko Operasional & Tata Kelola',
    subtitle: 'Operational Risk & Governance',
    tagline:
      'Onboarding, alur risiko, dan bukti audit dalam satu pola kerja—lebih dari konsultasi, ini operasi yang terukur.',
    highlights: [
      'Tata kelola onboarding',
      'Alur kerja risiko',
      'Kesiapan audit',
      'Standarisasi proses',
      'Manajemen bukti',
    ],
  },
];
