import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { AuthModule } from './auth/auth.module';





@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent,
    PostsComponent,
    HomeComponent,
    NewThemeComponent,
    ThemeDetailsComponent,
  
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AuthModule
    
    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
