import { Component, signal } from '@angular/core';

interface Certification {
  title: string;
  organization: string;
  year: string;
  logo: string;
  url?: string;
}

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {

  

 certifications = signal<Certification[]>([
    {
      title: 'Angular: De Cero a Experto',
      organization: 'Udemy - Fernando Herrera',
      year: '2023',
      logo: 'devicon-angularjs-plain colored',
      url: '/documents/certifications/angular/angular-cero-experto.pdf'
    },
    {
      title: 'Java ',
      organization: 'Codo a Codo 4.0 - Full Stack Java',
      year: '2023',
      logo: 'devicon-java-plain colored',
      url: '/documents/certifications/java/java-codo-codo.pdf'
    },
    {
      title: 'SQL Server',
      organization: 'Udemy - Victor Ramos',
      year: '2022',
      logo: 'devicon-microsoftsqlserver-plain colored',
      url: '/documents/certifications/sql-server/sql-server-udemy.pdf'
    },
    {
      title: 'TypeScript',
      organization: 'Udemy - Manuel Munoz Mir',
      year: '2021',
      logo: 'devicon-typescript-plain colored',
      url: '/documents/certifications/typescript/typescript-udemy.jpg'
    },
    {
      title: 'Workana',
      organization: 'Workana The Accelerator',
      year: '2026',
      logo: 'bi bi-clipboard-data',
      url: '/documents/certifications/workana/certificado-workana.pdf'
    },
  ]);

}

