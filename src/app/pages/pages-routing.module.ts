import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {UserComponent} from './user/user.component';
import {AdminGuard} from '../@core/guards/auth.guard';
import {IsAdminGuard} from "../@core/guards/is-admin.guard";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'subjects',
      loadChildren: () => import('./subjects/subjects.module')
        .then(m => m.SubjectsModule),
    },
    {
      path: 'users',
      canActivate: [AdminGuard],
      loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
