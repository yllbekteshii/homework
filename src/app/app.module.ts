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
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
@NgModule({
  declarations: [			
    AppComponent, NavBarComponent,
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


  ],
  providers: [AuthService,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true } ],

  bootstrap: [AppComponent]
})
export class AppModule { }
