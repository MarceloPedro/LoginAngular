import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-msg-form',
  templateUrl: './alert-msg-form.component.html',
  styleUrls: ['./alert-msg-form.component.css']
})
export class AlertMsgFormComponent implements OnInit {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;
  constructor() { }

  ngOnInit() {
  }

}
