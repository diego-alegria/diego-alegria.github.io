
import Container from '../components/layout/Container'
import SkillCard from '../components/cards/SkillCard'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section
      id="tecnologias"
      className="scroll-mt-24 border-t border-white/5 py-24 md:py-32"
    >
      <Container>

        {/* Encabezado */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-primary">
            03 / TECNOLOGÍAS
          </p>

          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            Mi stack tecnológico
          </h2>

          <p className="text-lg leading-relaxed text-text-secondary">
            Tecnologías, frameworks y herramientas que
            utilizo para desarrollar aplicaciones web,
            servicios backend y soluciones empresariales.
          </p>
        </div>

        {/* Categorías */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

      </Container>
    </section>
  )
}
