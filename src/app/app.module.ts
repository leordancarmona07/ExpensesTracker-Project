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
import { ExpensesComponent } from './Public/User/expenses/expenses.component';
import { UpdateComponent } from './update/update.component';
import { FoodComponent } from './Public/User/expenses-report/food/food.component';
import { SavingsComponent } from './Public/User/expenses-report/savings/savings.component';
import { TransportationComponent } from './Public/User/expenses-report/transportation/transportation.component';
import { PersonalCareComponent } from './Public/User/expenses-report/personal-care/personal-care.component';
import { WaterComponent } from './Public/User/expenses-report/water/water.component';
import { ElectricityComponent } from './Public/User/expenses-report/electricity/electricity.component';
import { PhoneComponent } from './Public/User/expenses-report/phone/phone.component';
import { ClothingComponent } from './Public/User/expenses-report/clothing/clothing.component';
import { ProfileComponent } from './Public/User/profile/profile.component';

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
    AboutComponent,
    ExpensesComponent,
    UpdateComponent,
    FoodComponent,
    SavingsComponent,
    TransportationComponent,
    PersonalCareComponent,
    WaterComponent,
    ElectricityComponent,
    PhoneComponent,
    ClothingComponent,
    ProfileComponent
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
