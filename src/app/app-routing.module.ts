import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { PaymentComponent } from './payment/payment.component';
import { UnsavedchangesGuard } from './unsavedchanges.guard';

const routes: Routes = [
  {path: 'login-form',component: LoginFormComponent, canDeactivate:[ UnsavedchangesGuard]},
 {path:'payment', component:PaymentComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
