import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {path:'log-in', loadChildren:() => import('./modules/login/login.module').then(m=> m.LoginModule)},
  {path:'sign-up', loadChildren:()=> import('./modules/signup/signup.module').then(m=>m.SignupModule)},
  {path:'products',loadChildren:()=> import('./profile/user-products/user-products.module').then(m=>m.UserProductsModule)},
  {path:'edit-profile',loadChildren:()=> import('./profile/edit-profile/edit-profile.module').then(m=>m.EditProfileModule)},
  {path:'find-account', loadChildren:()=> import('./modules/forgot-password/find-account/find-account.module').then(m=>m.FindAccountModule)},
  {path:'change-password', loadChildren:()=> import('./modules/forgot-password/change-password/change-password.module').then(m=>m.ChangePasswordModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
