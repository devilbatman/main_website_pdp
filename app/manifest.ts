import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Patuhdata — Konsultan Kepatuhan UU PDP Indonesia',
    short_name: 'Patuhdata',
    description:
      'Konsultan profesional kepatuhan UU PDP untuk bank, fintech, multifinance, dan bisnis digital di Indonesia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00B4D8',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/monogram-pd-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'finance'],
    lang: 'id',
    dir: 'ltr',
  };
}
