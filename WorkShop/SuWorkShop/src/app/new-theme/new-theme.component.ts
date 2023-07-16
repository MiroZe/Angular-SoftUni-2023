import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {




  neThemeSubmitHandler(form : NgForm) :void {
    if(form.invalid) return 

    console.log(form.value, 'clicked');

  }
  

}
