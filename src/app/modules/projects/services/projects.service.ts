import { Injectable } from '@angular/core';
import { Project } from '../interface/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  readonly projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Personal',
      type: 'Personal',
      subtitle: 'Sitio web profesional desarrollado con Angular 21',
      description:
        'Portfolio desarrollado con Angular 21 utilizando Signals, animaciones CSS y PrimeNG.',
      image: '/images/image2.webp',
      technologies: [
        {
          name: 'Angular',
          icon: 'devicon-angularjs-plain colored',
          version: '22',
          description: 'Framework Frontend',
        },
        {
          name: 'CSS3',
          icon: 'devicon-css3-plain colored',
          version: '22',
          description: 'Framework Frontend',
        },
        {
          name: 'Node JS',
          icon: 'devicon-nodejs-plain colored',
          version: '22',
          description: 'Framework Frontend',
        },
        {
          name: 'MongoDB',
          icon: 'devicon-mongodb-plain colored',
          version: '22',
          description: 'Framework Frontend',
        },
      ],
      demo: '',
      featured: false,
      role: 'Full Stack Developer',
      duration: '3 semanas',
      status: 'Finalizado',
      challenge:
        'Diseñar un portfolio moderno que mostrara experiencia, proyectos y habilidades sin depender de plantillas externas.',
      solution:
        'Se desarrolló completamente desde cero utilizando Angular 21, Signals, PrimeNG y animaciones CSS.',
      results:
        'Portfolio responsive, optimizado y preparado para presentar en entrevistas laborales.',
      tasks: [
        'Diseño UI/UX completo.',
        'Desarrollo Frontend.',
        'Responsive Design.',
        'Animaciones CSS.',
        'Deploy.',
      ],
      github: 's',
      gallery: [
        '/projects/image2.webp',
        '/projects/image2.webp',
        '/projects/image2.webp',
        '/projects/image2.webp',
        '/projects/image2.webp',
        '/projects/image2.webp',
        '/projects/image2.webp',
        '/projects/image2.webp',
      ],
    },
    {
      id: 2,
      title: 'Meeting',
      type: 'Universidad',
      subtitle: 'Sitio web profesional desarrollado con Angular 21',
      description: `Plataforma en línea que conecta a desarrolladores con proyectos reales y permite a la 
comunidad plasmar sus ideas para hacerlas realidad, brindando oportunidades únicas para ganar experiencia 
y dar juntos sus primeros pasos en el mundo laboral. `,
      image: '/projects/meeting/logo.png',
      technologies: [
        {
          name: 'Angular',
          icon: 'devicon-angularjs-plain colored',
          description: 'Framework Frontend',
        },
        {
          name: 'CSS3',
          icon: 'devicon-css3-plain colored',
          description: 'Framework Frontend',
        },
        {
          name: 'Node JS',
          icon: 'devicon-nodejs-plain colored',
          description: 'Framework Frontend',
        },
        {
          name: 'Express',
          icon: 'devicon-express-original colored',
          description: 'Framework Frontend',
        },
        {
          name: 'MongoDB',
          icon: 'devicon-mongodb-plain colored',
          description: 'Framework Frontend',
        },
        {
          name: 'PostgreSQL',
          icon: 'devicon-postgresql-plain colored',
          description: 'Framework Frontend',
        },
      ],
      demo: '',
      featured: false,
      role: 'Full Stack Developer',

      duration: '4 Meses',

      status: 'Finalizado',

      challenge:
        'Diseñar una solución que permita a desarrolladores junior integrarse en proyectos colaborativos reales, formando equipos de trabajo, adquiriendo experiencia práctica y simulando un entorno profesional donde puedan aplicar sus conocimientos técnicos y metodologías utilizadas en la industria.',

      solution:
        'Se desarrolló una plataforma web moderna desde cero utilizando Angular 21, Signals para la gestión reactiva del estado, PrimeNG para componentes avanzados de interfaz y animaciones CSS para mejorar la experiencia de usuario. Se implementó una arquitectura escalable, diseño responsive y buenas prácticas de desarrollo frontend.',

      results:
        'Aplicación web completamente responsive, optimizada para distintos dispositivos y preparada como proyecto demostrable en entrevistas laborales, destacando habilidades técnicas, experiencia en desarrollo profesional y capacidad para construir soluciones completas.',
      tasks: [
        'Certificado PDF por brindar soporte a proyecto Finalizado.',
        'Ver proyecto en detalle',
        'Calificar desempeño de perfiles por MVP.',
        'Listar los proyectos creados',
        'Ver mis proyectos realizados .',
        'Ver status del proyecto',
        'Ver metricas el usuario en el proyecto .',
        'Crear roles de  usuarios.',
        'Ver mis proyectos realizados .',
        'Cargar / Completar informacion de Usuario .',
        'Enviar mail de confirmacion del usuario',
        'Penalizacion por abandono de proyecto',
        'Notificaciones',
      ],
      github: 'https://github.com/JoelL77/meeting-angular',
      gallery: [
        '/projects/meeting/login.JPG',
        '/projects/meeting/registro.JPG',
        '/projects/meeting/crear-post.JPG',
        '/projects/meeting/crear-proyecto.JPG',
        '/projects/meeting/detalle-post.JPG',
        '/projects/meeting/home.JPG',
        '/projects/meeting/landing.JPG',
        '/projects/meeting/lista-post.JPG',
        '/projects/meeting/lista-proyectos.JPG',
        '/projects/meeting/perfil-proyecto.JPG',
        '/projects/meeting/perfil-usuario.JPG',
        '/projects/meeting/usuarios-ranking.JPG',
      ],
    },
  ];

  getProjects() {
    return this.projects;
  }

  getProject(id: number) {
    return this.projects.find((p) => p.id === id);
  }
}
