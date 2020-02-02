import { Component, OnInit, Input } from '@angular/core';
import {VideoService} from "../video.service";
import {PhotosService} from "../../photos/photos.service";
import {GeneralService} from "../../../@core/utils/general.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'ngx-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  allVideos;

  @Input() subject: String;

  constructor(
    private videoService: VideoService,
    private photosService: PhotosService,
    private generalService: GeneralService
  ) { }

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos() {
    this.videoService.loadVideos(this.subject).subscribe(data => {
      this.allVideos = data;
      this.allVideos.forEach(video => {
        this.photosService.loadImageForDocument(video._id).subscribe(data => {
          video.thumbnail = data;
        })
      })
      console.log(this.allVideos);
    })

  }

  deleteVideo(id) {
    this.generalService.delete(environment.models.video, id).subscribe(data => {
      console.log(data);
    })
  }
}
