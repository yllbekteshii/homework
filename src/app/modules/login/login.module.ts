import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoginRoutes } from './login.routing';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/_helpers/interceptors/token.interceptor';
@NgModule({
  declarations:[
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(LoginRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },],

})
export class LoginModule { }
