import { Component, OnInit } from '@angular/core';
import {LocalAuthService} from '../auth.service';
import {Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";
import {MsalService} from "@azure/msal-angular";
import {OAuthSettings} from "../../../../oauth";
import {AuthService, AuthServiceConfig, GoogleLoginProvider} from "angularx-social-login";
import {GeneralService} from "../../../@core/utils/general.service";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any;
  errors: string[];
  messages: string[];
  submitted: boolean;
  authenticated: boolean = false;
  fetchingData = false;
  serverRunning = true;



  //TODO:: Microsoft login

  constructor(
    private toaster: NbToastrService,
    private authService: LocalAuthService,
    private generalService: GeneralService,
    private router: Router,
    private msalService: MsalService,
    private toastr: NbToastrService,
    private socialAuth: AuthService,
  ) {
    this.user = {
      rememberMe: false
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('rememberUser')) {
      const rememberedUser = localStorage.getItem('rememberUser');
      this.user = rememberedUser;
    }

    this.generalService.stateCheck().subscribe(data => {
      if(data) this.serverRunning = true;
    })

    if (this.serverRunning) {
      this.socialStateCheck();
    }
  }

  rememberUser(user) {
    localStorage.setItem('rememberUser', JSON.stringify(user));
  }

  private storeUser(data, loggedInBy) {
    let token = loggedInBy === "social" ? data["idToken"] : data["token"];
    let user = loggedInBy === "social" ? data : data["user"];

    sessionStorage.setItem('auth_token', token);
    sessionStorage.setItem('user', JSON.stringify(user))
    sessionStorage.setItem('loggedInBy', loggedInBy);
  }

  login() {
      console.log(this.user);
      this.authService.login(this.user).subscribe(data => {
        this.toaster.success('Úspěšně jste se přihlásili!', 'Vítejte')
        if (this.user.rememberMe) {
          this.rememberUser({username: this.user.username, password: this.user.password});
        }
        console.log('GOT DATA', data)
        if (data["token"]) {
          // sessionStorage.setItem('auth_token', data["token"]);
          // sessionStorage.setItem('user', JSON.stringify(data["user"]))
          // sessionStorage.setItem('loggedInBy', 'locale')
          this.storeUser(data, 'locale')
          this.router.navigateByUrl('/pages/dashboard');
        } else {
          console.log('error');
        }
      }, err => {
        this.toaster.danger(err.message, 'Něco se pokazilo');
      });
  }

    //TODO:Přidat Google login

    googleLogin() {
      this.authService.googleLogin().then(user => {
        this.toaster.success('Úspěšně jste se přihlásili!', 'Vítejte')
        // sessionStorage.setItem('auth_token', user["idToken"]);
        // sessionStorage.setItem('user', JSON.stringify(user));
        // sessionStorage.setItem('loggedInBy', 'google')
        this.storeUser(user, 'social');
        this.router.navigateByUrl('/pages/dashboard');
        this.user = user
      })
      // this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      //   this.toaster.success('Úspěšně jste se přihlásili!', 'Vítejte')
      //       sessionStorage.setItem('auth_token', user["idToken"]);
      //       sessionStorage.setItem('user', JSON.stringify(user));
      //       sessionStorage.setItem('loggedInBy', 'google')
      //       this.router.navigateByUrl('/pages/dashboard');
      //       this.user = user
      // });
    }

    socialStateCheck() {
      this.socialAuth.authState.subscribe(user => {
        this.fetchingData = true;
        console.log(user);
        if (user) {
          this.storeUser(user, 'social');
          this.router.navigate(['/pages/dashboard']);
          this.fetchingData = false;
        } else {
          console.log('No-one logged in');
          this.fetchingData = false;
        }
      });
    }

    async microsoftLogin() {
      let result = await this.msalService.loginPopup(OAuthSettings.scopes)
        .catch(reason => {
          this.router.navigateByUrl('/pages/dashboard/');
          this.toaster.danger(JSON.stringify(reason, null, 2), 'Nepodařilo se přihlásit')
        })

      if(result) {
        // this.toaster.success('Úspěšně jste se přihlásili!', 'Vítejte')
        // sessionStorage.setItem('auth_token', user["idToken"]);
        // sessionStorage.setItem('user', JSON.stringify(user));
        // sessionStorage.setItem('loggedInBy', 'google')

        // this.user = user
        console.log(result);
      }
    }

    microsoftLogout() {
      this.msalService.logout();
    }

    load() {
      this.authService.load().subscribe(data => {
        console.log(data);
      })
    }
}
