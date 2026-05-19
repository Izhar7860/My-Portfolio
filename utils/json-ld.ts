import { siteConfig } from '@/config/site'

export const jsonLd = {
  siteStructuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        'url': siteConfig.url,
        'name': siteConfig.title,
        'description': siteConfig.description,
        'publisher': {
          '@type': 'Person',
          'name': siteConfig.author,
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        'name': siteConfig.author,
        'url': siteConfig.url,
        'sameAs': [
          siteConfig.social.github,
          siteConfig.social.linkedin,
          siteConfig.social.instagram,
          siteConfig.social.twitter,
        ],
        'jobTitle': 'Full Stack Developer',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Mumbai',
          'addressRegion': 'Maharashtra',
          'addressCountry': 'IN',
        },
        'email': siteConfig.email,
      },
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        'name': siteConfig.author,
        'url': siteConfig.url,
        'logo': `${siteConfig.url}/og-image.png`,
        'sameAs': [
          siteConfig.social.github,
          siteConfig.social.linkedin,
          siteConfig.social.instagram,
          siteConfig.social.twitter,
        ],
      },
    ],
  },
}
