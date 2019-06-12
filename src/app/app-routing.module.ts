import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditLicenseComponent} from './edit-license/edit-license.component';
import {ForgetPassComponent} from './forget-pass/forget-pass.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'edit-license', component: EditLicenseComponent},
  {path: 'forgetPass', component: ForgetPassComponent},
  // { path: '**', component: HomeComponent } //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
