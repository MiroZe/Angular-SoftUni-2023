import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';
import { ThemesComponent } from './themes/themes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthGuard } from './guards/authGuard';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // redirectTo: '/home',
    component: HomeComponent,
  },
  {
    path: 'themes',
    component: ThemesComponent,
  },
  {
    path: 'themes/:themeId',
    component: ThemeDetailsComponent,
  },
  {
    path: 'new-theme',
    component: NewThemeComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
