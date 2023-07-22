import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';

const apiURL = environment.apiURL
@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   

      if(request.url.startsWith('/api')) {
        request = request.clone({url:request.url.replace('/api', apiURL), withCredentials:true})
      }
      
      return next.handle(request)
  
}
}


export const AuthInterceptorProvider :Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass : AuthInterceptor,
  multi:true
}
