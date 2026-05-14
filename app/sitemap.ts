import type { MetadataRoute } from 'next';
import { articles } from '../data/blog';
import { services } from '../data/services';

const siteUrl = 'https://patuhdata.id';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/layanan',
    '/blog',
    '/privacy-policy',
    '/terms-conditions',
    '/cookies',
  ];

  const blogRoutes = articles.map((post) => `/blog/${post.slug}`);
  const serviceRoutes = services.map((service) => `/layanan/${service.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith('/blog') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/blog') ? 0.7 : route.startsWith('/layanan') ? 0.9 : 0.8,
  }));
}
