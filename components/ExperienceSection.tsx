const experiences = [
  {
    company: 'IT Vedant',
    role: 'Data Analyst Intern',
    duration: '2024',
    summary: 'Gained hands-on experience in data analysis workflows, reporting, and collaborative product development.',
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    duration: '2025 - Present',
    summary: 'Delivered high-performance websites, portfolio designs, and SEO-rich landing pages for startups and personal brands.',
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Experience</p>
            <h2 className="section-title text-white">Proven work history building modern digital experiences.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {experiences.map((experience) => (
              <div key={experience.company} className="glass-card rounded-[2rem] border border-white/10 p-8">
                <div className="flex items-center justify-between gap-4 text-slate-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                    <p className="mt-2 text-sm text-slate-400">{experience.company}</p>
                  </div>
                  <span className="rounded-full bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
                    {experience.duration}
                  </span>
                </div>
                <p className="mt-6 text-slate-300">{experience.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
