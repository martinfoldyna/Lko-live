import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }



  load() {
    return this.http.get(`${environment.apiUrl}auth/`);
  }

  static getToken() {
    return localStorage.getItem('auth_token');
  }

  login(body) {
    console.log('credentials', body)
    return this.http.post(`${environment.apiUrl}auth/login`, body);
  }

  register(credentials) {
    return this.http.post(`${environment.apiUrl}auth/register`, {credentials});
  }

}
