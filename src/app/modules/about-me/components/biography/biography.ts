import { Component } from '@angular/core';

@Component({
  selector: 'app-biography',
  imports: [],
  templateUrl: './biography.html',
  styleUrl: './biography.css',
})
export class Biography {
  readonly history = `
Soy Licenciado en Sistemas y Full Stack Developer con más de cinco años de experiencia desarrollando aplicaciones web. Me especializo en Angular para el frontend y cuento con experiencia en Java, Spring Boot y Node.js para el backend. Además, me desempeño como profesor universitario, disfrutando tanto del desarrollo de software como de compartir conocimientos.`;

  readonly objective = `
Mi objetivo es crear soluciones tecnológicas eficientes, escalables y centradas en el usuario. Busco seguir creciendo profesionalmente, afrontar nuevos desafíos y mantenerme en constante aprendizaje para aportar valor en cada proyecto en el que participo.`;
}
