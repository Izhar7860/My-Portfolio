import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'

const heroFeatures = [
  'Full Stack Web Developer',
  'AI-Focused Engineer',
  'React & Next.js Specialist',
  'Mobile-First Portfolio Designer',
]

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/5" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-200">
              Mumbai | India | AI + Web3 Ready
            </span>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
              I build premium, future-ready developer experiences for brands, startups, and founders.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Hi, I’m {siteConfig.author}, a full-stack developer, AI developer, and portfolio designer. I create fast, accessible, conversion-focused websites that rank for India-based software engineering keywords.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300">
                Hire me for a project
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-300 hover:text-cyan-300">
                Explore case studies
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {heroFeatures.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 text-center text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.45)]">
              <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Featured work</p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">Portfolio case studies</h2>
                  <p className="mt-3 text-slate-400">
                    High-performance projects built with Next.js, Tailwind, AI optimizations, and SEO-first architecture.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Fast loading</p>
                    <p className="mt-3 text-lg font-semibold text-white">95%+ Lighthouse</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Conversion-first</p>
                    <p className="mt-3 text-lg font-semibold text-white">Lead capture optimized</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
