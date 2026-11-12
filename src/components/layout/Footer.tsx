
import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

          <p className="text-sm text-text-secondary">
            © {year} Diego Alegría. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/diego-alegria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-primary"
            >
              GitHub
            </a>

            <a
              href="#contacto"
              className="text-sm text-text-secondary transition-colors hover:text-primary"
            >
              Contacto
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
