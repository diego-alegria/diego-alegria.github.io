
export interface PortfolioProject {
  id: string
  title: string
  subtitle: string
  description: string
  image?: string
  imageAlt?: string
  technologies: string[]
  highlights: string[]
  githubUrl?: string
  demoUrl?: string
  status: 'development' | 'completed'
  featured: boolean
}

export const projects: PortfolioProject[] = [
  {
    id: 'adminvet',
    title: 'AdminVet Platform',
    subtitle: 'SaaS de gestión veterinaria',
    description:
      'Plataforma Full Stack multi-tenant para la gestión de clínicas veterinarias, pacientes, profesionales, servicios y citas médicas.',
    technologies: [
      'Java 17',
      'Spring Boot',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'AWS',
      'GitHub Actions',
    ],
    highlights: [
      'Arquitectura multi-tenant con aislamiento de información por clínica.',
      'Autenticación y autorización mediante Spring Security y JWT.',
      'APIs REST con persistencia JPA/Hibernate y migraciones Flyway.',
      'Agenda de citas con vistas de calendario mensual y semanal.',
      'Contenerización, pruebas automatizadas y CI/CD.',
    ],
    githubUrl:
      'https://github.com/alegria-labs/adminvet-platform',
    status: 'development',
    featured: true,
    image: '/images/projects/adminvet-dashboard.png',
    imageAlt: 'Dashboard de AdminVet Platform',
  },
]
