import { Component, OnInit } from '@angular/core';
import {PhotosService} from "../photos.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'ngx-photos-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  images;
  loadingImages = true;

  constructor(
    private photoService: PhotosService,
    private _sanitizer: DomSanitizer
  ) {

  }

  ngOnInit() {
    // this.photoService.download().subscribe(data => {
    //   this.images = data;
    // }, err => {
    //   console.log(err);
    // })
  }





}
