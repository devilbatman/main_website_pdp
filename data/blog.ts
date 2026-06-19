import { content as uuPdpContent } from './blog/content/uu-pdp';
import { content as badanPdpContent } from './blog/content/badan-pdp-2026';
import { content as strategiContent } from './blog/content/strategi-kepatuhan-korporasi';
import { content as auditContent } from './blog/content/audit-kepatuhan-pdp';
import { content as dpoContent } from './blog/content/peran-dpo-cybersecurity-2026';
import { content as breachContent } from './blog/content/kebocoran-data-indonesia-2026';
import { content as gapAssessmentContent } from './blog/content/apa-itu-gap-assessment-pdp';
import { content as ropaContent } from './blog/content/apa-itu-ropa-pdp';
import { content as dpiaContent } from './blog/content/apa-itu-dpia-pdp';
import { content as dpoAasContent } from './blog/content/dpo-as-a-service-pdp';
import { content as dataBreachContent } from './blog/content/data-breach-response-plan-pdp';
import { content as vendorRiskContent } from './blog/content/vendor-risk-assessment-pdp';
import { content as employeeTrainingContent } from './blog/content/employee-privacy-training-pdp';
import { content as privacyByDesignContent } from './blog/content/privacy-by-design-pdp';
import { content as panduanDpoContent } from './blog/content/panduan-lengkap-dpo-2025';
import { content as kasusUuPdpContent } from './blog/content/56-kasus-pelanggaran-uu-pdp-2025';
import { content as checklistUmkmContent } from './blog/content/checklist-kepatuhan-uu-pdp-umkm';

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  publishedAt: string;
  image: string;
  category: string;
  content: string;
  readTimeMinutes: number;
}

export function estimateReadingTime(content: string): number {
  const text = content.replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function buildArticle(
  article: Omit<Article, 'readTimeMinutes'>
): Article {
  return {
    ...article,
    readTimeMinutes: estimateReadingTime(article.content),
  };
}

const articleData: Omit<Article, 'readTimeMinutes'>[] = [
  {
    slug: 'panduan-lengkap-dpo-2025',
    title: 'Panduan Lengkap DPO 2025: Siapa Wajib, Kualifikasi & Langkah Penunjukan',
    description:
      'Putusan MK Juli 2025 mengklarifikasi siapa yang wajib menunjuk Data Protection Officer. Panduan lengkap kualifikasi DPO, langkah penunjukan, dan opsi DPO as a Service untuk UMKM dan scale-up.',
    date: '19 Juni 2026',
    publishedAt: '2026-06-19',
    image: '/blog/dpo-cybersecurity.png',
    category: 'Kepatuhan',
    content: panduanDpoContent,
  },
  {
    slug: '56-kasus-pelanggaran-uu-pdp-2025',
    title: '56 Kasus Pelanggaran UU PDP 2025: Pola, Pelajaran & Cara Menghindarinya',
    description:
      'Analisis mendalam 56 dugaan pelanggaran UU PDP yang tercatat Komdigi hingga Juli 2025. Pola berulang, root cause terbesar, dan checklist praktis agar organisasi Anda tidak menjadi kasus ke-57.',
    date: '19 Juni 2026',
    publishedAt: '2026-06-19',
    image: '/blog/audit-kepatuhan.png',
    category: 'Keamanan',
    content: kasusUuPdpContent,
  },
  {
    slug: 'checklist-kepatuhan-uu-pdp-umkm',
    title: 'Checklist Kepatuhan UU PDP untuk UMKM: 10 Langkah Praktis dalam 60 Hari',
    description:
      'Panduan compliance UU PDP khusus UMKM berkembang. Mulai dari ROPA sederhana, privacy policy, vendor DPA, hingga breach response plan—tanpa budget besar atau tim legal penuh.',
    date: '19 Juni 2026',
    publishedAt: '2026-06-19',
    image: '/blog/audit-kepatuhan.png',
    category: 'UMKM',
    content: checklistUmkmContent,
  },
  {
    slug: 'data-breach-response-plan-pdp',
    title: '3x24 Jam: Mengapa Anda Membutuhkan Data Breach Response Plan?',
    description:
      'Pelajari mengapa merespons kebocoran data dengan cepat dan terstruktur adalah kunci untuk menghindari sanksi regulator dan mempertahankan kepercayaan klien.',
    date: '17 Juni 2026',
    publishedAt: '2026-06-17',
    image: '/blog/dpo-cybersecurity.png',
    category: 'Keamanan',
    content: dataBreachContent,
  },
  {
    slug: 'vendor-risk-assessment-pdp',
    title: 'Audit Vendor Anda: Risiko Pihak Ketiga dalam Ekosistem UU PDP',
    description:
      'Anda bertanggung jawab atas data yang bocor dari server vendor Anda. Pahami pentingnya Vendor Risk Assessment dan Data Processing Agreement.',
    date: '17 Juni 2026',
    publishedAt: '2026-06-17',
    image: '/blog/audit-kepatuhan.png',
    category: 'Kepatuhan',
    content: vendorRiskContent,
  },
  {
    slug: 'employee-privacy-training-pdp',
    title: 'Membangun "Human Firewall": Pentingnya Pelatihan Privasi Karyawan',
    description:
      'Kebijakan 50 halaman tidak ada gunanya jika karyawan tidak membacanya. Mengapa Awareness Training wajib untuk mencegah human error.',
    date: '17 Juni 2026',
    publishedAt: '2026-06-17',
    image: '/blog/dpo-cybersecurity.png',
    category: 'Edukasi',
    content: employeeTrainingContent,
  },
  {
    slug: 'privacy-by-design-pdp',
    title: 'Privacy by Design: Membangun Privasi Sejak Baris Kode Pertama',
    description:
      'Mengenal 7 prinsip dasar Privacy by Design agar produk dan fitur yang Anda bangun sudah mematuhi standar privasi secara otomatis (default).',
    date: '17 Juni 2026',
    publishedAt: '2026-06-17',
    image: '/blog/audit-kepatuhan.png',
    category: 'Teknis',
    content: privacyByDesignContent,
  },
  {
    slug: 'dpo-as-a-service-pdp',
    title: 'DPO as a Service: Manfaat Layanan DPO Eksternal untuk Perusahaan',
    description:
      'Apa itu DPO as a Service? Pelajari manfaat menggunakan ahli privasi eksternal untuk memastikan kepatuhan UU PDP secara efisien, objektif, dan hemat biaya.',
    date: '17 Juni 2026',
    publishedAt: '2026-06-17',
    image: '/blog/dpo-cybersecurity.png',
    category: 'Layanan',
    content: dpoAasContent,
  },
  {
    slug: 'apa-itu-gap-assessment-pdp',
    title: 'Apa itu Gap Assessment UU PDP dan Mengapa Perusahaan Anda Membutuhkannya?',
    description:
      'Panduan lengkap mengenai Gap Assessment Pelindungan Data Pribadi: proses membandingkan praktik pengolahan data saat ini dengan kewajiban UU PDP.',
    date: '17 Juni 2026',
    publishedAt: '2026-06-17',
    image: '/blog/audit-kepatuhan.png',
    category: 'Dasar-Dasar',
    content: gapAssessmentContent,
  },
  {
    slug: 'apa-itu-ropa-pdp',
    title: 'Mengenal ROPA (Record of Processing Activities) dalam Kepatuhan UU PDP',
    description:
      'ROPA adalah pondasi kepatuhan privasi. Pelajari cara menyusun Rekam Kegiatan Pemrosesan Data Pribadi untuk memenuhi standar UU PDP.',
    date: '17 Juni 2026',
    publishedAt: '2026-06-17',
    image: '/blog/audit-kepatuhan.png',
    category: 'Dasar-Dasar',
    content: ropaContent,
  },
  {
    slug: 'apa-itu-dpia-pdp',
    title: 'DPIA: Penilaian Dampak Pelindungan Data Pribadi untuk Risiko Tinggi',
    description:
      'Kapan perusahaan wajib melakukan DPIA? Pahami kriteria risiko tinggi dan langkah-langkah Data Protection Impact Assessment menurut UU PDP.',
    date: '17 Juni 2026',
    publishedAt: '2026-06-17',
    image: '/blog/dpo-cybersecurity.png',
    category: 'Dasar-Dasar',
    content: dpiaContent,
  },
  {
    slug: 'uu-pdp',
    title: 'UU Perlindungan Data Pribadi di 2026: Yang Harus Diketahui Bisnis Berkembang',
    description:
      'Masa transisi berakhir. Begini dampak penegakan UU PDP terhadap tata kelola operasional, risiko vendor, dan kesiapan enterprise bagi perusahaan Indonesia.',
    date: '15 Mei 2026',
    publishedAt: '2026-05-15',
    image: '/blog/uu-pdp.jpg',
    category: 'Regulasi',
    content: uuPdpContent,
  },
  {
    slug: 'badan-pdp-2026',
    title: 'Badan PDP 2026: Status Terkini, Timeline, dan Kesiapan Institusi Keuangan',
    description:
      'Pembaruan Mei 2026: Badan PDP belum berdiri resmi. Kemkomdigi masih mengawasi, Perpres dalam harmonisasi, dan apa yang harus disiapkan bank & fintech sekarang.',
    date: '17 Mei 2026',
    publishedAt: '2026-05-17',
    image: '/blog/audit-kepatuhan.png',
    category: 'Otoritas',
    content: badanPdpContent,
  },
  {
    slug: 'kebocoran-data-indonesia-2026',
    title: 'Kebocoran Data di Indonesia 2026: Pelajaran untuk Bank, Fintech, dan Vendor',
    description:
      'Ringkasan klaim breach publik, respons yang dibutuhkan dalam 72 jam, dan mengapa UU PDP sudah berlaku meski Badan PDP belum aktif.',
    date: '17 Mei 2026',
    publishedAt: '2026-05-17',
    image: '/blog/dpo-cybersecurity.png',
    category: 'Insiden',
    content: breachContent,
  },
  {
    slug: 'strategi-kepatuhan-korporasi',
    title: 'Melebihi Kebijakan Privasi: Tujuh Langkah Kepatuhan Operasional UU PDP',
    description:
      'Peta jalan praktis dari pemetaan data hingga tata kelola vendor — bagi perusahaan yang perlu kepatuhan berjalan di operasi, bukan hanya di kertas.',
    date: '5 Mei 2026',
    publishedAt: '2026-05-05',
    image: '/blog/audit-kepatuhan.png',
    category: 'Strategi',
    content: strategiContent,
  },
  {
    slug: 'audit-kepatuhan-pdp',
    title: 'Audit PDP: Ketika Kesiapan Hukum Bertemu Realitas Teknis',
    description:
      'Mengapa lolos daftar periksa hukum saja tidak cukup — dan bagaimana kontrol TI, jejak bukti, dan kepemilikan lintas fungsi menentukan hasil audit.',
    date: '20 Mei 2026',
    publishedAt: '2026-05-20',
    image: '/blog/audit-kepatuhan.png',
    category: 'Audit',
    content: auditContent,
  },
  {
    slug: 'peran-dpo-cybersecurity-2026',
    title: 'DPO dan CISO: Mengapa Perlindungan Data Butuh Kedalaman Keamanan Siber di 2026',
    description:
      'Petugas Perlindungan Data tidak bisa lagi beroperasi dalam silo hukum. Argumentasi kolaborasi DPO–CISO untuk kesiapan insiden dan pengawasan vendor.',
    date: '25 Mei 2026',
    publishedAt: '2026-05-25',
    image: '/blog/dpo-cybersecurity.png',
    category: 'Keamanan',
    content: dpoContent,
  },
];

export const articles: Article[] = articleData.map(buildArticle);

/** Curated for homepage: latest three long-form insights */
export function getHomepageFeaturedArticles(): {
  featured: Article;
  secondary: Article[];
} {
  const latest = getLatestArticles(3);
  return {
    featured: latest[0],
    secondary: latest.slice(1),
  };
}

export function getLatestArticles(count?: number): Article[] {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return count ? sorted.slice(0, count) : sorted;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
