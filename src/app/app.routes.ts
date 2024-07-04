import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layouts/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  {
    path: 'labs',
    loadChildren: () => import('./pages/labs/labs.routes').then(m => m.LABS_ROUTES)
  },

  // Esta ruta se debe dejar al final
  { path: '**', component: PageNotFoundComponent },
]