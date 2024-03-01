import {Component, Inject} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../service/auth/auth.service';
import {DialogRef} from '@angular/cdk/dialog';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@Component({
    selector: 'app-modal-error-msg',
    standalone: true,
    imports: [
        NgIf,
        MatDialogModule,
        MatCard,
        MatCardActions,
        MatButtonModule,
        MatCardTitle,
        MatCardContent,
        MatCardHeader
    ],
    templateUrl: './modal-error-msg.component.html',
    styleUrl: './modal-error-msg.component.css',
})
export class ModalErrorMsgComponent {
    mostrar: boolean = false;

    constructor(private dialogRef: DialogRef<ModalErrorMsgComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.data = data;
    }

    close() {
        this.dialogRef.close();
    }
}
