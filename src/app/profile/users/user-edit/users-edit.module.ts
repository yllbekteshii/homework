import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersEditComponent } from './users-edit.component';
import { UsersEditRoutes } from './users-edit.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild(UsersEditRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    
  ],
  declarations: [UsersEditComponent]
})
export class UsersEditModule { }
