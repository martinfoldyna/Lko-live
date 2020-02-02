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

  register(form) {
    console.log('Validity:', form.valid);
    console.log('Passwords:', this.user.password, '&&', this.user.rePassword);
    if ((form.valid) && (this.user.password === this.user.rePassword)) {
      this.authService.register(this.user).subscribe(data => {
        alert('got data');
      }, (err) => {
        console.log(err);
      });
    } else {
      console.log("form not valid");
    }
  }

}
