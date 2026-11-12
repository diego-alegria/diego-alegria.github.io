
import { BriefcaseBusiness, MapPin } from 'lucide-react'
import type { WorkExperience } from '../../data/experience'

interface ExperienceCardProps {
  experience: WorkExperience
  index: number
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-10 pb-12 last:pb-0">

      {/* Línea de tiempo */}
      <div className="absolute left-0 top-0 flex h-full flex-col items-center">
        <div
          className={`z-10 h-4 w-4 rounded-full border-4 border-background ${
            index === 0 ? 'bg-primary' : 'bg-slate-600'
          }`}
        />

        <div className="w-px flex-1 bg-white/10" />
      </div>

      {/* Tarjeta */}
      <article className="rounded-xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-primary/40 md:p-8">

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-medium text-primary">
            {experience.period}
          </span>

          {index === 0 && (
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
              Experiencia reciente
            </span>
          )}
        </div>

        <h3 className="mb-2 text-xl font-bold md:text-2xl">
          {experience.role}
        </h3>

        <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
          <span className="flex items-center gap-2">
            <BriefcaseBusiness size={16} />
            {experience.company}
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={16} />
            {experience.location}
          </span>
        </div>

        <p className="mb-6 leading-relaxed text-text-secondary">
          {experience.description}
        </p>

        <ul className="mb-7 space-y-3">
          {experience.achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {achievement}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-primary/10 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
            >
              {technology}
            </span>
          ))}
        </div>

      </article>
    </div>
  )
}
