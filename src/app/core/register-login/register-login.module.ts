import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistrarComponent } from './registrar/registrar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    RegistrarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RegisterLoginModule { }
