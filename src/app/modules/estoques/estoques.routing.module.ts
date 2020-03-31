import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstoquesComponent } from './estoques.component';
import { AuthGuardService } from '../../guards/auth.guard.service';


const estoquesRoutes: Routes = [
    {path: 'estoques' , component: EstoquesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(estoquesRoutes)],
    exports: [RouterModule]
})

export class EstoquesRoutingModule {
}
