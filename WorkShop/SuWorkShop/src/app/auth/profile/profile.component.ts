import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/constants';

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
export class ProfileComponent {

  isEditMode : boolean = true;
  domains = DEFAULT_EMAIL_DOMAINS

  profileDetails! : Profile 





  toggelMode() :void {
    this.isEditMode = !this.isEditMode
  }

  saveUserData(form: NgForm) {

    if(form.invalid) return;
    

    this.profileDetails = form.value
    console.log(this.profileDetails);
    
    this.toggelMode()
    

  }

}
