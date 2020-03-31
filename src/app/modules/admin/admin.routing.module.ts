import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthGuardService } from '../../guards/auth.guard.service';


const adminRoutes: Routes = [
    {path: 'admin' , component: AdminComponent },
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {
}
