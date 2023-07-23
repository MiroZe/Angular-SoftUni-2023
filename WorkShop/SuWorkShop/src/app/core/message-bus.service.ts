import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export enum MessageType {
  Success,
  Error
}

export interface Message {
  text: string,
  type: MessageType
}

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {

  private messageQ$$ = new Subject<Message | undefined>();
  public onNewMessage$ = this.messageQ$$.asObservable()

  constructor() { }

  notifyForMessage(message: {text: string, type: MessageType}) {
    this.messageQ$$.next(message)
  }

  clearMessage() {
    this.messageQ$$.next(undefined)
  }
}
