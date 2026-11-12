
import Container from '../layout/Container'

interface SectionPlaceholderProps {
  id: string
  title: string
  description: string
}

export default function SectionPlaceholder({
  id,
  title,
  description,
}: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-white/5 py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <span className="mb-4 block text-sm font-medium text-primary">
            PORTAFOLIO
          </span>

          <h2 className="mb-6 text-3xl font-bold text-text-primary md:text-4xl">
            {title}
          </h2>

          <p className="text-lg leading-relaxed text-text-secondary">
            {description}
          </p>
        </div>
      </Container>
    </section>
  )
}
