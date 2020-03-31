import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoquesRoutingModule } from './estoques.routing.module';
import { EstoquesComponent } from './estoques.component';



@NgModule({
  declarations: [EstoquesComponent],
  imports: [
    CommonModule,
    EstoquesRoutingModule
  ]
})
export class EstoquesModule { }
