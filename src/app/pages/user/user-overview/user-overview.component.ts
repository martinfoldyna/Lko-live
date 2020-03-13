import { Component, OnInit } from '@angular/core';
import {NbToastrService} from "@nebular/theme";
import {UserService} from "../user.service";
import {AuthoriseUser} from "../../../@core/data/users";
import {AuthService} from "../../../@core/utils/auth.service";
import {LocalAuthService} from "../../auth/auth.service";

@Component({
  selector: 'ngx-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {
  settings = {
    actions: {
      add: false,
      edit: true,
      delete: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-fold"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Jméno',
        type: 'string',
        editable: false,
      },
      email: {
        title: 'E-mail',
        type: 'string',
        editable: false,
      },
      role: {
        title: 'Role',
        editor: {
          type: 'list',
          config: {
            selectText: 'Vyberte možnost',
            list: [
              {value: 'teacher', title:'teacher'},
              {value: 'admin', title:'admin'},
            ],
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Vyberte roli',
            list: [
              {value: 'teacher', title:'teacher'},
              {value: 'admin', title:'admin'},
            ],
          },
        },
      }
    },
  };

  allUsers: Array<AuthoriseUser>;

  constructor(
    private userService: UserService,
    private authService: LocalAuthService,
    private toastr: NbToastrService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(users => {
      this.allUsers = users.users.filter(user => {
        if(user.state === 'authorised' && user.email !== this.userService.getUser().email) {
          return true;
        } else {
          return false;
        }
      });
    }, err => {
      this.toastr.danger('', err.error)
    })
  }

  onDelete(event) {
    this.authService.deAuthorise(event.data._id).subscribe(response => {
      if(response) {
        console.log(response);
        window.location.reload()
        this.loadUsers();
      }
    })
  }

  onSaveConfirm(event) {
    let user = event.newData;
    this.userService.update(user._id, user).subscribe(response => {
      if(response) {
        this.toastr.success('', response.code.message);
        window.location.reload();
      }
    }, err => {
      console.log(err);
      this.toastr.warning('', err.error.code.message);
    })
  }

}
