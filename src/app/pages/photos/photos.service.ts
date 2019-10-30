import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http: HttpClient,
  ) { }

  upload(data, headers) {
    return this.http.post(`${environment.apiUrl}photo/upload`, data);
  }

  download() {
    return this.http.get(`${environment.apiUrl}photo/download`);
  }
}
