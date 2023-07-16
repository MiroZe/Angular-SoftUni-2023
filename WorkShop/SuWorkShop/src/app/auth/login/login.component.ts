import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  constructor(private router: Router, private authService: AuthService) {}

  login(form : NgForm): void {

    if(!form.valid) {
      return;
    }

    // this.authService.login();
    // this.router.navigate(['/']);
  }
}
