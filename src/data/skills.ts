
export interface Skill {
  name: string
  featured?: boolean
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  icon: 'server' | 'code' | 'database' | 'cloud' | 'testing' | 'tools'
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend',
    description: 'Desarrollo de APIs y lógica de negocio.',
    icon: 'server',
    skills: [
      { name: 'Java', featured: true },
      { name: 'Spring Boot', featured: true },
      { name: 'Spring Security' },
      { name: 'JPA / Hibernate' },
      { name: 'C#' },
      { name: 'ASP.NET Core' },
      { name: 'JWT' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces web modernas y responsivas.',
    icon: 'code',
    skills: [
      { name: 'React', featured: true },
      { name: 'TypeScript', featured: true },
      { name: 'JavaScript' },
      { name: 'HTML5 / CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'SPFx' },
      { name: 'Fluent UI' },
      { name: 'Redux Toolkit' },
    ],
  },
  {
    id: 'database',
    title: 'Bases de datos',
    description: 'Persistencia y gestión de información.',
    icon: 'database',
    skills: [
      { name: 'SQL Server', featured: true },
      { name: 'PostgreSQL', featured: true },
      { name: 'SQL' },
      { name: 'Flyway' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Contenedores, despliegue e integración continua.',
    icon: 'cloud',
    skills: [
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Docker Compose' },
      { name: 'GitHub Actions' },
      { name: 'CI/CD' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    description: 'Pruebas y calidad del software.',
    icon: 'testing',
    skills: [
      { name: 'JUnit 5' },
      { name: 'Mockito' },
      { name: 'Testcontainers' },
      { name: 'Jest' },
    ],
  },
  {
    id: 'tools',
    title: 'Herramientas',
    description: 'Control de versiones y documentación técnica.',
    icon: 'tools',
    skills: [
      { name: 'Git' },
      { name: 'GitFlow' },
      { name: 'REST APIs' },
      { name: 'Swagger / OpenAPI' },
      { name: 'Postman' },
    ],
  },
]
