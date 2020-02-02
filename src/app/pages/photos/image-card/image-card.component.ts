import { Component, OnInit, Input } from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import {PhotosService} from "../photos.service";
import {Image} from "../../../@core/data/image";
import {LightboxComponent} from "../lightbox/lightbox.component";
import {GeneralService} from "../../../@core/utils/general.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'ngx-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  allImages: [Image];
  @Input() subject: String;

  testImage: any;
  constructor(
    private photosService: PhotosService,
    private dialogService: NbDialogService,
    private generalService: GeneralService,
  ) { }

  imagesLoaded: Promise<boolean>;

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    console.log(this.subject);
    if (!this.subject) this.subject = "all";
    this.photosService.loadImages(this.subject).subscribe(data => {
      this.allImages = data;
      console.log(this.allImages);
      this.imagesLoaded = Promise.resolve(true);
    }, err => {
      console.log(err);
    })
  }

  deleteImage(imageId) {
    this.generalService.delete(environment.models.photo, imageId).subscribe(data => {
      console.log(data);
      this.loadImages();
    })
  }

  openImage(image) {
    this.dialogService.open(LightboxComponent, {context: {
        image: image,
        allImages: this.allImages,
      }})
  }

}
