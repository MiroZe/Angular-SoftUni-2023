import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/constants';
import { MessageBusService, MessageType } from 'src/app/core/message-bus.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  constructor(private router: Router, private authService: AuthService, private messageBus: MessageBusService) {}

  login(form : NgForm): void {

    if(!form.valid) {
      return;
    }
    const {email, password} = form.value

     this.authService.login(email,password).subscribe(() => {
      this.messageBus.notifyForMessage({text: 'Successfully login', type: MessageType.Success})
      this.router.navigate(['/'])
     })
     
}
}
