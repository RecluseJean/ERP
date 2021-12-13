import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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




const routesDash : Routes = [
  {
    path: 'ventas', component: VentasComponent,
    children: [

      { path: '', redirectTo: 'documentos/cotizacion', pathMatch: 'full' },    
      { path: 'documentos', redirectTo: 'documentos/cotizacion', pathMatch: 'full' },  
      { path: 'catalogos', redirectTo: 'catalogos/clientes', pathMatch: 'full' },  
 
      { path: 'documentos/cotizacion', component: CotizacionComponent},
      { path: 'documentos/cotizacion/agregar', component: AgregarCotizacionVComponent},
      { path: 'documentos/cotizacion/editar', component: EditarCotizacionVComponent},
      { path: 'documentos/nota-pedido', component: NotaPedidoComponent},
      { path: 'documentos/nota-pedido/agregar', component: NotaPedidoAgregarVComponent},
      { path: 'documentos/nota-pedido/editar', component: NotaPedidoEditarVComponent},
      { path: 'documentos/documento-venta', component: DocumentosVentasComponent},
      { path: 'documentos/documento-venta/agregar', component: AgregarDocumentoDvComponent},
      { path: 'documentos/documento-venta/editar', component: EditarDocumentoDvComponent},

      { path: 'catalogos/clientes', component: ClientesComponent},
      { path: 'catalogos/clientes/agregar', component: AgregarClientesCvComponent},
      { path: 'catalogos/clientes/editar', component: EditarClientesCvComponent},
      { path: 'catalogos/productos', component: ProductosComponent},       
      { path: 'catalogos/productos/agregar', component: AgregarProductosCvComponent},       
      { path: 'catalogos/productos/editar', component: EditarProductosCvComponent},       
            
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesDash)
  ],
  exports: [RouterModule]
})

export class VentasRoutingModule { }
