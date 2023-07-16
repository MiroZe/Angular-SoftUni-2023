import { Injectable } from '@angular/core';
import { DummyUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : DummyUser | undefined;

  get isLoggedIn() :boolean {
    return !!this.user
  }

  constructor() { 
  try {
    const lsUser = localStorage.getItem('user') || ''
    this.user = JSON.parse(lsUser) 
  } catch (error) {
    this.user = undefined
  }

}

login() :void {
  this.user = {
    email: 'johnDoe@gmail.com',
    firstName: 'John',
    phone: '08844321321',
    password: 'hkjhgggkjfas'
  }
  localStorage.setItem('user', JSON.stringify(this.user))
}
logout() :void{ 
  this.user = undefined
  localStorage.removeItem('user')
}


 

}
