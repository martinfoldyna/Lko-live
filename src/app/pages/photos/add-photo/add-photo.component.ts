import { Component, OnInit } from '@angular/core';
import { NewPhotoSet } from "../../../@core/data/photo";
import {NgxImageCompressService} from "ngx-image-compress";
import {PhotosService} from "../photos.service";

@Component({
  selector: 'ngx-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss']
})
export class AddPhotoComponent implements OnInit {

  photo: NewPhotoSet;
  //TODO: add Models!!
  filesArray = [];


  imgSrcBeforeCompress: string = "./../../../../assets/images/camera1.jpg";
  imgSrcAfterCompress: string ;

  constructor(
    private imageCompress: NgxImageCompressService,
    private photosService: PhotosService,
  ) {
    this.photo = {
      description: "",
      files: []

    }


  }

  ngOnInit() {
  }

  compressFile() {
    this.imageCompress.uploadFile().then(({image, orientation}) => {
      this.imgSrcBeforeCompress = image;
      console.log('orientation: ', orientation);
      console.warn('Size in bytes was:', this.imageCompress.byteCount(image))
      this.imageCompress.compressFile(image, orientation, 50, 50).then(result => {
        this.imgSrcAfterCompress = result;
        console.warn('Size in bytes was:', this.imageCompress.byteCount(result))
      })
    })
  }

  upload(event) {
    console.log('event', event);
    let formData: FormData = new FormData();
    console.log(this.photo.files);
    let headers = new Headers();
    headers.append('enctype', 'multipart/form-data');
    // formData.append('title', this.photo.description);
    formData.append('files', this.photo.files[0]);

    this.photosService.upload(formData, headers).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  filesSelected(event) {
      const files = event.target.files;
      const filesLength = files.length;

      const maximalSize = 570; //Image's maximum size - if higher image will be compressed

      let i = 0;
      while (i < filesLength) {
        const selectedFile = files[i];
        const selectedFileSizeInKbs = selectedFile.size / 1000;
        console.log('size: ', Math.round(selectedFileSizeInKbs));
        if (Math.round(selectedFileSizeInKbs) > 570) {
          let quality = Math.round(100 - Math.round(selectedFile.size / 10) / maximalSize);
          console.log(quality);
          this.imageCompress.compressFile(selectedFile, -1, 50, 100).then(result => {
            this.filesArray.push(result);
            console.log(this.imageCompress.byteCount(result))
          })
          console.log("File is too big");
        }
          this.filesArray.push(selectedFile);
        this.photo.files = this.filesArray;

        i++;
      }

  }

}
