import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { AboutComponent } from './Public/Views/about/about.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
