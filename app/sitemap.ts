import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aaronts127pdz.vercel.app';

  const routes = [
    '',
    '/about-atspdz',
    '/projects',
    '/resume',
    '/achievements',
    '/gallery',
    '/contact',
    '/feedback',
    '/accessibility',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
    '/disclaimer',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
