const skills = [
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 92 },
  { name: 'TypeScript', level: 90 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js', level: 88 },
  { name: 'AI & ML APIs', level: 85 },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Skills</p>
            <h2 className="section-title text-white">Technical expertise that supports premium SaaS and portfolio builds.</h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-400">
              A developer toolkit focused on performance, accessibility, modern frontend architecture, and AI-enabled user journeys.
            </p>
          </div>
          <div className="grid gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-sm text-slate-400">{skill.level}%</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-cyan-400" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
