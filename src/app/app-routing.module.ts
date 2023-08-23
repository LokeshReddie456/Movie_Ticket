import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieslistComponent } from './Movieslist/movieslist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
// import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'list',component:MovieslistComponent},
  {path:'user',component:UserComponent},
  // {path:'dashboard',component:DashboardComponent},
  {path:'Movieslist',component:MovieslistComponent}]


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

 