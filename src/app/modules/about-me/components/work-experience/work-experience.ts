import { Component, signal } from '@angular/core';

interface ExperienceWork {
  title: string;

  institution: string;

  period: string;

  description: string;
}

@Component({
  selector: 'app-work-experience',
  imports: [],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css',
})
export class WorkExperience {
  experience = signal<ExperienceWork[]>([
    {
      title: 'UNIVERSIDAD NACIONAL DE LA MATANZA (UNLAM)',

      institution: 'Docente - Angular/Node',

      period: 'Abr 2025 - Actual',

      description:
        'Docente de la materia Taller Web II, enseñando Angular y Node.js para el desarrollo de aplicaciones web modernas.',
    },
    {
      title: 'BANCO HIPOTECARIO',

      institution: 'Desarrollador Java - Angular',

      period: 'Sep 2025 - Mar 2026',

      description: 'Especialización en desarrollo web Full Stack utilizando tecnologías modernas.',
    },
    {
      title: 'UNIVERSIDAD NACIONAL DE LA MATANZA (UNLAM)',

      institution: 'Docente - UX/UI',

      period: 'Ago 2023 - Dic 2023',

      description:
        'Docente de la materia Diseño de Interfaces de Usuario, enseñando principios de UX/UI y desarrollo web.',
    },
    {
      title: 'CANDOIT ENGINEERING & TECHNOLOGY',

      institution: 'Desarrollador Java - Angular',

      period: 'Dic 2021 - Sep 2025',

      description:
        'Desarrollo de proyectos integrales para clientes, maquetado, estructura y mantenimiento con java, spring y angular.',
    },
    {
      title: 'DISEÑO WEB FREELANCER',

      institution: 'Diseño y desarrollo web',

      period: 'Ene 2019 - Actual',

      description:
        'Sitios web dinámicos con uso de frameworks,librerías, Bootstrap 5 y JavaScript.',
    },
  ]);
}
