import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserProductsComponent } from './user-products/user-products.component';

export const ProfileRoutes: Routes = [
  { path:'',component:UserProductsComponent },
  {path:'',component:EditProfileComponent}
];


