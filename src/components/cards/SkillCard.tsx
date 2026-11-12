
import {
  Server,
  Code2,
  Database,
  Cloud,
  FlaskConical,
  Wrench,
} from 'lucide-react'

import type { SkillCategory } from '../../data/skills'

interface SkillCardProps {
  category: SkillCategory
}

const icons = {
  server: Server,
  code: Code2,
  database: Database,
  cloud: Cloud,
  testing: FlaskConical,
  tools: Wrench,
}

export default function SkillCard({
  category,
}: SkillCardProps) {
  const Icon = icons[category.icon]

  return (
    <article className="group rounded-xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-8">

      {/* Encabezado */}
      <div className="mb-6 flex items-start gap-4">
        <div className="rounded-lg bg-primary/10 p-3 text-primary">
          <Icon size={24} />
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">
            {category.title}
          </h3>

          <p className="text-sm leading-relaxed text-text-secondary">
            {category.description}
          </p>
        </div>
      </div>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className={`rounded-md border px-3 py-2 text-xs font-medium transition-colors ${
              skill.featured
                ? 'border-primary/30 bg-primary/10 text-primary'
                : 'border-white/10 bg-background text-text-secondary group-hover:border-white/20'
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>

    </article>
  )
}
