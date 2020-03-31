import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { AuthGuardService } from '../../guards/auth.guard.service';


const clientesRoutes: Routes = [
    {path: 'clientes' , component: ClientesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(clientesRoutes)],
    exports: [RouterModule]
})

export class ClientesRoutingModule {
}
