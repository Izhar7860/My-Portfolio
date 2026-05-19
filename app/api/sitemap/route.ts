import { NextResponse } from 'next/server'

const baseUrl = 'https://khanizharulhaq.com'

const staticPages = ['/', '/blog', '/projects', '/contact']

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((path) => {
        return `<url><loc>${baseUrl}${path}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
      })
      .join('')}
  </urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
