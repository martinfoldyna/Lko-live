import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../utils/auth.service";
import {UserService} from "../../pages/user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isTokenValid()) {
      this.router.navigate(['/auth']);
      return false;
    } else {
      return true;
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class IsLoggedIn implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isTokenValid()) {
      this.router.navigate(['/pages/dashboard']);
      return false;
    } else {
      return true;
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this.userService.getUser().role !== 'admin') {
      this.router.navigate(['/pages/dashboard'])
      return false;
    } else {
      return true;
    }
  }

}
