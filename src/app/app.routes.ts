import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent}
];
