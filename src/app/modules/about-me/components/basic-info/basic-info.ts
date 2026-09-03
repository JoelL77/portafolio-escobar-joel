import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  imports: [],
  templateUrl: './basic-info.html',
  styleUrl: './basic-info.css',
})
export class BasicInfo {
  readonly information = [
    {
      title: 'Nombre',

      value: 'Joel Escobar',

      icon: 'pi pi-user',
    },

    {
      title: 'Edad',

      value: this.getAge() + ' años',

      icon: 'pi pi-calendar',
    },

    {
      title: 'Ubicación',

      value: 'Buenos Aires, Argentina',

      icon: 'pi pi-map-marker',
    },

    {
      title: 'Idiomas',

      value: 'Español · Inglés Básico',

      icon: 'pi pi-language',
    },

    {
      title: 'Email',

      value: 'joellasalas77@email.com',

      icon: 'pi pi-envelope',
    },

    {
      title: 'Rol',

      value: 'Full Stack Developer',

      icon: 'pi pi-briefcase',
    },
  ];

  getAge(): number {
    const birthDate = new Date(2001, 6, 2); // 02/07/2001 (mes empieza en 0)

    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Si todavía no cumplió años este año
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}
