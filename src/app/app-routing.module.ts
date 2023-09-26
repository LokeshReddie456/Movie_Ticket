import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieslistComponent } from './Movieslist/movieslist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { SeatsComponent } from './seats/seats.component';
import { TimeComponent } from './time/time.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'list',component:MovieslistComponent},
  {path:'user',component:UserComponent},
  {path:'seats',component:SeatsComponent},
  {path:'time',component:TimeComponent},
  {path:'payment',component:PaymentComponent},
  {path:'payment-success',component:PaymentSuccessComponent},
  { path: '', redirectTo: '/payment', pathMatch: 'full' },
  {path:'Movieslist',component:MovieslistComponent}]


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

 