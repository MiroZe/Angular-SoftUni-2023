import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MessageBusService, MessageType } from './message-bus.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private messageBus: MessageBusService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err)=> {
      this.messageBus.notifyForMessage(
        {
          text:err?.error?.message || 'Something went wrong',
          type: MessageType.Error
        }
      )
      

      return throwError(() => err)
    }));
  }
}


export const MessageInterceptorProvider :Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass : ErrorHandlerInterceptor,
  multi:true
}
