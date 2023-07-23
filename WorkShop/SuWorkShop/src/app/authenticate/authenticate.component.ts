import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  isAuthenticated: boolean = true;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getUser().subscribe({
      next: () => {
        this.isAuthenticated = false;
      },
      error: () => {
        this.isAuthenticated = false;
      },
      complete: () => (this.isAuthenticated = false),
    });
  }
}
