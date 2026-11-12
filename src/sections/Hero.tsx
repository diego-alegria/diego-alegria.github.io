import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Code2,
  Server,
  Database,
} from 'lucide-react'

import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa6'

import Container from '../components/layout/Container'

const technologies = [
  { name: 'Java / Spring Boot', icon: Server },
  { name: 'React / TypeScript', icon: Code2 },
  { name: 'PostgreSQL / SQL', icon: Database },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100vh-5rem)] scroll-mt-20 items-center overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-16 py-24 lg:grid-cols-2">

          {/* Presentación */}
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">
                Full Stack Software Developer
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Hola, soy
              <br />
              <span className="text-primary">
                Diego Alegría.
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-text-secondary">
              Desarrollador de software con más de 10 años
              de experiencia construyendo soluciones
              empresariales y aplicaciones web modernas.
              Especializado en Java, Spring Boot, React
              y TypeScript.
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-black transition-all hover:-translate-y-1 hover:opacity-90"
              >
                Ver proyectos
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Contactar
                <Mail size={18} />
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com/diego-alegria"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-secondary transition-colors hover:text-primary"
              >
                <FaGithub  size={23} />
              </a>

              <a
                href="#contacto"
                aria-label="LinkedIn y contacto"
                className="text-text-secondary transition-colors hover:text-primary"
              >
                <FaLinkedin  size={23} />
              </a>

              <a
                href="#contacto"
                aria-label="Correo de contacto"
                className="text-text-secondary transition-colors hover:text-primary"
              >
                <Mail size={23} />
              </a>
            </div>
          </div>

          {/* Tarjeta tecnológica */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-surface/80 p-8 shadow-2xl backdrop-blur">

              <div className="mb-8 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-4 font-mono text-xs text-text-secondary">
                  developer-profile.ts
                </span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <p>
                  <span className="text-purple-400">const</span>
                  {' developer = {'}
                </p>

                <p className="pl-5">
                  <span className="text-primary">name:</span>
                  {' "Diego Alegría",'}
                </p>

                <p className="pl-5">
                  <span className="text-primary">role:</span>
                  {' "Full Stack Developer",'}
                </p>

                <p className="pl-5">
                  <span className="text-primary">experience:</span>
                  {' "10+ years",'}
                </p>

                <p className="pl-5">
                  <span className="text-primary">focus:</span>
                  {' "Java + React",'}
                </p>

                <p>{'}'}</p>
              </div>

              <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
                {technologies.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 text-text-secondary"
                  >
                    <Icon size={20} className="text-primary" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <a
          href="#sobre-mi"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary"
        >
          Explorar portafolio
          <ArrowDown size={16} />
        </a>
      </Container>
    </section>
  )
}
