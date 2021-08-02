import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { UnsavedchangesGuard } from './unsavedchanges.guard';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ UnsavedchangesGuard, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
