import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { AppEmailDirective } from './validators/email.directive';
import { ShortenPipe } from './shorten.pipe';



@NgModule({
  declarations: [
    SpinnerComponent,
    AppEmailDirective,
    ShortenPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    AppEmailDirective,
    ShortenPipe
  ]

})
export class SharedModule { }
