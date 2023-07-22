import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-paswwords-validator';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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


  constructor(private fb:FormBuilder, private authService : AuthService, private router: Router) {}


  register() {
    if(this.registerForm.invalid) {return};

    console.log(this.registerForm.value);
    

    const {username,email, passGroup : {password, rePassword} = {},tel} = this.registerForm.value
    this.authService.register(username!,email!,password!,rePassword!,tel || undefined)
    .subscribe(user =>{
      
      this.router.navigate(['/home'])
    }
    );
    
  }

}
