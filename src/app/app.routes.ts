import { Routes } from '@angular/router';

/**
 * Main Application Routes
 * 
 * This file defines the navigational flow of our app. We are leveraging Angular's 
 * standalone components and lazy loading (via `loadComponent`) to ensure fast start-up 
 * times by only loading pages when the user specifically navigates to them.
 */
export const routes: Routes = [
  // Setup standard home route
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  // When the app initially loads on the blank path (''), redirect directly to the search page.
  // pathMatch: 'full' ensures this only happens on the exact root path.
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  // The Search page route where users can view and filter lists of programs
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.page').then( m => m.SearchPage)
  },
  // Dynamic route for viewing a specific program. The ':id' segment acts as a parameter 
  // we can read to determine which program's details to render.
  {
    path: 'program-detail/:id',
    loadComponent: () => import('./pages/program-detail/program-detail.page').then( m => m.ProgramDetailPage)
  },
];
