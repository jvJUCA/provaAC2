import { Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
    {path: 'login', pathMatch: 'full', component: LoginComponentComponent},
    {path: 'principal', pathMatch: 'full', component: PrincipalComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
];
