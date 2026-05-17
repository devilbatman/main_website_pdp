import type { Metadata } from 'next';
import type { Article } from '@/data/blog';

const siteUrl = 'https://patuhdata.id';

export function getArticleMetadata(article: Article): Metadata {
  const url = `${siteUrl}/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: 'PatuhData',
      locale: 'id_ID',
      type: 'article',
      publishedTime: article.publishedAt,
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export function getArticleJsonLd(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `${siteUrl}${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'PatuhData',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PatuhData',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${article.slug}`,
    },
  };
}
