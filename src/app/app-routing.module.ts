import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { AdminComponent } from './modules/admin/admin.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
    {path: '' , component: LoginComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'admin' , component: AdminComponent},
    {path: 'home' , component: AdminComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
