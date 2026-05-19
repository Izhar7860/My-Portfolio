const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'MongoDB', 'Stripe', 'OpenAI', 'Vercel']

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Tech stack</p>
            <h2 className="section-title text-white">Modern stack for high-impact web applications and AI-powered SaaS.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {techStack.map((tech) => (
              <div key={tech} className="glass-card rounded-3xl p-6 text-white">
                <p className="font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
