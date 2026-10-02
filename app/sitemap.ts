import type { MetadataRoute } from 'next';
import { INSIGHTS_DATA } from '@/data/insightsData';
import { PRODUCTS_DATA } from '@/data/productsData';
import { SITE_URL } from '@/lib/seo';

const staticRoutes = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/export-markets', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/insights', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/our-process', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/packaging-logistics', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/quality-compliance', changeFrequency: 'monthly', priority: 0.7 },
].map((route) => ({
  url: new URL(route.path, SITE_URL).toString(),
  lastModified: new Date(),
  changeFrequency: route.changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
  priority: route.priority,
})) satisfies MetadataRoute.Sitemap;

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS_DATA.map((product) => ({
    url: new URL(`/products/${product.slug}`, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS_DATA.map((article) => ({
    url: new URL(`/insights/${article.slug}`, SITE_URL).toString(),
    lastModified: new Date(article.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  // For CMS-backed content, append routes from an async data source here:
  // const posts = await getPublishedPosts();
  // return [...staticRoutes, ...posts.map((post) => ({
  //   url: new URL(`/insights/${post.slug}`, SITE_URL).toString(),
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))];

  return [...staticRoutes, ...productRoutes, ...insightRoutes];
}