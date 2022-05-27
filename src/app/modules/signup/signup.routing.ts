import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/_helpers/_guards/auth.guard';
import { SignupComponent } from './signup.component';

 export const SignupRoutes: Routes = [
  { 
    path:'',
    component:SignupComponent,
    canActivate:[AuthGuard]
   },
];


