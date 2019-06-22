import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [

  LoginComponent],
  imports: [
    BrowserModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
