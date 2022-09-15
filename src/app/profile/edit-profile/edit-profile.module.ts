import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import { ProfileRoutes } from '../user-products/profile.routing';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditProfileRoutingModule } from './edit-profile-routing.module';
@NgModule({
  imports: [
    RouterModule.forChild(EditProfileRoutingModule),
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,  
  ],
  declarations: [EditProfileComponent]
})
export class EditProfileModule { }
