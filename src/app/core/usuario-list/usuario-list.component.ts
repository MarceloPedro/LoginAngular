import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  @Input() tabelaDeUsuariosCadastrados: Usuario[];

  constructor() { }

  ngOnInit() {
  }

}
