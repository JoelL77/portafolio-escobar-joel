import { Component, signal } from '@angular/core';

interface FloatingIcon {
  icon: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  direction: 'up' | 'down';
}

@Component({
  selector: 'app-background-animation',
  imports: [],
  templateUrl: './background-animation.html',
  styleUrl: './background-animation.css',
})
export class BackgroundAnimation {
  readonly icons = signal<FloatingIcon[]>([]);

  constructor() {
    const technologies = [
      'devicon-git-plain colored',
      'devicon-github-original colored',
      'devicon-gitlab-plain colored',
      'devicon-bitbucket-original colored',

      'devicon-docker-plain colored',

      'devicon-angularjs-plain colored',
      'devicon-rxjs-plain colored',
      'devicon-primeng-plain colored',

      'devicon-java-plain colored',
      'devicon-spring-plain colored',

      'devicon-bootstrap-plain colored',
      'devicon-tailwindcss-original colored',
      'devicon-html5-plain colored',
      'devicon-css3-plain colored',
      'devicon-sass-original colored',
      'devicon-typescript-plain colored',
      'devicon-javascript-plain colored',

      'devicon-npm-original-wordmark colored',
      'devicon-nodejs-plain colored',
      'devicon-express-original colored',
      'devicon-nestjs-original colored',

      'devicon-prisma-original colored',
      'devicon-hibernate-plain colored',

      'devicon-firebase-plain colored',
      'devicon-postman-plain colored',
      'devicon-mongodb-plain colored',
      'devicon-mariadb-original colored',
      'devicon-postgresql-plain colored',
      'devicon-mysql-original colored',
      'devicon-microsoftsqlserver-plain colored',

      'devicon-react-original colored',
      'devicon-jira-plain colored',
    ];

    const generated: FloatingIcon[] = [];

    for (let i = 0; i < 40; i++) {
      generated.push({
        icon: technologies[Math.floor(Math.random() * technologies.length)],

        left: Math.random() * 100,

        delay: Math.random() * 20,

        duration: 15 + Math.random() * 20,

        size: 70 + Math.random() * 40,

        opacity: 0.2 + Math.random() * 0.6,

        direction: Math.random() > 0.5 ? 'up' : 'down',
      });
    }

    this.icons.set(generated);
  }
}
