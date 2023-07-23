import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { MessageBusService, MessageType } from '../message-bus.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  message:string = ''
  isMessageError!:boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageBus: MessageBusService
  ) {}

  ngOnInit(): void {
    this.subscription =this.messageBus.onNewMessage$.subscribe(newMessage => {
     this.message = newMessage?.text || '';
     this.isMessageError = newMessage?.type === MessageType.Error

     if (this.message) {

      setTimeout(()=> {
        this.messageBus.clearMessage()

      }, 4000)
     }

    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  get isLogged() {
    return this.authService.isLoggedIn;
  }

  get user() {
    return this.authService.user;
  }
}
