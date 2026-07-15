import { MetadataRoute } from 'next'

export default function robots() {
  const baseUrl =  'https://marshal-m-m.com/Explosive.html'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/user/', '/api/', '/_next/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}