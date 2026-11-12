
import { useState } from 'react'
import Container from './Container'

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <a
            href="#inicio"
            className="text-xl font-bold tracking-tight text-text-primary"
          >
            Diego<span className="text-primary">.</span>
          </a>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md border border-white/20 px-3 py-2 text-text-primary lg:hidden"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Navegación móvil"
            className="flex flex-col gap-5 border-t border-white/10 py-6 lg:hidden"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-text-secondary transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  )
}
