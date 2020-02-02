import { Component, OnInit } from '@angular/core';
import {UserService} from "../../@core/utils/user.service";
import {User} from "../../@core/data/users";
import {NgForm} from "@angular/forms";
import {NbToastrService} from "@nebular/theme";

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
    private toastr: NbToastrService,
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

  submitChanges(user, form: NgForm) {
    console.log(user);
    console.log(form.valid);
    this.userService.updateUser(user).subscribe(data => {
      this.user = data.user;
      this.toastr.success(data.toaster.title, data.toaster.message)
    }, err => {
      console.log(err);
    })
  }

}
