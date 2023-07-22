import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ErrorComponent } from './error/error.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    ErrorComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    ErrorComponent
  ],
  providers: []
})
export class CoreModule { }
