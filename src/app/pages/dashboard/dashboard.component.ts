import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
  }

}
