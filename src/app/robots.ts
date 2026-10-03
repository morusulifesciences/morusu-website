import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/privacy', '/terms'], // Following note: "Choose one policy for privacy/terms... noindex and excluded"
    },
    sitemap: 'https://morusulifesciences.com/sitemap.xml',
  };
}
