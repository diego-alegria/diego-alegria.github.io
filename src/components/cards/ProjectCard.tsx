
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  GitBranch,
} from 'lucide-react'

import { FaGithub } from 'react-icons/fa6'

import type { PortfolioProject } from '../../data/projects'

interface ProjectCardProps {
  project: PortfolioProject
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">

      {/* Imagen */}
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-background">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-4 text-primary/60">
            <Code2 size={64} strokeWidth={1} />
            <span className="font-mono text-sm">
              {project.id}.tsx
            </span>
          </div>
        )}

        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-background/90 px-3 py-1.5 text-xs text-text-primary backdrop-blur">
          {project.status === 'development'
            ? 'En desarrollo'
            : 'Completado'}
        </span>
      </div>

      {/* Contenido */}
      <div className="p-6 md:p-8">

        <p className="mb-2 text-sm font-medium text-primary">
          {project.subtitle}
        </p>

        <h3 className="mb-4 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mb-6 leading-relaxed text-text-secondary">
          {project.description}
        </p>

        {/* Funcionalidades */}
        <ul className="mb-7 space-y-3">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tecnologías */}
        <div className="mb-8 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-primary/10 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
            >
              <FaGithub size={18} />
              Ver código
              <ArrowUpRight size={16} />
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
            >
              <ExternalLink size={18} />
              Ver demo
            </a>
          )}

          <span className="ml-auto inline-flex items-center gap-2 text-xs text-text-secondary">
            <GitBranch size={15} />
            {project.featured
              ? 'Proyecto destacado'
              : 'Proyecto'}
          </span>

        </div>
      </div>
    </article>
  )
}
