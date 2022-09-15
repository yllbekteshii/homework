import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersEditComponent } from './users-edit.component';
import { UsersEditRoutes } from './users-edit.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    RouterModule.forChild(UsersEditRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
    
  ],
  declarations: [UsersEditComponent]
})
export class UsersEditModule { }
