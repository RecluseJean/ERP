import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VentasComponent } from './ventas.component';

import { HomeComponent } from '../../components/home/home.component';

import { CotizacionComponent } from './documentos/cotizacion/cotizacion.component';
import { NotaPedidoComponent } from './documentos/nota-pedido/nota-pedido.component';
import { DocumentosVentasComponent } from './documentos/documentos-ventas/documentos-ventas.component';

import { ClientesComponent } from './catalogos/clientes/clientes.component';
import { ProductosComponent } from './catalogos/productos/productos.component';




const routesDash : Routes = [
  {
    path: 'ventas', component: VentasComponent,
    children: [

      { path: '', redirectTo: 'home', pathMatch: 'full' },    
      { path: 'documentos', redirectTo: 'documentos/cotizacion', pathMatch: 'full' },  
      { path: 'catalogos', redirectTo: 'catalogos/clientes', pathMatch: 'full' },  
  

      { path: 'home', component: HomeComponent},
 
      { path: 'documentos/cotizacion', component: CotizacionComponent},
      { path: 'documentos/nota-pedido', component: NotaPedidoComponent},
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
