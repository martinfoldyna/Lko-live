import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AuthService, AuthServiceConfig, GoogleLoginProvider} from "angularx-social-login";
import {AuthoriseUser} from "../../@core/data/users";
import {Observable} from "rxjs";
import {AuthorisedUserResponse, GoogleUserResponse, MicrosoftUserResponse} from "../../@core/data/auth";


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

  getToken() {
    return sessionStorage.getItem('auth_token');
  }

  promiseToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      let token = sessionStorage.getItem('auth_token');
      if(token) resolve(token);
      else {
        reject('Token not found');
      }
    })
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
    return new Promise<GoogleUserResponse>((resolve, reject) => {
      this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then(googleUser => {
          this.http.post<GoogleUserResponse>(`${environment.apiUrl}auth/google/login`, googleUser).subscribe(response => {
            resolve(response)
            if(!response){
              reject(new Error('Google user not received!'))
            }
          }, err => {
            reject(err);
          });
      });
    })
  }

  microsoftLogin(token: string): Observable<AuthorisedUserResponse> {
    return this.http.post<AuthorisedUserResponse>(`${environment.apiUrl}auth/microsoft/login`, {token: token})
  }

  authorise(id: string): Observable<AuthorisedUserResponse> {
    return this.http.post<AuthorisedUserResponse>(`${environment.apiUrl}auth/authorise/${id}`, {});
  }

  deAuthorise(id: string): Observable<AuthorisedUserResponse> {
    return this.http.post<AuthorisedUserResponse>(`${environment.apiUrl}auth/deauthorise/${id}`, {});
  }

}
