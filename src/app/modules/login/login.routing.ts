import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuard } from 'app/_helpers/_guards/auth.guard';


export const LoginRoutes: Routes = [
  { 
    path: '',
    component:LoginComponent,
    canActivate: [AuthGuard]
   },
];
