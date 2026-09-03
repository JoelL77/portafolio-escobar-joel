import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/skills/skill-pages').then((m) => m.SkillPages),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
