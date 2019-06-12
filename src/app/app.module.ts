import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { EditLicenseComponent } from './edit-license/edit-license.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgxPasswordToggleModule } from 'ngx-password-toggle';
import { SidbarComponent } from './sidbar/sidbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPassComponent,
    EditLicenseComponent,
    NavbarComponent,
    HomeComponent,
    SidbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPasswordToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
