import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { AuthGuardService } from '../../guards/auth.guard.service';


const produtosRoutes: Routes = [
    {path: 'produtos' , component: ProdutosComponent },
];

@NgModule({
    imports: [RouterModule.forChild(produtosRoutes)],
    exports: [RouterModule]
})

export class ProdutosRoutingModule {
}
