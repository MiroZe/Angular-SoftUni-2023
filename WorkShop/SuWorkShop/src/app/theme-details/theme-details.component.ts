import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../interfaces/theme';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css'],
})
export class ThemeDetailsComponent implements OnInit {
  theme: Theme | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.getTheme();
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  getTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    console.log(id);

    this.apiService.loadOneTheme(id).subscribe({
      next: (t) => {
        this.theme = t;
        console.log(this.theme);
      },
      error: (err) => console.log(err.message),
    });
  }
}
