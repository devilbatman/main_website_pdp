import type { Metadata } from 'next';

export const SITE_URL = 'https://patuhdata.id';
export const SITE_NAME = 'PatuhData';
/** Default social preview — generated at /opengraph-image (1200×630) */
export const DEFAULT_OG_IMAGE = '/opengraph-image';

export const defaultOgImages = [
  {
    url: DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: 'PatuhData — Tata kelola data & UU PDP untuk sektor keuangan Indonesia',
  },
];

type PageMetadataOptions = {
  title: string;
  description: string;
  /** Path without domain, e.g. `/layanan` or `` for homepage */
  path?: string;
  /** Use full title without `| PatuhData` template */
  absoluteTitle?: boolean;
  ogTitle?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = '',
  absoluteTitle = false,
  ogTitle,
  ogType = 'website',
  ogImage,
  keywords,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = `${SITE_URL}${path}`;
  const images = ogImage
    ? [{ url: ogImage, width: 1200, height: 630, alt: ogTitle ?? title }]
    : defaultOgImages;
  const resolvedOgTitle = ogTitle ?? title;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
    alternates: { canonical },
    openGraph: {
      title: resolvedOgTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'id_ID',
      type: ogType,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedOgTitle,
      description,
      images: images.map((img) =>
        typeof img === 'string' ? img : typeof img.url === 'string' ? img.url : ''
      ),
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      'Tata kelola data dan kepatuhan UU PDP untuk bank, BPR, dan fintech Indonesia.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'id-ID',
  };
}

export function getOrganizationJsonLd() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: 'PT PATUHDATA SOLUSI NUSANTARA',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    sameAs: ['https://www.linkedin.com/company/patuhdata-id'],
    description:
      'Tata kelola data untuk sektor keuangan Indonesia. Kedalaman UU PDP, kontrol operasional, dan bukti audit untuk bank, BPR, dan fintech.',
    founder: {
      '@type': 'Person',
      name: 'Richard Rusli',
      jobTitle: 'Founder',
      url: 'https://www.linkedin.com/in/richard-r-b51120129/',
      sameAs: ['https://www.linkedin.com/in/richard-r-b51120129/'],
    },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    serviceType: [
      'Gap Assessment UU PDP',
      'Tata Kelola Data Operasional',
      'Kesiapan Tata Kelola AI',
      'Tinjauan Risiko Vendor',
      'Kesiapan Orkestrasi Risiko',
      'Advisory dan retainer',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'INFINITI OFFICE, Jl. Permata Regency Jl. H. Kelik, Srengseng',
      addressLocality: 'Jakarta Barat',
      addressRegion: 'DKI Jakarta',
      postalCode: '11630',
      addressCountry: 'ID',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-851-8306-4580',
      contactType: 'customer service',
      areaServed: 'ID',
      availableLanguage: ['Indonesian', 'English'],
    },
  };
}

export function getRootJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [getOrganizationJsonLd(), getWebSiteJsonLd()],
  };
}

export function getFaqPageJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function getServiceJsonLd(service: {
  slug: string;
  title: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/layanan/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    serviceType: service.title,
  };
}
