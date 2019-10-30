import {RouterModule, Routes} from "@angular/router";
import {PhotosComponent} from "./photos.component";
import {AddPhotoComponent} from "./add-photo/add-photo.component";
import {NgModule} from "@angular/core";
import {OverviewComponent} from "./overview/overview.component";


const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    children: [
      {
        path: 'add',
        component: AddPhotoComponent,
      },
      {
        path: 'overview',
        component: OverviewComponent,
      }
    ],
  },


  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PhotosRoutingModule {
}
