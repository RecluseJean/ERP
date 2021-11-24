import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { VentasRoutingModule } from './ventas-routing.module';

import { VentasComponent } from './ventas.component';

import { CotizacionComponent } from './documentos/cotizacion/cotizacion.component';
import { NotaPedidoComponent } from './documentos/nota-pedido/nota-pedido.component';
import { DocumentosVentasComponent } from './documentos/documentos-ventas/documentos-ventas.component';

import { ClientesComponent } from './catalogos/clientes/clientes.component';
import { ProductosComponent } from './catalogos/productos/productos.component';



@NgModule({
  declarations: [
    VentasComponent,

    CotizacionComponent,
    NotaPedidoComponent,
    DocumentosVentasComponent,

    ClientesComponent,
    ProductosComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
