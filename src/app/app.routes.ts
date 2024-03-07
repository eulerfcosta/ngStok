import {Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {RecoverPasswordComponent} from './component/recover-password/recover-password.component';
import {BaseComponent} from './component/application/base/base.component';
import {DashboardComponent} from './application/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'forgot-password', component: RecoverPasswordComponent},
    {path: 'appllication', component: BaseComponent, children: [{path: 'dashboard', component: DashboardComponent}]},

];
