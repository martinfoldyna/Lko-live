import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpEventType} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Video} from "../../@core/data/video";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(
    private http: HttpClient
  ) {}

  uploadVideo(video): Observable<Video> {
    return this.http.post(`${environment.apiUrl}video/upload`, video);
  }

  loadVideos(subject?: String) {
    return this.http.get(`${environment.apiUrl}video/retrieve/${subject}`);
  }

  deleteVideo(videoId: String) {
    return this.http.post(`${environment.apiUrl}video/delete/${videoId}`, []);
  }
}
