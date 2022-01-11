import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { VentasRoutingModule } from './ventas-routing.module';

import { VentasComponent } from './ventas.component';

import { CotizacionComponent } from './documentos/cotizacion/cotizacion.component';
import { NotaPedidoComponent } from './documentos/nota-pedido/nota-pedido.component';
import { DocumentosVentasComponent } from './documentos/documentos-ventas/documentos-ventas.component';
import { ClientesComponent } from './catalogos/clientes/clientes.component';
import { AgregarClientesCvComponent } from './catalogos/clientes/agregar-clientes-cv/agregar-clientes-cv.component';
import { EditarClientesCvComponent } from './catalogos/clientes/editar-clientes-cv/editar-clientes-cv.component';
import { ProductosComponent } from './catalogos/productos/productos.component';



@NgModule({
  declarations: [
    VentasComponent,

    CotizacionComponent,

    NotaPedidoComponent,

    DocumentosVentasComponent,
    
    ProductosComponent,  
    ClientesComponent,
    AgregarClientesCvComponent,
    EditarClientesCvComponent, 
   
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
