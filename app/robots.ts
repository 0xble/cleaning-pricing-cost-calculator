import { MetadataRoute } from 'next'

// TODO: Generate robots.txt file
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      // userAgent: '*',
      // allow: '/',
      // disallow: '/private/',
    },
    // sitemap: 'https://acme.com/sitemap.xml',
  }
}
