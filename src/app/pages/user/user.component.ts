import { Component, OnInit } from '@angular/core';
import {UserService} from "../../@core/utils/user.service";
import {User} from "../../@core/data/users";

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  changeUserInfo: boolean = false;
  constructor(
    private userService: UserService,
  ) {

  }

  ngOnInit() {
    this.userService.getUser().then(user => {
      this.user = user;
      console.log(this.user);
    }).catch(err => {
      console.log(err);
    })
  }

}
