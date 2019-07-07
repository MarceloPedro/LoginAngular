import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ConsultaCepService } from '../../shared/consulta-cep/consulta-cep.service';
import { cep } from '../../shared/consulta-cep/cep';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  registrarForm: FormGroup;

  constructor(
    private consultaCepService: ConsultaCepService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
   this.registrarForm = this.formBuilder.group({
     email:[''],
     password:[''],
     passwordConfirm:[''],
     cep:[''],
     numero:[''],
     complemento:[''],
     rua:[''],
     cidade:[''],
     estado:[''],
   })
  }

  consultarCep(cep){
    var cep = cep.replace(/\D/g, '');
    
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) 
        this.consultaCepService.consultaCep(cep).subscribe(dados => 
            this.popularRegistrarForm(dados, this.registrarForm)
          )
      }
  }

  popularRegistrarForm(dados: cep, form: FormGroup){
    form.patchValue({
      complemento: dados.complemento,
      rua: dados.logradouro,
      cidade: dados.localidade,
      estado: dados.uf
      
    })
  }


}
