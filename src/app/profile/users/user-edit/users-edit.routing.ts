import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from 'app/_helpers/_guards/no-auth.guard';
import { UsersEditComponent } from './users-edit.component';

export const UsersEditRoutes: Routes = [
  { path:'',component:UsersEditComponent,canActivate:[NoAuthGuard] },
];


