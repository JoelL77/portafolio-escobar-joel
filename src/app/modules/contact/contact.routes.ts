import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/contact-page/contact-page').then((m) => m.ContactPage),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
