import { Routes } from '@angular/router';
import { NoAuthGuard } from 'app/_helpers/_guards/no-auth.guard';
import { EditProfileComponent } from './edit-profile.component';

export const EditProfileRoutingModule: Routes = [
  {path:'',component:EditProfileComponent,canActivate:[NoAuthGuard]},
];



