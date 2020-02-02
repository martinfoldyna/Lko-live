import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { SubjectsComponent } from './subjects.component';
import { WebComponent } from './web/web.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { DrawingsComponent } from './drawings/drawings.component';
import {SubjectsRoutingModule} from "./subjects-routing.module";
import {
  NbTabsetModule,
  NbCardModule,
  NbSpinnerModule,
  NbLayoutModule,
  NbActionsModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule
} from "@nebular/theme";
import {ArticlesModule} from "../articles/articles.module";
import {PhotosModule} from "../photos/photos.module";
import {PagesModule} from "../pages.module";
import {VideoModule} from "../video/video.module";


@NgModule({
  declarations: [SubjectsComponent, WebComponent, MultimediaComponent, DrawingsComponent],
    imports: [
        CommonModule,
        SubjectsRoutingModule,
        NbTabsetModule,
        NbCardModule,
        NbInputModule,
        FormsModule,
        NbSpinnerModule,
        NbLayoutModule,
        NbActionsModule,
        NbButtonModule,
        NbCheckboxModule,
        ArticlesModule,
        PhotosModule,
        PagesModule,
        VideoModule
    ]
})
export class SubjectsModule { }
