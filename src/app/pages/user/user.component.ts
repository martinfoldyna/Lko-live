import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";
import {AuthoriseUser, User} from "../../@core/data/users";
import {NgForm} from "@angular/forms";
import {NbToastrService} from "@nebular/theme";

@Component({
  selector: 'ngx-user',
  template: `
    <ngx-user-authorise></ngx-user-authorise>
    <ngx-user-overview></ngx-user-overview>
  `,
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private toastr: NbToastrService,
  ) {

  }

  ngOnInit() {

  }

}
