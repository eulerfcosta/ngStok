import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './guards/auth.guard.service';
import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';
import { LoginModule } from './modules/login/login.module';
import { HomeModule } from './modules/home/home.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { CondominiosModule } from './modules/condominios/condominios.module';
import { EstoquesModule } from './modules/estoques/estoques.module';
import { ItemsModule } from './modules/items/items.module';
import { ProdutosModule } from './modules/produtos/produtos.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        LoginModule,
        HomeModule,
        ClientesModule,
        CondominiosModule,
        EstoquesModule,
        ItemsModule,
        ProdutosModule,
        UsuariosModule
    ],
    providers: [AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule { }
