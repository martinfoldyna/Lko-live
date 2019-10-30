import { NgModule } from '@angular/core';
import {NbCardModule, NbInputModule, NbListModule, NbMenuModule, NbButtonModule, NbLayoutModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {AuthModule} from "./auth/auth.module";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpHeaderInterceptor} from "../@core/utils/HttpInterceptor";
import {PhotosModule} from "./photos/photos.module";
import { UserComponent } from './user/user.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    AuthModule,
    PhotosModule,
    NbCardModule,
    NbListModule,
    NbInputModule,
    NbButtonModule,
    NbLayoutModule,
    FormsModule,
  ],
  declarations: [
    PagesComponent,
    UserComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true
    },
  ],
})
export class PagesModule {
}
