import type { Metadata } from 'next';
import type { Article } from '@/data/blog';
import { SITE_URL, createPageMetadata } from '@/lib/seo';

export function getArticleMetadata(article: Article): Metadata {
  const base = createPageMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
    ogType: 'article',
    ogImage: article.image,
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  };
}

export function getArticleJsonLd(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'PatuhData',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PatuhData',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${article.slug}`,
    },
  };
}
