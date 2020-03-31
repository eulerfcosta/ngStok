import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';
import { AuthGuardService } from '../../guards/auth.guard.service';


const usuariosRoutes: Routes = [
    {path: 'usuarios' , component: UsuariosComponent },
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})

export class UsuariosRoutingModule {
}
