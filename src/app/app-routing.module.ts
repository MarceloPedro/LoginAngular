import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarComponent } from './core/register-login/registrar/registrar.component';
import { LoginComponent } from './core/register-login/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
