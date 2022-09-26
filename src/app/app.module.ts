import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginRoutes } from './modules/login/login.routing';
import { RouterModule } from '@angular/router';
import { AuthService } from './_helpers/auth.service';
import { TokenInterceptor } from './_helpers/interceptors/token.interceptor';
import { CartComponent } from './cart/cart.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [				
    AppComponent,
      CartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule,
    MatButtonModule,
    MatIconModule


  ],
  providers: [AuthService,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true } ],

  bootstrap: [AppComponent]
})
export class AppModule { }
