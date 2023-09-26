import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieslistComponent } from './Movieslist/movieslist.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { SeatsComponent } from './seats/seats.component';
import { TimeComponent } from './time/time.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
// import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({

  declarations: [
    AppComponent,
    MovieslistComponent,
    LoginComponent,
    // SignupComponent,
    UserComponent,
    RegisterComponent,
    SeatsComponent,
    TimeComponent,
    PaymentComponent,
    PaymentSuccessComponent
    // DashboardComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 