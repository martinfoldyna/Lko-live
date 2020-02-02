import { NgModule } from '@angular/core';
import {NbCardModule, NbInputModule, NbListModule, NbMenuModule, NbButtonModule, NbLayoutModule, NbIconModule} from '@nebular/theme';
import {MsalModule} from '@azure/msal-angular';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './nx_dashboard/dashboard.module';
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
import {ArticlesModule} from "./articles/articles.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import {OAuthSettings} from "../@core/utils/oauth";
import {VideoModule} from "./video/video.module";

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
        ArticlesModule,
        VideoModule,
        NbCardModule,
        NbListModule,
        NbInputModule,
        NbButtonModule,
        NbLayoutModule,
        FormsModule,
        NbIconModule,
        MsalModule.forRoot({
            clientID: OAuthSettings.appId,
        })
    ],
    declarations: [
        PagesComponent,
        UserComponent,
        DashboardComponent,
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
