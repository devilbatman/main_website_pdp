import { content as uuPdpContent } from './blog/content/uu-pdp';
import { content as badanPdpContent } from './blog/content/badan-pdp-2026';
import { content as strategiContent } from './blog/content/strategi-kepatuhan-korporasi';
import { content as auditContent } from './blog/content/audit-kepatuhan-pdp';
import { content as dpoContent } from './blog/content/peran-dpo-cybersecurity-2026';
import { content as breachContent } from './blog/content/kebocoran-data-indonesia-2026';

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
