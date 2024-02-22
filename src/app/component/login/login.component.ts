import {Component} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

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
        RouterLink
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

}