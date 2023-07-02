import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent,
    PostsComponent,
    MainComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
