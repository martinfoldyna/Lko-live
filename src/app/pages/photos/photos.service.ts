import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpEventType} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators"
import {Image} from "../../@core/data/image";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http: HttpClient,
  ) { }

  upload(data, headers?) {
    return this.http.post(`${environment.apiUrl}photo/upload`, data, {
      reportProgress: true,
      observe: 'events',
      headers: headers
    }).pipe(map((event) => {
      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          console.log(progress);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    }));
  }

  loadImages(subject): Observable<[Image]> {
    return this.http.get<[Image]>(`${environment.apiUrl}photo/retrieve/${subject}`);
  }

  loadImageForDocument(docId): Observable<Image> {
    return this.http.get<Image>(`${environment.apiUrl}photo/retrieveForDoc/${docId}`);
  }

  delete(imageId) {
    return this.http.post(`${environment.apiUrl}photo/delete/${imageId}`, []);
  }
}
