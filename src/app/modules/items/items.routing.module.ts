import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';
import { AuthGuardService } from '../../guards/auth.guard.service';


const itemsRoutes: Routes = [
    {path: 'items' , component: ItemsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(itemsRoutes)],
    exports: [RouterModule]
})

export class ItemsRoutingModule {
}
