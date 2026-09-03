import { Component, signal } from '@angular/core';

interface EducationTitle {

  title:string;

  institution:string;

  period:string;

  description:string;

  status:string;

}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {

  education = signal<EducationTitle[]>([

    {

      title:'Lic. en Gestión de Tecnología',

      institution:'Universidad Nacional de La Matanza',

      period:'2024 - 2025',

      status:'Finalizado',

      description:'Formación orientada al desarrollo de software, arquitectura, bases de datos, ingeniería de software y gestión de proyectos.'

    },

    {

      title:'Tecnico Universitario en Web',

      institution:'Universidad Nacional de La Matanza',

      period:'2019 - 2023',

      status:'Finalizado',

      description:'Especialización en desarrollo web Full Stack utilizando tecnologías modernas.'

    },

    {

      title:'Bachillerato con orientación en Economía y Administración',
      
      institution:'Media 9 Santo Tomas de Aquino',

      period:'2014 - 2019',

      status:'Finalizado',

      description:''

    }

  ]);


}





