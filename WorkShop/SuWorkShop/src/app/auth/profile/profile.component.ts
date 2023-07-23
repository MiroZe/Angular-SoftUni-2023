import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/constants';
import { AuthService } from '../auth.service';
import { User } from 'src/app/interfaces/user';

interface Profile {
  username: string;
  email: string;
  tel: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('profileForm') profileForm: NgForm | undefined;

  currentUser!: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getProfile$().subscribe({
      next: (user) => (this.currentUser = user),
    });
  }

  isEditMode: boolean = true;
  domains = DEFAULT_EMAIL_DOMAINS;

  toggelMode(): void {
    setTimeout(() => {
      this.profileForm?.setValue({
        username: this.currentUser.username,
        email: this.currentUser.email,
        tel: this.currentUser?.tel,
      });
    });

    this.isEditMode = !this.isEditMode;
  }

  saveUserData(form: NgForm) {
    if (form.invalid) return;

    const { username, email, tel } = form.value;

    this.authService.updateProfile(username, email, tel).subscribe((user) => {
      (this.currentUser = user)
      this.toggelMode();
    });
  }
}
