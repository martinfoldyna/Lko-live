import { Component, OnInit } from '@angular/core';
import {NbAuthSocialLink} from "@nebular/auth";
import {AuthService} from "../auth.service";

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  redirectDelay: number;
  showMessages: any;
  strategy: string;
  submitted: boolean;
  errors: string[];
  messages: string[];
  user: any;
  socialLinks: NbAuthSocialLink[];


  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  register(input) {
    this.authService.register(input).subscribe(data => {
      alert('got data');
    }, (err) => {
      console.log(err);
    })
  }

}
