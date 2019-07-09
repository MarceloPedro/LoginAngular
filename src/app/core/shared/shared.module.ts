import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMsgFormComponent } from './alert-msg-form/alert-msg-form.component';
import { SuccessMsgFormComponent } from './success-msg-form/success-msg-form.component';

@NgModule({
  declarations: [
    AlertMsgFormComponent,
    SuccessMsgFormComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    AlertMsgFormComponent,
    SuccessMsgFormComponent
  ]
})
export class SharedModule { }
