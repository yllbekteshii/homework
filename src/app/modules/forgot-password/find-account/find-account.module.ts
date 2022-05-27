import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindAccountComponent } from './find-account.component';
import { FindAccountRoutes } from './find-account.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    RouterModule.forChild(FindAccountRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [FindAccountComponent]
})
export class FindAccountModule { }
