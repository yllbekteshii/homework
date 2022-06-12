import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from 'app/_helpers/_guards/no-auth.guard';
import { UserListComponent } from './user-list.component';

export const UserListRoutes: Routes = [
  { path:'',component:UserListComponent,canActivate:[NoAuthGuard] },
];


