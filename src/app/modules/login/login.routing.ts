import { Routes } from '@angular/router';
import { AuthGuard } from 'app/_guards/auth.guard';
import { LoginComponent } from './login.component';


export const LoginRoutes: Routes = [
  { 
    path: '',
    component:LoginComponent,
    canActivate: [AuthGuard]
   },
];
