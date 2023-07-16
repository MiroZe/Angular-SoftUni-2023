import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { AppEmailDirective } from './validators/email.directive';



@NgModule({
  declarations: [
    SpinnerComponent,
    AppEmailDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    AppEmailDirective
  ]

})
export class SharedModule { }
