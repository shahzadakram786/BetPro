import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Keeps Google out of your Sanity Studio/Admin area
    },
    sitemap: 'https://dealerbetpro.live/sitemap.xml',
  };
}