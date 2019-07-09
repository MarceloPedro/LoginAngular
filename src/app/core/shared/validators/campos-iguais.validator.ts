import { AbstractControl } from '@angular/forms';

export function camposIguaisValidator(campo: AbstractControl): { [key: string]: any } | null {
    const senha = campo.get('password');
    const confirmarSenha = campo.get('passwordConfirm');

    if(senha.value === confirmarSenha.value){
        return null;
    }
    return {
      'camposIguais': true
    };
}
