import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotosRoutingModule} from "./photos-routing.module";
import { PhotosComponent } from './photos.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutModule
} from "@nebular/theme";
import { OverviewComponent } from './overview/overview.component';
import {FormsModule} from "@angular/forms";
import {NgxImageCompressService} from "ngx-image-compress";

@NgModule({
  declarations: [PhotosComponent, AddPhotoComponent, OverviewComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    NbCardModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbActionsModule,
  ],
  providers: [NgxImageCompressService]
})
export class PhotosModule { }
