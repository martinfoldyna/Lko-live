import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ResultResponse} from "../data/response";
import {Config} from "../../../conf";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private http: HttpClient,
  ) {}

  delete(model, id): Observable<ResultResponse> {
    return this.http.post<ResultResponse>(`${Config.apiUrl}general/delete/${model}/${id}`, []);
  }
}
