import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-msg-form',
  templateUrl: './success-msg-form.component.html',
  styleUrls: ['./success-msg-form.component.css']
})
export class SuccessMsgFormComponent implements OnInit {

  @Input() mostrarMsgSucesso: boolean;
  @Input() msgSucesso: string;

  constructor() { }

  ngOnInit() {
  }

}
