
import Container from '../components/layout/Container'
import ProjectCard from '../components/cards/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-24 border-t border-white/5 py-24 md:py-32"
    >
      <Container>

        {/* Encabezado */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-primary">
            04 / PROYECTOS
          </p>

          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            Proyectos destacados
          </h2>

          <p className="text-lg leading-relaxed text-text-secondary">
            Una selección de proyectos personales y
            soluciones que reflejan mi experiencia en
            desarrollo Full Stack, diseño de APIs,
            persistencia de datos e integración de sistemas.
          </p>
        </div>

        {/* Listado */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </Container>
    </section>
  )
}
