
export interface WorkExperience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const experiences: WorkExperience[] = [
  {
    id: 'ayesa',
    company: 'AYESA',
    role: 'Ingeniero Desarrollador',
    period: '2025 – 2026',
    location: 'Chile',
    description:
      'Desarrollo de soluciones empresariales utilizando SharePoint Framework, React y TypeScript.',
    achievements: [
      'Desarrollo de módulos para portales corporativos.',
      'Implementación de formularios, mantenedores y flujos de evaluación.',
      'Integración con SharePoint mediante APIs REST y OData.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'SPFx',
      'SharePoint',
      'REST API',
    ],
  },
  {
    id: 'bridge-it',
    company: 'Bridge-IT',
    role: 'Ingeniero Desarrollador',
    period: '2022 – 2025',
    location: 'Chile',
    description:
      'Desarrollo y mantenimiento de aplicaciones empresariales.',
    achievements: [
      'Implementación de funcionalidades en sistemas corporativos.',
      'Desarrollo e integración de componentes de software.',
      'Trabajo con bases de datos y servicios empresariales.',
    ],
    technologies: [
      'C#',
      '.NET',
      'SQL Server',
      'Java',
    ],
  },
  {
    id: 'tecnova',
    company: 'Tecnova',
    role: 'Desarrollador Backend',
    period: '2021 – 2022',
    location: 'Chile',
    description:
      'Desarrollo de servicios backend y APIs REST utilizando Java y Spring Boot.',
    achievements: [
      'Implementación de APIs REST con Java y Spring Boot.',
      'Autenticación y autorización mediante Spring Security y JWT.',
      'Persistencia utilizando JPA e Hibernate.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'JPA',
      'Hibernate',
    ],
  },
  {
    id: 'plus-consulting',
    company: 'Plus Consulting',
    role: 'Desarrollador de Software',
    period: '2013 – 2019',
    location: 'Chile',
    description:
      'Desarrollo de aplicaciones empresariales e integración de sistemas.',
    achievements: [
      'Desarrollo y mantenimiento de aplicaciones.',
      'Implementación de procesos de integración de datos.',
      'Trabajo con SQL Server y tecnologías Microsoft.',
    ],
    technologies: [
      'C#',
      'SQL Server',
      'SSIS',
    ],
  },
]
