import { Injectable } from '@angular/core';
import { DummyUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : DummyUser | null = null

  get isLoggedIn() {
    return this.user !== null
  }

  constructor() { }
}
