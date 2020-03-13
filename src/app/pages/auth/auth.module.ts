import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {AuthRoutingModule} from './auth-routing.module';
import {NbAuthModule, NbLoginComponent} from "@nebular/auth";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutModule,
  NbIconModule,
  NbSpinnerModule
} from "@nebular/theme";
import { RegisterComponent } from './register/register.component';
import {NbEvaIconsModule} from "@nebular/eva-icons";


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbLayoutModule,
    NbActionsModule,
    NbAuthModule,
    NbIconModule,
    NbSpinnerModule
  ]
})
export class AuthModule { }
