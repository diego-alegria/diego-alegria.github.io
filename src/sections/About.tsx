
import {
  Code2,
  Layers3,
  Server,
  Workflow,
} from 'lucide-react'

import Container from '../components/layout/Container'
import { profile } from '../data/profile'

const specialties = [
  {
    title: 'Desarrollo Backend',
    description:
      'Construcción de servicios y APIs REST con Java, Spring Boot y bases de datos relacionales.',
    icon: Server,
  },
  {
    title: 'Aplicaciones Full Stack',
    description:
      'Desarrollo de soluciones web integrando React, TypeScript y servicios backend.',
    icon: Layers3,
  },
  {
    title: 'Integración de Sistemas',
    description:
      'Integración de aplicaciones empresariales, servicios y distintas fuentes de datos.',
    icon: Workflow,
  },
  {
    title: 'Buenas prácticas',
    description:
      'Código mantenible, separación de responsabilidades, testing y control de versiones.',
    icon: Code2,
  },
]

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 border-t border-white/5 py-24 md:py-32"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Presentación */}
          <div>
            <p className="mb-4 text-sm font-semibold tracking-widest text-primary">
              01 / SOBRE MÍ
            </p>

            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl">
              {profile.headline}
            </h2>

            <div className="space-y-5">
              {profile.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-relaxed text-text-secondary"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Indicadores */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-surface p-5">
                <p className="mb-2 text-3xl font-bold text-primary">
                  {profile.experienceYears}
                </p>
                <p className="text-xs text-text-secondary">
                  Años de experiencia
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-surface p-5">
                <p className="mb-2 text-xl font-bold text-primary">
                  Full Stack
                </p>
                <p className="text-xs text-text-secondary">
                  Especialidad
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-surface p-5">
                <p className="mb-2 text-xl font-bold text-primary">
                  Santiago
                </p>
                <p className="text-xs text-text-secondary">
                  Chile
                </p>
              </div>
            </div>
          </div>

          {/* Especialidades */}
          <div className="grid gap-4 sm:grid-cols-2">
            {specialties.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                    <Icon size={24} />
                  </div>

                  <h3 className="mb-3 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </Container>
    </section>
  )
}
