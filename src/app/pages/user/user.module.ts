import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user.routing.module";
import {UserAuthoriseComponent} from "./user-authorise/user-authorise.component";
import {UserComponent} from "./user.component";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {NbCardModule} from "@nebular/theme"
import {UserOverviewComponent} from "./user-overview/user-overview.component";



@NgModule({
    declarations: [UserAuthoriseComponent, UserComponent, UserOverviewComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    Ng2SmartTableModule,
    NbCardModule
  ]
})
export class UserModule { }
