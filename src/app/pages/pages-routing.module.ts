import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {UserComponent} from "./user/user.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'photos',
      loadChildren: () => import('./photos/photos.module')
        .then(m => m.PhotosModule),
    },
    {
      path: 'articles',
      loadChildren: () => import('./articles/articles.module')
        .then(m => m.ArticlesModule),
    },
    {
      path: 'subjects',
      loadChildren: () => import('./subjects/subjects.module')
        .then(m => m.SubjectsModule),
    },
    {
      path: 'user',
      component: UserComponent,
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
