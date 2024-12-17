import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shoping-cart.component';  // Import ShoppingCartComponent

export const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'home', component: HomeComponent },  // Home Page (can be redirected to Sign In)
  { path: 'cart', component: ShoppingCartComponent },  // Cart Page points to ShoppingCartComponent
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },  // Default route redirects to sign-in page
  { path: '**', redirectTo: 'sign-in', pathMatch: 'full' }  // Wildcard route for 404 redirect
];


