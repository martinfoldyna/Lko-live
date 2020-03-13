import { Component, OnInit } from '@angular/core';
import {NbAuthSocialLink} from "@nebular/auth";
import {LocalAuthService} from "../auth.service";
import {AuthenticationUser} from "../../../@core/data/users";

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errors: string[];
  messages: string[];
  user: AuthenticationUser;


  constructor(
    private authService: LocalAuthService,
  ) {
    this.user = {
      name: "",
      email: "",
      username: "",
      password: "",
      rePassword: ""
    }

  }

  ngOnInit() {
  }

}
