import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SubjectsComponent} from "./subjects.component";
import {WebComponent} from "./web/web.component";
import {MultimediaComponent} from "./multimedia/multimedia.component";
import {DrawingsComponent} from "./drawings/drawings.component";

const routes: Routes = [
  {
    path: '',
    component: SubjectsComponent,
    children: [
      {
        path: 'web',
        component: WebComponent,
      },
      {
        path: 'mme',
        component: MultimediaComponent,
      },
      {
        path: 'drawings',
        component: DrawingsComponent,
      },
      {
        path: '',
        redirectTo: 'overview',
      },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SubjectsRoutingModule {
}
