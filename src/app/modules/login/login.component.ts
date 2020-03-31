import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usuario: Usuario = new Usuario();

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
    }

    auth(){
        console.log('teste');
        console.log(this.usuario);
        this.authService.auth(this.usuario);
        if (this.authService.getAutenticado()) {
            console.log('Autenticado');
        } else {
            console.log('Usuario inexistente');
        }
    }
}
