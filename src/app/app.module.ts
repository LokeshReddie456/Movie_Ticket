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
// import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({

  declarations: [
    AppComponent,
    MovieslistComponent,
    LoginComponent,
    // SignupComponent,
    UserComponent,
    RegisterComponent
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

 