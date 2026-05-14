import type { MetadataRoute } from 'next';

const siteUrl = 'https://patuhdata.id';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/pdp-admin'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
