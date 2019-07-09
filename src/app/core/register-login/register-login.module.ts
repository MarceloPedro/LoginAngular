import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistrarComponent } from './registrar/registrar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsuarioListModule } from '../usuario-list/usuario-list.module';

@NgModule({
  declarations: [
    RegistrarComponent
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    UsuarioListModule
  ]
})
export class RegisterLoginModule { }
