import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { LoginComponent } from './modules/login/login.component';
//import { AdminComponent } from './modules/admin/admin.component';
//import { HomeComponent } from './modules/home/home.component';
import { AuthGuardService } from './guards/auth.guard.service';


const routes: Routes = [
 //   {path: '' , component: LoginComponent , canActivate: [AuthGuardService]},
 //   {path: 'login' , component: LoginComponent},
 //   {path: 'admin' , component: AdminComponent , canActivate: [AuthGuardService]},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
