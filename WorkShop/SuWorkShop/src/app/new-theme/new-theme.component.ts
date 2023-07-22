import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {

  constructor(private themeService: ApiService, private router:Router){}




  neThemeSubmitHandler(form : NgForm) :void {
    if(form.invalid) return 
    console.log(form.value);
    

    const{ themeName, postText} = form.value

    this.themeService.createTheme(themeName, postText)
    .subscribe(()=> this.router.navigate(['/themes']))

  }
  

}
