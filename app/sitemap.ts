import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.theaiadvantageco.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`,        lastModified, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/pricing`,  lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/contact`,  lastModified, changeFrequency: 'yearly',  priority: 0.6 },
  ];
}
