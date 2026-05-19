export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About me</p>
            <h2 className="section-title text-white">Award-winning developer crafting premium digital products.</h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              I am Khan Izharul Haq, a full-stack developer based in Mumbai, India. I build modern web applications, AI-powered experiences, and conversion-focused portfolio websites that support business growth, search visibility, and brand differentiation.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-6">
                <h3 className="text-sm uppercase tracking-[0.3em] text-cyan-300">Experience</h3>
                <p className="mt-3 text-white">3+ years across SaaS, agencies, and startup product development.</p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-sm uppercase tracking-[0.3em] text-cyan-300">Specialization</h3>
                <p className="mt-3 text-white">SEO-first web apps, AI-enhanced UIs, React/Next.js, and mobile-first experiences.</p>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
            <h3 className="text-sm uppercase tracking-[0.3em] text-cyan-300">Core strengths</h3>
            <ul className="mt-8 space-y-5 text-slate-300">
              <li className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <strong className="text-white">SEO-first development</strong> for AI visibility, search intent, and discoverability.
              </li>
              <li className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <strong className="text-white">UX-driven design</strong> with polished UI, accessible interactions, and lead conversion.
              </li>
              <li className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <strong className="text-white">Performance optimization</strong> with Lighthouse-ready code, lazy loading, and WebP/AVIF images.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
