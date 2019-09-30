import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotosRoutingModule} from "./photos-routing.module";
import { PhotosComponent } from './photos.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import {NbCardModule} from "@nebular/theme";
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [PhotosComponent, AddPhotoComponent, OverviewComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    NbCardModule,
  ]
})
export class PhotosModule { }
