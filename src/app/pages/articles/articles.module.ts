import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import {ArticlesRoutingModule} from "./articles-routing.module";
import {PhotosRoutingModule} from "../photos/photos-routing.module";
import {
  NbCardModule,
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbLayoutModule,
  NbActionsModule,
  NbListModule,
  NbSpinnerModule,
  NbIconModule,
  NbWindowModule,
  NbDialogModule
} from "@nebular/theme"
import {FormsModule} from "@angular/forms";
import {MomentModule} from "ngx-moment";
import { WindowEditComponent } from './window-edit/window-edit.component';
import { ArticleCardComponent } from './article-card/article-card.component';


@NgModule({
  declarations: [ArticlesComponent, WindowEditComponent, ArticleCardComponent],
  imports: [
    ArticlesRoutingModule,
    CommonModule,
    NbCardModule,
    FormsModule,
    NbAlertModule,
    NbListModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbActionsModule,
    NbSpinnerModule,
    NbIconModule,
    MomentModule,
    NbDialogModule.forRoot(),
    NbWindowModule.forChild()
  ],
  exports: [
    ArticleCardComponent
  ],
  entryComponents: [
    WindowEditComponent
  ]
})
export class ArticlesModule { }
