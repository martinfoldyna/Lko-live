import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthoriseUser, User} from '../../@core/data/users';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment';
import {ResultResponse, UserResponse} from '../../@core/data/response';
import {AuthorisedUserResponse} from "../../@core/data/auth";


@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getUser(): User {
    const sessionUser = sessionStorage.getItem('user');
    return sessionUser ? JSON.parse(sessionUser) : undefined;
  }

  getDatabaseUser(email: string): Observable<AuthorisedUserResponse> {
    return this.http.get<AuthorisedUserResponse>(`${environment.apiUrl}user/load/${email}`);
  }

  getPromiseUser(): Promise<User> {
    let user = this.getUser();
    return user ? Promise.resolve(this.getUser()) : Promise.reject('User not found');
  }

  getAllUsers(): Observable<AuthorisedUserResponse> {
    return this.http.get<AuthorisedUserResponse>(`${environment.apiUrl}user/getAll`);
  }

  update(id: string, user): Observable<AuthorisedUserResponse> {
    return this.http.post<AuthorisedUserResponse>(`${environment.apiUrl}user/update/${id}`, user);
  }

  remove(id: string): Observable<ResultResponse> {
    return this.http.post<ResultResponse>(`${environment.apiUrl}user/remove/${id}`, {});
  }
}
