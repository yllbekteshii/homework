import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { RouterModule } from '@angular/router';
import { UserListRoutes } from './user-list.routing';

@NgModule({
  imports: [
    RouterModule.forChild(UserListRoutes),
    CommonModule
  ],
  declarations: [UserListComponent]
})
export class UserListModule { }
