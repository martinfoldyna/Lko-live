import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {AuthoriseUser} from "../../../@core/data/users";
import {LocalAuthService} from "../../auth/auth.service";

@Component({
  selector: 'ngx-user-authorise',
  templateUrl: './user-authorise.component.html',
  styleUrls: ['./user-authorise.component.scss']
})
export class UserAuthoriseComponent implements OnInit {

  settings = {
    actions: {
      add: false,
    },
    edit: {
      editButtonContent: '<i class="nb-checkmark"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    mode: 'external',
    columns: {
      name: {
        title: 'Jméno',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
    },
  };

  allUsers: Array<AuthoriseUser>;
  constructor(
    private userService: UserService,
    private localAuthService: LocalAuthService,
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(users => {
      this.allUsers = users.users.filter(user => {
        if(user.state === 'authorised') {
          return false;
        } else {
          return true;
        }
      });
    })
  }

  onEdit(event) {
    this.localAuthService.authorise(event.data._id).subscribe(response => {
      if(response) {
        console.log(response);
        this.loadUsers();
        window.location.reload()
      }
    })
  }

  onDelete(event) {
    this.userService.remove(event.data._id).subscribe(user => {
      console.log(user);
      this.loadUsers()
      window.location.reload()
    })
  }

}
