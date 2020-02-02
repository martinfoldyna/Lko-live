import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoCardComponent} from "./video-card/video-card.component";
import {MomentModule} from "ngx-moment";
import {NbCardModule, NbIconModule} from "@nebular/theme"



@NgModule({
  declarations: [VideoCardComponent],
  imports: [
    CommonModule,
    MomentModule,
    NbCardModule,
    NbIconModule
  ],
  exports: [VideoCardComponent]
})
export class VideoModule { }
