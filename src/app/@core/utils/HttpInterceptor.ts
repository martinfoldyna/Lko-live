import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../pages/auth/auth.service";

export class HttpHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'JWT ' + AuthService.getToken()

      })
    });

    console.log('Intercepted HTTP call', authReq);

    return next.handle(authReq);
  }
}
