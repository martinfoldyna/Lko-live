import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../data/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() {
  }

  getUser(): Promise<User> {
    const sessionUser = sessionStorage.getItem('user');
    return sessionUser ? Promise.resolve(JSON.parse(sessionUser)) : undefined;
  }
}
