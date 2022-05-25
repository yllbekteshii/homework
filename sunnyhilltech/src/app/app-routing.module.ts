import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  {path:'log-in', loadChildren:() => import('./modules/login/login.module').then(m=> m.LoginModule)},
  {path:'sign-up', loadChildren:()=> import('./modules/signup/signup.module').then(m=>m.SignupModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
