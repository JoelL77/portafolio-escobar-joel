import { Component, computed, signal } from '@angular/core';
import { SoftSkill, TechnicalSkill } from '../../interfaces/skill.interface';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-skill-pages',
  imports: [TooltipModule],
  templateUrl: './skill-pages.html',
  styleUrl: './skill-pages.css',
})
export class SkillPages {
  selectedCategory = signal('Todas');

  filteredSkills = computed(() => {
    let skills = this.technicalSkills();

    if (this.selectedCategory() !== 'Todas') {
      skills = skills.filter((skill) => skill.category.includes(this.selectedCategory()));
    }

    return [...skills].sort((a, b) => {
      // Primero por nivel (5 → 1)
      if (b.level !== a.level) {
        return b.level - a.level;
      }

      // Si tienen el mismo nivel, ordenar alfabéticamente
      return a.name.localeCompare(b.name);
    });
  });

  categories = ['Todas', 'Frontend', 'Backend', 'Bases de Datos', 'ORM', 'Herramientas', 'DevOps'];

  selectedTab = signal<'technical' | 'soft'>('technical');

  technicalSkills = signal<TechnicalSkill[]>([
    {
      name: 'Angular',
      icon: 'devicon-angular-plain colored',
      category: ['Frontend'],
      years: '5+ años',
      level: 5,
      description:
        'Framework principal para el desarrollo de aplicaciones SPA escalables con arquitectura basada en componentes.',
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain colored',
      category: ['Frontend'],
      years: '5+ años',
      level: 5,
      description:
        'Lenguaje tipado utilizado para desarrollar aplicaciones robustas con Angular, Node.js y NestJS.',
    },
    {
      name: 'JavaScript',
      icon: 'devicon-javascript-plain colored',
      category: ['Frontend'],
      years: '5+ años',
      level: 5,
      description:
        'Desarrollo de aplicaciones web modernas tanto del lado del cliente como del servidor.',
    },
    {
      name: 'HTML5',
      icon: 'devicon-html5-plain colored',
      category: ['Frontend'],
      years: '5+ años',
      level: 5,
      description:
        'Maquetación semántica y accesible siguiendo buenas prácticas de desarrollo web.',
    },
    {
      name: 'CSS3',
      icon: 'devicon-css3-plain colored',
      category: ['Frontend'],
      years: '5+ años',
      level: 5,
      description: 'Diseño responsive utilizando Flexbox, Grid, animaciones y layouts modernos.',
    },
    {
      name: 'Bootstrap',
      icon: 'devicon-bootstrap-plain colored',
      category: ['Frontend'],
      years: '5+ años',
      level: 5,
      description: 'Creación rápida de interfaces responsive mediante componentes reutilizables.',
    },
    {
      name: 'Tailwind CSS',
      icon: 'devicon-tailwindcss-original colored',
      category: ['Frontend'],
      years: '2+ años',
      level: 4,
      description:
        'Framework CSS utilitario para construir interfaces modernas de forma eficiente.',
    },
    {
      name: 'PrimeNG',
      icon: 'devicon-primeng-plain colored',
      category: ['Frontend'],
      years: '4+ años',
      level: 5,
      description:
        'Biblioteca de componentes avanzados para Angular enfocada en aplicaciones empresariales.',
    },
    {
      name: 'RxJS',
      icon: 'devicon-rxjs-plain colored',
      category: ['Frontend'],
      years: '4+ años',
      level: 4,
      description:
        'Programación reactiva mediante Observables para el manejo de eventos y datos asíncronos.',
    },
    {
      name: 'Node.js',
      icon: 'devicon-nodejs-plain colored',
      category: ['Backend'],
      years: '3+ años',
      level: 4,
      description:
        'Desarrollo de APIs REST y aplicaciones backend utilizando JavaScript y TypeScript.',
    },
    {
      name: 'Express',
      icon: 'devicon-express-original colored',
      category: ['Backend'],
      years: '3+ años',
      level: 4,
      description: 'Framework minimalista para crear APIs REST y servidores backend.',
    },
    {
      name: 'NestJS',
      icon: 'devicon-nestjs-original colored',
      category: ['Backend'],
      years: '2+ años',
      level: 4,
      description:
        'Framework backend basado en TypeScript con arquitectura modular y principios SOLID.',
    },
    {
      name: 'Java',
      icon: 'devicon-java-plain colored',
      category: ['Backend'],
      years: '2+ años',
      level: 4,
      description:
        'Desarrollo de aplicaciones backend orientadas a objetos y servicios empresariales.',
    },
    {
      name: 'Spring Boot',
      icon: 'devicon-spring-plain colored',
      category: ['Backend'],
      years: '2+ años',
      level: 4,
      description: 'Desarrollo de APIs REST, microservicios y aplicaciones backend con Spring.',
    },
    {
      name: 'MongoDB',
      icon: 'devicon-mongodb-plain colored',
      category: ['Bases de Datos'],
      years: '2+ años',
      level: 4,
      description: 'Base de datos NoSQL orientada a documentos para aplicaciones escalables.',
    },
    {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain colored',
      category: ['Bases de Datos'],
      years: '3+ años',
      level: 4,
      description: 'Base de datos relacional avanzada utilizada en aplicaciones empresariales.',
    },
    {
      name: 'MySQL',
      icon: 'devicon-mysql-original colored',
      category: ['Bases de Datos'],
      years: '3+ años',
      level: 4,
      description:
        'Sistema gestor de bases de datos relacional ampliamente utilizado en aplicaciones web.',
    },
    {
      name: 'SQL Server',
      icon: 'devicon-microsoftsqlserver-plain colored',
      category: ['Bases de Datos'],
      years: '2+ años',
      level: 4,
      description:
        'Administración y desarrollo sobre Microsoft SQL Server para soluciones empresariales.',
    },
    {
      name: 'Prisma',
      icon: 'devicon-prisma-original colored',
      category: ['ORM', 'Backend'],
      years: '2+ años',
      level: 4,
      description: 'ORM moderno para TypeScript con tipado seguro y consultas eficientes.',
    },
    {
      name: 'Hibernate',
      icon: 'devicon-hibernate-plain colored',
      category: ['ORM', 'Backend'],
      years: '2+ años',
      level: 4,
      description: 'ORM para Java utilizado en aplicaciones Spring Boot y persistencia de datos.',
    },
    {
      name: 'Git',
      icon: 'devicon-git-plain colored',
      category: ['Herramientas'],
      years: '5+ años',
      level: 5,
      description: 'Control de versiones, manejo de ramas, merge, rebase y trabajo colaborativo.',
    },
    {
      name: 'GitHub',
      icon: 'devicon-github-original colored',
      category: ['Herramientas'],
      years: '5+ años',
      level: 5,
      description:
        'Gestión de repositorios, Pull Requests, GitHub Actions y colaboración en proyectos.',
    },
    {
      name: 'GitLab',
      icon: 'devicon-gitlab-plain colored',
      category: ['Herramientas'],
      years: '2+ años',
      level: 4,
      description: 'Administración de repositorios Git, Merge Requests y pipelines de CI/CD.',
    },
    {
      name: 'Docker',
      icon: 'devicon-docker-plain colored',
      category: ['DevOps'],
      years: '1+ año',
      level: 3,
      description:
        'Contenerización de aplicaciones para facilitar despliegues y entornos consistentes.',
    },
    {
      name: 'React',
      icon: 'devicon-react-original colored',
      category: ['Frontend'],
      years: '1+ año',
      level: 3,
      description: 'Desarrollo de interfaces modernas mediante componentes reutilizables y Hooks.',
    },

    {
      name: 'Jira',
      icon: 'devicon-jira-plain colored',
      category: ['Herramientas'],
      years: '3+ años',
      level: 4,
      description:
        'Gestión de proyectos ágiles mediante Scrum y Kanban, seguimiento de tareas e incidencias.',
    },
    {
      name: 'Postman',
      icon: 'devicon-postman-plain colored',
      category: ['Herramientas'],
      years: '4+ años',
      level: 5,
      description:
        'Pruebas, documentación y automatización de APIs REST mediante colecciones y entornos.',
    },
    {
      name: 'NPM',
      icon: 'devicon-npm-original-wordmark colored',
      category: ['Herramientas'],
      years: '5+ años',
      level: 5,
      description:
        'Gestión de dependencias, scripts y publicación de paquetes para proyectos JavaScript y TypeScript.',
    },

    {
      name: 'Visual Studio Code',
      icon: 'devicon-vscode-plain colored',
      category: ['Herramientas'],
      years: '5+ años',
      level: 5,
      description:
        'Editor principal para el desarrollo Frontend y Backend con soporte para múltiples lenguajes y extensiones.',
    },
    {
      name: 'IntelliJ IDEA',
      icon: 'devicon-intellij-plain colored',
      category: ['Herramientas'],
      years: '5+ años',
      level: 4,
      description:
        'IDE utilizado para el desarrollo de aplicaciones Java y Spring Boot con herramientas avanzadas de productividad.',
    },
    {
      name: 'Eclipse',
      icon: 'devicon-eclipse-plain colored',
      category: ['Herramientas'],
      years: '2+ años',
      level: 3,
      description:
        'IDE para desarrollo Java utilizado en proyectos empresariales y aplicaciones basadas en Spring.',
    },
    {
      name: 'PhpStorm',
      icon: 'devicon-phpstorm-plain colored',
      category: ['Herramientas'],
      years: '1+ año',
      level: 3,
      description:
        'IDE de JetBrains para desarrollo PHP con integración de bases de datos, Git y herramientas web.',
    },
    {
      name: 'WebStorm',
      icon: 'devicon-webstorm-plain colored',
      category: ['Herramientas'],
      years: '2+ años',
      level: 3,
      description:
        'IDE especializado para JavaScript, TypeScript y frameworks como Angular y React.',
    },
    {
      name: 'Visual Studio',
      icon: 'devicon-visualstudio-plain colored',
      category: ['Herramientas'],
      years: '1+ año',
      level: 3,
      description:
        'IDE utilizado para el desarrollo de aplicaciones .NET, C# y proyectos de escritorio y web.',
    },
    {
      name: 'DBeaver',
      icon: 'devicon-dbeaver-plain colored',
      category: ['Herramientas', 'Bases de Datos'],
      years: '3+ años',
      level: 4,
      description:
        'Cliente universal para administración, consulta y modelado de bases de datos relacionales y NoSQL.',
    },
  ]);

  softSkills: SoftSkill[] = [
    {
      icon: 'pi pi-users',
      title: 'Trabajo en Equipo',
      description:
        'Colaboro de manera activa con otros desarrolladores y equipos multidisciplinarios para alcanzar objetivos comunes.',
    },

    {
      icon: 'pi pi-comments',
      title: 'Comunicación',
      description:
        'Transmito ideas técnicas de forma clara, tanto con perfiles técnicos como no técnicos.',
    },

    {
      icon: 'pi pi-lightbulb',
      title: 'Resolución de Problemas',
      description:
        'Analizo situaciones complejas para encontrar soluciones eficientes y escalables.',
    },

    {
      icon: 'pi pi-sync',
      title: 'Adaptabilidad',
      description: 'Me adapto rápidamente a nuevas tecnologías, metodologías y desafíos.',
    },

    {
      icon: 'pi pi-clock',
      title: 'Gestión del Tiempo',
      description:
        'Organizo prioridades para cumplir objetivos y entregas sin comprometer la calidad.',
    },

    {
      icon: 'pi pi-star',
      title: 'Proactividad',
      description:
        'Busco constantemente oportunidades para mejorar procesos, productos y mi propio aprendizaje.',
    },

    {
      icon: 'pi pi-search',
      title: 'Pensamiento Analítico',
      description: 'Descompongo problemas complejos en soluciones claras y bien estructuradas.',
    },

    {
      icon: 'pi pi-heart',
      title: 'Empatía',
      description:
        'Comprendo las necesidades de usuarios y compañeros para construir mejores soluciones.',
    },
  ];

  tooltipContent(skill: TechnicalSkill): string {
    return `${skill.name}
${skill.category}
${skill.years}
${skill.description}`;
  }

  getLevel(level: number): string {
    switch (level) {
      case 5:
        return 'Experto';

      case 4:
        return 'Avanzado';

      case 3:
        return 'Intermedio';

      case 2:
        return 'Básico';

      default:
        return 'Inicial';
    }
  }
}
