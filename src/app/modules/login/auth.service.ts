import { Injectable , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private autenticado: boolean;
    mostrarMenuEmitter = new EventEmitter<boolean>();

    constructor(private router: Router) {
        this.autenticado = false;
    }

    auth(usuario: Usuario){

        if (usuario.email === 'usuario@email.com' && usuario.senha === '123456'){
            this.autenticado = true;
            this.mostrarMenuEmitter.emit(true);
            this.router.navigate(['/home']);

        } else {
            this.autenticado = false;
            this.mostrarMenuEmitter.emit(false);
            this.router.navigate(['/login']);

        }
    }

    getAutenticado(){
        return this.autenticado;
    }
}
