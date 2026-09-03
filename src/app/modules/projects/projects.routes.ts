import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/project-list/project-list').then((m) => m.ProjectList),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/project-detail/project-detail').then((m) => m.ProjectDetail),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
