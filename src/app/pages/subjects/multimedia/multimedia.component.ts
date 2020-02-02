import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../../articles/articles.service";
import {Video} from "../../../@core/data/video";
import {PhotosService} from "../../photos/photos.service";
import {Article} from "../../../@core/data/article";
import {VideoService} from "../../video/video.service";

@Component({
  selector: 'ngx-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.scss']
})
export class MultimediaComponent implements OnInit {

  fetchingData = false;
  subject = "MME";
  loadNewArticles = false;
  videoThumbnail = false;
  video: Video = {};


  public article;

  constructor(
    private articlesService: ArticlesService,
    private photosService: PhotosService,
    private videoService: VideoService
  ) {

  }

  ngOnInit() {
  }

  upload() {
    let thumbnailName = Date.now().toString(36);
    console.log(this.video.url);
    this.video.subject = this.subject;
    this.video.thumbnailName = thumbnailName;
    console.log(this.video);
    this.videoService.uploadVideo(this.video).subscribe(data => {
      this.uploadImage(this.video.thumbnail, data._id);
    }, error => {
      console.log(error);
    })

  }

  uploadImage(image, docId) {
    let formData: FormData = new FormData();
    let headers = new Headers();
    headers.append('enctype', 'multipart/form-data');
    formData.append(`file0`, image);
    formData.append(`docId`, docId);
    this.photosService.upload(formData, headers).subscribe(data => {
      console.log(data);
    })
  }

  // checkVideoLink() {
  //   let link = this.article.link;
  //   let image: string;
  //   if (link.includes('youtube.com')) {
  //     if (link.includes('v=')) {
  //       let splittedLink = link.split('v=')
  //       this.imageThumbnail = "http://img.youtube.com/vi/" + splittedLink[1] + "/hqdefault.jpg";
  //       console.log(image);
  //     }
  //   }
  //
  // }

  filesSelected(event) {
    this.video.thumbnail = event.target.files[0];
    console.log(this.video.thumbnail);
  }
}
