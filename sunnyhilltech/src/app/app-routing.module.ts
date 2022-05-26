import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

const routes = [
  { path: '', redirectTo: 'log-in', pathMatch: 'full' },
  {path:'log-in', loadChildren:() => import('./modules/login/login.module').then(m=> m.LoginModule),canActivate: [AuthGuard],
},
  {path:'sign-up', loadChildren:()=> import('./modules/signup/signup.module').then(m=>m.SignupModule),canActivate: [AuthGuard]},
  {path:'products',loadChildren:()=> import('./profile/user-products/user-products.module').then(m=>m.UserProductsModule)},
  {path:'edit-profile',loadChildren:()=> import('./profile/edit-profile/edit-profile.module').then(m=>m.EditProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
