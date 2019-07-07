import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cep } from './cep';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }


  consultaCep(cep:string){
    return this.http.get<cep>(`//viacep.com.br/ws/${ cep }/json/`);
  }
}
