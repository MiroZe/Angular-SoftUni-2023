

import {Injectable} from '@angular/core'
import { AuthService } from '../auth/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService ,private router: Router) {

    }




    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : | boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>{
        return this.authService.isLoggedIn || this.router.createUrlTree(['/auth/login'])
    }
}


