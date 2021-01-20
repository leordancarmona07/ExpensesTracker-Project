import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { HomeComponent } from './Public/home/home.component';
import { DashboardComponent } from './Public/User/dashboard/dashboard.component';
import { NavigationComponent } from './Public/User/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
