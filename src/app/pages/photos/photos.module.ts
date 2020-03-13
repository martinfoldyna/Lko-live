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
  NbLayoutModule, NbSpinnerModule,
  NbIconModule,
  NbUserModule,
  NbPopoverModule,
  NbSelectModule

} from "@nebular/theme";
import { OverviewComponent } from './overview/overview.component';
import {FormsModule} from "@angular/forms";
import {NgxImageCompressService} from "ngx-image-compress";
import {ArticlesModule} from "../articles/articles.module";
import { ImageCardComponent } from './image-card/image-card.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import {MomentModule} from "ngx-moment";
import { LazyloadDirective } from './image-card/lazyload.directive';
import {PhotosService} from "./photos.service";
import {NgxGalleryModule} from "ngx-gallery"
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [PhotosComponent, AddPhotoComponent, OverviewComponent, ImageCardComponent, LightboxComponent, LazyloadDirective],
  imports: [
    CommonModule,
    NgImageSliderModule,
    PhotosRoutingModule,
    NbCardModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbActionsModule,
    NbIconModule,
    NbSpinnerModule,
    NbUserModule,
    ArticlesModule,
    MomentModule,
    NbPopoverModule,
    NgxGalleryModule,
    NbSelectModule
  ],
  exports: [
    ImageCardComponent,
    AddPhotoComponent
  ],
  providers: [NgxImageCompressService, PhotosService],
  entryComponents: [
    LightboxComponent
  ]
})
export class PhotosModule { }
