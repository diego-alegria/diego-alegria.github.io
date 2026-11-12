
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
} from 'lucide-react'

import { FaGithub, FaLinkedin } from 'react-icons/fa6'

import Container from '../components/layout/Container'
import { profile } from '../data/profile'

export default function Contact() {
  const hasEmail = Boolean(profile.email)
  const hasLinkedin = Boolean(profile.linkedin)

  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-t border-white/5 py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          {/* Encabezado */}
          <p className="mb-4 text-sm font-semibold tracking-widest text-primary">
            05 / CONTACTO
          </p>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            ¿Trabajamos juntos?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Estoy interesado en oportunidades de desarrollo
            Backend Java y Full Stack, donde pueda aportar
            mi experiencia construyendo soluciones de software.
          </p>

          {/* Disponibilidad */}
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">
              {profile.availability}
            </span>
          </div>

          {/* Acciones */}
          <div className="mb-14 flex flex-wrap items-center justify-center gap-4">

            {hasEmail && (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3 font-semibold text-background transition-all hover:brightness-110"
              >
                <Mail size={19} />
                Enviar correo
                <ArrowUpRight size={17} />
              </a>
            )}

            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-3 rounded-lg border border-white/15 px-6 py-3 font-semibold transition-all hover:border-primary/50 hover:text-primary"
            >
              <Download size={19} />
              Descargar CV
            </a>

          </div>

          {/* Redes profesionales */}
          <div className="flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10">

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-primary"
              aria-label="GitHub de Diego Alegría"
            >
              <FaGithub size={22} />
              GitHub
            </a>

            {hasLinkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-primary"
                aria-label="LinkedIn de Diego Alegría"
              >
                <FaLinkedin size={22} />
                LinkedIn
              </a>
            )}

            <span className="inline-flex items-center gap-2 text-text-secondary">
              <MapPin size={20} />
              {profile.location}
            </span>

          </div>

        </div>
      </Container>
    </section>
  )
}
