import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondominiosRoutingModule } from './condominios.routing.module';
import { CondominiosComponent } from './condominios.component';



@NgModule({
  declarations: [CondominiosComponent],
  imports: [
    CommonModule,
    CondominiosRoutingModule
  ]
})
export class CondominiosModule { }
