const testimonials = [
  {
    author: 'Sonia Patel',
    role: 'Founder, SaaS Startup',
    quote: 'Khan delivered an ultra-fast portfolio website with exceptional SEO and a beautiful brand-first design.',
  },
  {
    author: 'Arjun Sharma',
    role: 'Product Manager',
    quote: 'The site feels premium, loads instantly, and the communication was excellent throughout the project.',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Testimonials</p>
            <h2 className="section-title text-white">Trusted by founders and product teams.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="glass-card rounded-[2rem] border border-white/10 p-8">
                <p className="text-slate-300">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
