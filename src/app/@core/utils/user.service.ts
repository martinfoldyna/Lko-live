import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../data/users';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment';
import {DataResponse, UserResponse} from '../data/response';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getUser(): Promise<User> {
    const sessionUser = sessionStorage.getItem('user');
    return sessionUser ? Promise.resolve(JSON.parse(sessionUser)) : undefined;
  }

  updateUser(user): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${environment.apiUrl}user/update/${user._id}`, user);
  }
}
