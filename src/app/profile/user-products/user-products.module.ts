import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProductsComponent } from './user-products.component';
import { RouterModule } from '@angular/router';
import { ProfileRoutes } from './profile.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports: [
    RouterModule.forChild(ProfileRoutes),
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [UserProductsComponent]
})
export class UserProductsModule { }
