import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from 'app/_helpers/_guards/no-auth.guard';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { UserProductsComponent } from './user-products.component';

export const ProfileRoutes: Routes = [
  { path:'',component:UserProductsComponent,canActivate:[NoAuthGuard]},
];


