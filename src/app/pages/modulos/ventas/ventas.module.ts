import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { VentasRoutingModule } from './ventas-routing.module';

import { VentasComponent } from './ventas.component';

import { CotizacionComponent } from './documentos/cotizacion/cotizacion.component';
import { AgregarCotizacionVComponent } from './documentos/cotizacion/agregar-cotizacion-v/agregar-cotizacion-v.component';
import { EditarCotizacionVComponent } from './documentos/cotizacion/editar-cotizacion-v/editar-cotizacion-v.component';
import { NotaPedidoComponent } from './documentos/nota-pedido/nota-pedido.component';
import { NotaPedidoAgregarVComponent } from './documentos/nota-pedido/nota-pedido-agregar-v/nota-pedido-agregar-v.component';
import { NotaPedidoEditarVComponent } from './documentos/nota-pedido/nota-pedido-editar-v/nota-pedido-editar-v.component';
import { DocumentosVentasComponent } from './documentos/documentos-ventas/documentos-ventas.component';
import { ClientesComponent } from './catalogos/clientes/clientes.component';
import { ProductosComponent } from './catalogos/productos/productos.component';



@NgModule({
  declarations: [
    VentasComponent,

    CotizacionComponent,
    AgregarCotizacionVComponent,
    EditarCotizacionVComponent,
    NotaPedidoComponent,
    DocumentosVentasComponent,

    ClientesComponent,
    ProductosComponent,
    NotaPedidoAgregarVComponent,
    NotaPedidoEditarVComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
