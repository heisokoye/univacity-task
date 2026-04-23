import { Routes } from '@angular/router';

/**
 * Central route map for the app.
 * We lazy-load each page to keep the initial bundle small.
 */
export const routes: Routes = [
  // Legacy home route from starter template.
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  // Default landing page for this assessment.
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  // Search results page with cards and filter modal.
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.page').then( m => m.SearchPage)
  },
  // Detail page for a specific program identified by URL id.
  {
    path: 'program-detail/:id',
    loadComponent: () => import('./pages/program-detail/program-detail.page').then( m => m.ProgramDetailPage)
  },
];
