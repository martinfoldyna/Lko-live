import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private http: HttpClient,
  ) {}

  delete(model, id) {
    return this.http.post(`${environment.apiUrl}general/delete/${model}/${id}`, []);
  }

  stateCheck() {
    return this.http.post(`${environment.apiUrl}general/state`, []);
  }
}
