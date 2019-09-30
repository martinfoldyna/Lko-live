import {RouterModule, Routes} from "@angular/router";
import {PhotosComponent} from "./photos.component";
import {AddPhotoComponent} from "./add-photo/add-photo.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    children: [
      {
        path: 'add',
        component: AddPhotoComponent,
      },
    ],
  },


  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PhotosRoutingModule {
}
