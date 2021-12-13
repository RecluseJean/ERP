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
import { AgregarDocumentoDvComponent } from './documentos/documentos-ventas/agregar-documento-dv/agregar-documento-dv.component';
import { EditarDocumentoDvComponent } from './documentos/documentos-ventas/editar-documento-dv/editar-documento-dv.component';
import { ClientesComponent } from './catalogos/clientes/clientes.component';
import { AgregarClientesCvComponent } from './catalogos/clientes/agregar-clientes-cv/agregar-clientes-cv.component';
import { EditarClientesCvComponent } from './catalogos/clientes/editar-clientes-cv/editar-clientes-cv.component';
import { ProductosComponent } from './catalogos/productos/productos.component';
import { AgregarProductosCvComponent } from './catalogos/productos/agregar-productos-cv/agregar-productos-cv.component';
import { EditarProductosCvComponent } from './catalogos/productos/editar-productos-cv/editar-productos-cv.component';



@NgModule({
  declarations: [
    VentasComponent,

    CotizacionComponent,
    AgregarCotizacionVComponent,
    EditarCotizacionVComponent,

    NotaPedidoComponent,
    NotaPedidoAgregarVComponent,
    NotaPedidoEditarVComponent,

    DocumentosVentasComponent,
    AgregarDocumentoDvComponent,
    EditarDocumentoDvComponent,
    
    ProductosComponent,  
    AgregarProductosCvComponent, 
    EditarProductosCvComponent,
    
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
