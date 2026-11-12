
import Container from '../components/layout/Container'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-[calc(100vh-5rem)] scroll-mt-20 items-center"
    >
      <Container>
        <div className="max-w-4xl py-20">

          <p className="mb-6 font-medium tracking-widest text-primary">
            FULL STACK SOFTWARE DEVELOPER
          </p>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-text-primary md:text-7xl">
            Hola, soy Diego
            <span className="text-primary"> Alegría.</span>
          </h1>

          <p className="mb-10 max-w-2xl text-xl leading-relaxed text-text-secondary">
            Desarrollador de software con más de 10 años de experiencia,
            especializado en Java, Spring Boot, React y TypeScript.
            Diseño y construyo soluciones web robustas, mantenibles
            y escalables.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-black transition-opacity hover:opacity-80"
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-text-primary transition-colors hover:border-primary hover:text-primary"
            >
              Contactar
            </a>
          </div>

        </div>
      </Container>
    </section>
  )
}
