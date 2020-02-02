import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AuthService, AuthServiceConfig, GoogleLoginProvider} from "angularx-social-login";


@Injectable({
  providedIn: 'root'
})
export class LocalAuthService {

  constructor(
    private http: HttpClient,
  private socialAuth: AuthService,

  ) { }



  load() {
    return this.http.get(`${environment.apiUrl}auth/`);
  }

  static getToken() {
    return localStorage.getItem('auth_token');
  }

  login(body) {
    return this.http.post(`${environment.apiUrl}auth/login`, body);
  }

  register(credentials) {
    return this.http.post(`${environment.apiUrl}auth/register`, credentials);
  }

  logout() {
    if (sessionStorage.getItem('user') && sessionStorage.getItem('auth_token')) {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('auth_token');
      window.location.reload();
    }

    if(sessionStorage.getItem('loggedInBy') === 'social') {
      this.socialAuth.signOut();
    }

    return this.http.post(`${environment.apiUrl}auth/logout`, {});
  }

  googleAuth() {

    // return new Promise((resolve, reject) => {

      return new Promise((resolve, reject) => {
        this.socialAuth.authState.subscribe(user => {
          resolve(user);
          if (user === null) {
            reject(new Error('User not found'));
          }

        })
      })
      // resolve(true)
  }

  googleOnLoginState() {
    return new Promise((resolve, reject) => {
      this.socialAuth.authState.subscribe(user => {
        resolve(user);
        if (user === null) {
          reject(new Error('User not found'));
        }

      })
    })
  }

  googleLogin() {
    return new Promise((resolve, reject) => {
      this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then(googleUser => {
          this.http.post(`${environment.apiUrl}auth/google/login`, googleUser).subscribe(requestUser => {
            console.log(googleUser, requestUser);
            resolve(googleUser)
            if(!googleUser){
              reject(new Error('Fucks'))
            }
          });
      });
    })
  }

  googleLogout() {

  }

}
