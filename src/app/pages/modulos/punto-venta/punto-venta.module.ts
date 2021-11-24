import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { PuntaVentaRoutingModule } from './punto-venta-routing.module';

import { PuntoVentaComponent } from './punto-venta.component';

import { VentaDirectaComponent } from './documentos/venta-directa/venta-directa.component';
import { SesionesComponent } from './documentos/sesiones/sesiones.component';


@NgModule({
  declarations: [
    PuntoVentaComponent,
    
    VentaDirectaComponent,
    SesionesComponent,   
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PuntaVentaRoutingModule
  ]
})
export class PuntoVentaModule { }
