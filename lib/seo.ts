import type { Metadata } from 'next';

export const SITE_URL = 'https://patuhdata.id';
export const SITE_NAME = 'Patuhdata';
/** Default social preview — generated at /opengraph-image (1200×630) */
export const DEFAULT_OG_IMAGE = '/opengraph-image';

export const defaultOgImages = [
  {
    url: DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: 'Patuhdata — Konsultan Kepatuhan UU PDP & Tata Kelola Data untuk Sektor Keuangan Indonesia',
  },
];

type PageMetadataOptions = {
  title: string;
  description: string;
  /** Path without domain, e.g. `/layanan` or `` for homepage */
  path?: string;
  /** Use full title without `| Patuhdata` template */
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
    legalName: 'PT Patuhdata Solusi Nusantara',
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
      telephone: '+62-819-0337-8000',
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

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function getFounderPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Richard Rusli',
    jobTitle: 'Founder & Lead Consultant',
    worksFor: {
      '@type': 'Organization',
      name: 'PT Patuhdata Solusi Nusantara',
      url: SITE_URL,
    },
    url: 'https://www.linkedin.com/in/richard-r-b51120129/',
    sameAs: [
      'https://www.linkedin.com/in/richard-r-b51120129/',
      'https://www.linkedin.com/company/patuhdata-id',
    ],
    description:
      'Lead Consultant untuk kepatuhan UU PDP dan tata kelola data. Lead Auditor ISO 27001 dengan pengalaman governance dan operational security di sektor keuangan Indonesia.',
    knowsAbout: [
      'UU PDP Indonesia',
      'Data Protection',
      'ISO 27001',
      'Compliance Management',
      'Vendor Risk Assessment',
      'Data Governance',
      'Gap Assessment',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Lead Auditor ISO 27001',
    },
  };
}
