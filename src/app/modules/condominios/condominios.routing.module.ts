import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CondominiosComponent } from './condominios.component';
import { AuthGuardService } from '../../guards/auth.guard.service';


const condominiosRoutes: Routes = [
    {path: 'condominios' , component: CondominiosComponent },
];

@NgModule({
    imports: [RouterModule.forChild(condominiosRoutes)],
    exports: [RouterModule]
})

export class CondominiosRoutingModule {
}
