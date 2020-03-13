import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { MENU_ITEMS } from './pages-menu';
import {UserService} from "./user/user.service";
import {AuthService} from "../@core/utils/auth.service";

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout [hideSidebar]="!isDashboard">
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit{
  isDashboard = false;

  menu = MENU_ITEMS;

  constructor(private userService: UserService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    console.log(this.menu)
    if(this.userService.getUser().role !== "admin") {
      this.menu[4].hidden = true;
      this.menu[5].hidden = true;
    }

    setInterval(() => {
      if(!this.authService.isTokenValid()) {
        window.location.reload();

      } else {
        console.log('token is valid');
        this.userService.getDatabaseUser(this.userService.getUser().email).subscribe(user => {
          if(user.user) {
            const databaseUser = {
              name: user.user.name,
              email: user.user.email,
            }
            console.log()
            console.log(this.userService.getUser() == databaseUser)
          }
        })
      }
    }, 30000)

  }

}
