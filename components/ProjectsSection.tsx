import Link from 'next/link'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Featured projects</p>
            <h2 className="section-title text-white">Projects built with measurable SEO and performance gains.</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.slug} className="glass-card group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 transition hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_40px_120px_rgba(15,23,42,0.3)]">
                <div className="space-y-4">
                  <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-slate-400">{project.description}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-950/80 p-4">
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Problem</p>
                      <p className="mt-3 text-sm text-slate-300">{project.problem}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/80 p-4">
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Solution</p>
                      <p className="mt-3 text-sm text-slate-300">{project.solution}</p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-950/80 p-4">
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Tech</p>
                      <p className="mt-3 text-sm text-slate-300">{project.technologies.join(', ')}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/80 p-4">
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Performance</p>
                      <p className="mt-3 text-sm text-slate-300">{project.performance}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href={project.demoUrl} className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300" aria-label={`View live demo for ${project.title}`}>
                      Live demo
                    </Link>
                    <Link href={project.githubUrl} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300" aria-label={`View GitHub repository for ${project.title}`}>
                      GitHub
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
