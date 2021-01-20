import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { DashboardComponent } from './Public/User/dashboard/dashboard.component';
import { NavigationComponent } from './Public/User/navigation/navigation.component';
import { FooterComponent } from './Navigation/footer/footer.component';
import { HeaderComponent } from './Navigation/header/header.component';
import { HomeComponent } from './Public/Views/home/home.component';
import { AboutComponent } from './Public/Views/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    DashboardComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent
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
