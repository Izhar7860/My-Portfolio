import { ReactNode } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-400 selection:text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            {siteConfig.author}
          </Link>
          <nav className="hidden items-center gap-6 md:flex text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#blog" className="hover:text-white">Blog</a>
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t border-white/10 bg-slate-950/95 py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>© 2026 {siteConfig.author}. Built for performance, accessibility, and SEO.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-white">
              GitHub
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-white">
              LinkedIn
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
