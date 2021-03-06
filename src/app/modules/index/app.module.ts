import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './pages/index/app.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { SideBarLIComponent } from './components/sidebar-li/sidebar-li.component';

import { LoginComponent } from '../login/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SideBarLIComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
