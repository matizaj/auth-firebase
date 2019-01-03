import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:  'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting { }
