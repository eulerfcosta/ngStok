import {Component} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatIcon} from '@angular/material/icon';

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
        ReactiveFormsModule,
        MatCardContent,
        MatIcon,
        MatCardFooter,
        MatCardTitle
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

}
