import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {tap, delay} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor() { }

  redirectUrl: string;

  login(): boolean {
    if (localStorage.getItem('auth_token')) {
      this.isLoggedIn = true
      return true;
    }
    return false;
  }

  loadToken() {
    const token = sessionStorage.getItem('auth_token');
    return token ? token : false;
  }

  isTokenValid() {
    const token = this.loadToken();
    return token ? !new JwtHelperService().isTokenExpired(token) : false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
