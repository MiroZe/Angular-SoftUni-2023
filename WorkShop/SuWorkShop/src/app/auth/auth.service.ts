import { Injectable, OnDestroy } from '@angular/core';
import { DummyUser, User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, catchError, filter, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private user$$ = new BehaviorSubject <null | undefined | User >(undefined)
  user$ = this.user$$.asObservable().pipe(filter((val) : val is User | null  => val != undefined))

  user! : User | null;

  get isLoggedIn() :boolean {
    return !!this.user
  }
  subscription : Subscription

  constructor(private http :HttpClient) { 
   this.subscription = this.user$.subscribe(user => this.user = user)
    
  }
  


login(email: string, password: string) {
  return this.http.post<User>('/api/login', {email,password}).pipe(tap(user=> this.user$$.next(user)))
  
}
logout() { 
 
  return this.http.post<void>('/api/logout', {}).pipe(tap(()=> this.user$$.next(null)))
 
}

register(username:string, email:string, password:string, rePassword: string, tel?: string)  {
return this.http.post<User>('/api/register', {username,email,password,rePassword, tel})
.pipe(tap(user=> this.user$$.next(user)))
}

getUser()  {
  return this.http.get<User>('/api/users/profile')
  .pipe(tap(user=> this.user$$.next(user)),
  catchError((err)=> {
    this.user$$.next(null)
    return of(err)
  }))
  
}

updateProfile(username: string, email:string, tel?: string) {
  return this.http.put<User>('/api/users/profile', {username, email,tel }).
  pipe(
    tap(user => this.user$$.next(user))
    
  )
}

ngOnDestroy(): void {
  this.subscription.unsubscribe()
}
 

}
