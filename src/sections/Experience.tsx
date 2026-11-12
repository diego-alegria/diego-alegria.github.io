
import Container from '../components/layout/Container'
import ExperienceCard from '../components/cards/ExperienceCard'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-24 border-t border-white/5 py-24 md:py-32"
    >
      <Container>

        {/* Encabezado */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-primary">
            02 / EXPERIENCIA
          </p>

          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            Mi trayectoria profesional
          </h2>

          <p className="text-lg leading-relaxed text-text-secondary">
            Más de 10 años participando en el desarrollo
            de soluciones empresariales, aplicaciones web
            y servicios backend, utilizando distintas
            tecnologías y plataformas.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto max-w-4xl">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

      </Container>
    </section>
  )
}
