import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/constants';
import { AuthService } from '../auth.service';


interface Profile {
username: string;
email:string;
tel: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  

  @ViewChild('profileForm') profileForm:NgForm
  
  

  currentUser! :Profile 
  

  constructor(private authService: AuthService ) {}


  ngOnInit(): void {
    
    
    const { username, email, tel } = this.authService.user!;
    this.currentUser = {
      username,
      email,
      tel,
    };

    this.profileForm.setValue({
      username,
      email,
      tel,
    })
    

  }

  isEditMode : boolean = true;
  domains = DEFAULT_EMAIL_DOMAINS
  

 
  toggelMode() :void {
   
    this.isEditMode = !this.isEditMode
  }

  saveUserData(form: NgForm) {

    if(form.invalid) return;

    const {username,email,tel} = form.value;


    this.authService.updateProfile(username,email,tel).subscribe( (user)=> {
      form.setValue({username,email,tel})
      this.toggelMode()
    }     
    )
    

  
   
    

  }

}
