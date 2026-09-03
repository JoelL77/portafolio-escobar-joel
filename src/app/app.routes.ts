import { Routes } from '@angular/router';
import { Home } from './public/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'inicio',
    component: Home,
  },
  {
    path: 'sobre-mi',
    loadChildren: () => import('./modules/about-me/about-me.routes').then((m) => m.routes),
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./modules/projects/projects.routes').then((m) => m.routes),
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./modules/skills/skills.routes').then((m) => m.routes),
  },
  {
    path: 'contacto',
    loadChildren: () => import('./modules/contact/contact.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
