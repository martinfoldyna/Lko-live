import { Component, OnInit} from '@angular/core';
import {PhotosService} from '../../photos/photos.service';
import {Image} from '../../../@core/data/image';
import {NbToastrService} from '@nebular/theme';
import {NgxGalleryImage} from 'ngx-gallery';



@Component({
  selector: 'ngx-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss'],
})
export class DrawingsComponent implements OnInit {
  subject = 'STR';
  loadingArticles = false;
  allImages: any;
  allGroups: Array<string>;
  deletingImage: boolean = false;
  returnResult;
  groupedImages: Array<object>;
  returnGroupedImages: Array<Image>;
  galleryImages: Array<object>;
  galleryOptions: Array<object>;


  urls = [];

  constructor(
    private photosService: PhotosService,
    private toastr: NbToastrService
  ) {
    this.returnGroupedImages = new Array<Image>();
    this.groupedImages = new Array<object>();
    this.galleryImages = new Array<object>();
  }

  ngOnInit() {
    this.loadDrawings()
  }


  loadDrawings() {
    this.loadingArticles = true;
    this.galleryOptions = [
      { thumbnails: false },
      { breakpoint: 500, width: "100%", height: "200px" }
    ];

    this.photosService.loadImages(this.subject).subscribe(data => {
      if(data.photos) {

        this.allGroups = [...new Set(data.photos.map(item => item.group))];

        this.allImages = data.photos;

        for (let i = 0; i < this.allGroups.length; i++) {
          const thisGroup = this.allGroups[i];
          this.allImages.forEach(image => {
            if (image.group === thisGroup) {
              this.galleryImages.push({
                  image: `data:image/jpg;base64,${image.base64}`, // Support base64 image
                  thumbImage: `data:image/jpg;base64,${image.base64}`, // Support base64 image
                  imagePopup: false,
                });
            }
          });
          this.groupedImages[thisGroup] = this.galleryImages;
          this.galleryImages = new Array<NgxGalleryImage>();
        }

        this.loadingArticles = false;
        if (this.deletingImage === true) this.deletingImage = false;
      } else {
        this.toastr.danger('', 'Něco se pokazilo, zkuste akci opakovat později.')
      }
    }, err => {
      this.toastr.danger(err, 'Chyba')
    });
  }

}
