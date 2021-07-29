import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { UnsavedchangesGuard } from './unsavedchanges.guard';

const routes: Routes = [
  {path: 'login-form',component: LoginFormComponent, canDeactivate:[ UnsavedchangesGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
