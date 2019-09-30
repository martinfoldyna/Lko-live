import { Component, OnInit } from '@angular/core';
import {NbAuthSocialLink, NbLoginComponent} from '@nebular/auth';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {User} from "../../../@core/data/users";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: any;
  redirectDelay: number;
  showMessages: any;
  strategy: string;
  errors: string[];
  messages: string[];
  submitted: boolean;
  socialLinks: NbAuthSocialLink[];
  rememberMe: boolean;



  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.user = {

    }
  }

  login() {
    console.log(this.user);
    this.authService.login(this.user).subscribe(data => {
      console.log('GOT DATA', data)
      if (data["token"]) {
        localStorage.setItem('auth_token', data["token"]);
        localStorage.setItem('user', data["user"])
        this.router.navigateByUrl('/pages/dashboard');
      } else {
        console.log('error');
      }
    });
    }

    load() {
    this.authService.load().subscribe(data => {
      console.log(data);
    })
    }
}
