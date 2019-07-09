import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { ConsultaCepService } from '../../shared/consulta-cep/consulta-cep.service';
import { cep } from '../../model/cep';
import { camposIguaisValidator } from '../../shared/validators/campos-iguais.validator';
import { Usuario } from '../../model/usuario';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  registrarForm: FormGroup;
  msgCadastro: string;
  novoUsuario: Usuario;
  tabelaDeUsuarios: Usuario[] = [];

  constructor(
    private consultaCepService: ConsultaCepService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
   this.registrarForm = this.formBuilder.group({
     email:['', [Validators.required, Validators.email]],
     nome:['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],

     senhaGroup: this.formBuilder.group({
      password:['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      passwordConfirm:['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
     }, {validator: camposIguaisValidator}),
     
     cep:['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/\d/g)]],
     numero:['', [Validators.required, Validators.minLength(1), Validators.pattern(/\d/g)]],
     complemento:[''],
     rua:['', Validators.required],
     cidade:['', Validators.required],
     estado:['', Validators.required],
   })
  }

  consultarCep(cep){
    var cep= cep.replace(/\D/g, '');
    
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) 
        this.consultaCepService.consultaCep(cep).subscribe(dados => {
          if (!("erro" in dados)) {
            this.popularRegistrarForm(dados, this.registrarForm) 
          }else{
            this.registrarForm.get('cep').setErrors({'cepNaoEncontrado': true})
            
          }
          })
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

  verificarValidTouched(campo){
    return !this.registrarForm.get(campo).valid && this.registrarForm.get(campo).touched;
  }

  resetar(){
    this.registrarForm.reset();
    
  }

  cadUsuario(){
    if(this.registrarForm.valid){
      this.novoUsuario = this.registrarForm.getRawValue() as Usuario
      this.tabelaDeUsuarios.push(this.novoUsuario);
      this.resetar();
      this.msgCadastro = "Cadastro realizado com sucesso!";
    }    
  }

}
