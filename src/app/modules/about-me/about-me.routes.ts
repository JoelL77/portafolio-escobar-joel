import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/about-me-page/about-me-page').then((m) => m.AboutMePage),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
