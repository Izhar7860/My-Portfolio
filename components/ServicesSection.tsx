const services = [
  {
    title: 'Portfolio Website Development',
    description:
      'Craft premium developer portfolios that rank in search, convert visitors, and highlight your best work.',
  },
  {
    title: 'SEO & AI Search Optimization',
    description:
      'Implement AI search optimization, schema markup, and modern SEO strategies for higher visibility in 2026.',
  },
  {
    title: 'Web App Performance',
    description:
      'Build lightning-fast PWAs with low LCP, minimal CLS, and resilient mobile UX.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Services</p>
            <h2 className="section-title text-white">Premium development services for modern brands and startups.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="glass-card rounded-[2rem] border border-white/10 p-8">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
