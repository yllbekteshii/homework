import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProductsComponent } from './user-products.component';
import { RouterModule } from '@angular/router';
import { ProfileRoutes } from './profile.routing';

@NgModule({
  imports: [
    RouterModule.forChild(ProfileRoutes),
    CommonModule,
  ],
  declarations: [UserProductsComponent]
})
export class UserProductsModule { }
