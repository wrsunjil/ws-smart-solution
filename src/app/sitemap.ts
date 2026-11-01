import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/siteConfig';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const routes = ['', '/shop/', '/services/', '/portfolio/', '/contact/'];

  return routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.9,
  }));
}

