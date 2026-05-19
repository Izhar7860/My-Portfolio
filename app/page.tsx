import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import TechStackSection from '@/components/TechStackSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CertificationsSection from '@/components/CertificationsSection'
import BlogSection from '@/components/BlogSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Layout from '@/components/Layout'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: '%s | ' + siteConfig.title,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Khan Izharul Haq Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@khanizharulhaq',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function Home() {
  return (
    <Layout>
      <main className="bg-slate-950 text-slate-100">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TechStackSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <CertificationsSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
      </main>
    </Layout>
  )
}
