import { NextResponse } from 'next/server'

const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Sitemap: https://khanizharulhaq.com/sitemap.xml
Host: khanizharulhaq.com
`

export async function GET() {
  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
