import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthGuardService } from '../../guards/auth.guard.service';


const loginRoutes: Routes = [
    {path: '' , component: LoginComponent },
    {path: 'login' , component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule]
})

export class LoginRoutingModule {
}
