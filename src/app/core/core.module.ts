import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { RegisterLoginModule } from './register-login/register-login.module';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RegisterLoginModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
