import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from "@angular/common/http";
import {LocalAuthService} from "../../pages/auth/auth.service";
import { Injectable } from '@angular/core';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = LocalAuthService.prototype.getToken();
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `JWT ${userToken}`),
    });
    return next.handle(modifiedReq);
  }
}
