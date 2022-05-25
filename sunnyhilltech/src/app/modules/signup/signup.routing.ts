import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  { 
    path:'',
    component:SignupComponent
   },
];

export const SignupRoutes = RouterModule.forChild(routes);
