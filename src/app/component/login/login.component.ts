import {Component} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {User} from '../../model/responseModel/user';
import {ModalErrorMsgComponent} from '../share/modal-error-msg/modal-error-msg.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardActions,
        MatFormField,
        MatInput,
        MatLabel,
        MatError,
        MatCardContent,
        MatIcon,
        MatCardFooter,
        MatCardTitle,
        MatButton,
        ReactiveFormsModule,
        RouterLink,
        ModalErrorMsgComponent
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

    email = new FormControl('');
    senha = new FormControl('');


    constructor(private authService: AuthService, public dialog: MatDialog) {
    }


    onLogon() {
        this.authService.login(this.email.value, this.senha.value).subscribe({
                next: (response) => {
                    console.log(response);
                    let user = new User();
                    user = response;
                    console.log(user.token);
                },
                error: (response) => {
                    // console.log('Erro' + response.status);
                    this.dialog.open(ModalErrorMsgComponent,{data:{text:"teste 123"}});

                }
            }
        );
    }
}
