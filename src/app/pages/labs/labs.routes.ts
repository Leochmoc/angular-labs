import { Routes } from '@angular/router';
import { HomelabsComponent } from './homelabs/homelabs.component';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { InfolabsComponent } from './infolabs/infolabs.component';

export const LABS_ROUTES: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomelabsComponent },
      { path: 'info', component: InfolabsComponent },
    ]
  }
]