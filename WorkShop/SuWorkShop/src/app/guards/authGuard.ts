import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {

        return this.authService.user$.pipe(take(1), map(user => {
            if (user) {
              return true;
            }
            return this.router.createUrlTree(['/user/login'], {
                queryParams: {
                  'redirect-to': '/' + route.url.map(f => f.path).join('/')
                }
              });
            }))
          }

  }

