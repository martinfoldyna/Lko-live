import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  user: any;
  errors: string[];
  messages: string[];
  submitted: boolean;

  ngOnInit(): void {
    if (localStorage.getItem('rememberUser')) {
      const rememberedUser = localStorage.getItem('rememberUser');
      this.user = rememberedUser;
    }
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.user = {
      rememberMe: false
    }
  }

  checkValue() {
    console.log(this.user);
  }

  rememberUser(user) {
    localStorage.setItem('rememberUser', JSON.stringify(user));
  }

  login() {
    console.log(this.user);
    this.authService.login(this.user).subscribe(data => {
      console.log(this.user.rememberMe);
      if (this.user.rememberMe) {
        this.rememberUser({username: this.user.username, password: this.user.password});
      }
      console.log('GOT DATA', data)
      if (data["token"]) {
        sessionStorage.setItem('auth_token', data["token"]);
        sessionStorage.setItem('user', JSON.stringify(data["user"]))
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
