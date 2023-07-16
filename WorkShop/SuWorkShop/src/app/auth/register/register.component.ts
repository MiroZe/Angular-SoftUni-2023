import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-paswwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    username:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required,appEmailValidator(DEFAULT_EMAIL_DOMAINS) ]],
    tel:[''],
    passGroup: this.fb.group({
      password:['', [Validators.required, Validators.minLength(4)]],
      rePassword:['', [Validators.required]]
    },
    {
      validators:[matchPasswordsValidator('password', 'rePassword')]
    })
  })


  constructor(private fb:FormBuilder) {}


  register() {
    if(this.registerForm.invalid) return;
    
    
  }

}
