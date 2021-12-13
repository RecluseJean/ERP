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

import { ClientesComponent } from './catalogos/clientes/clientes.component';
import { ProductosComponent } from './catalogos/productos/productos.component';




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

      { path: 'catalogos/clientes', component: ClientesComponent},
      { path: 'catalogos/productos', component: ProductosComponent},       
            
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
