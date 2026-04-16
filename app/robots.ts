import { MetadataRoute } from 'next'
/**
 * Robots.txt configuration
 * @returns {MetadataRoute.Robots} - Robots.txt configuration
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://estonoesensalada.com'

  return {    
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
