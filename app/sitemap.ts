import { MetadataRoute } from 'next';
import { products } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.envecoplast.com';
  const staticPages = ['', '/about', '/products', '/how-it-works', '/why-us', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));

  const productPages = products
    .filter((p) => p.status === 'In Stock')
    .map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }));

  return [...staticPages, ...productPages];
}
