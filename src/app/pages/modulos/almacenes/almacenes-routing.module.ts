import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlmacenesComponent } from './almacenes.component';

import { ProductosComponent } from './catalogos/productos/productos.component';
import { ClientesComponent } from './catalogos/clientes/clientes.component';
import { ProveedoresComponent } from './catalogos/proveedores/proveedores.component';

import { GuiaEntradaComponent } from './movimientos/guia-entrada/guia-entrada.component';
import { GuiaSalidaComponent } from './movimientos/guia-salida/guia-salida.component';
import { MovimientoMercaderiaComponent } from './movimientos/movimiento-mercaderia/movimiento-mercaderia.component';

import { CategoriaProductosAComponent } from './configuracion/categoria-productos-a/categoria-productos-a.component';
import { AlmacenAComponent } from './configuracion/almacen-a/almacen-a.component';
import { TipoMovAlmacenAComponent } from './configuracion/tipo-mov-almacen-a/tipo-mov-almacen-a.component';
import { MarcasAComponent } from './configuracion/marcas-a/marcas-a.component';

const routesDash : Routes = [
  {
    path: 'almacenes', component: AlmacenesComponent,
    children: [

      { path: '', redirectTo: 'catalogos/productos', pathMatch: 'full' },    
      { path: 'catalogos', redirectTo: 'catalogos/productos', pathMatch: 'full' },    
      { path: 'movimientos', redirectTo: 'movimientos/guias-entrada', pathMatch: 'full' },  
      { path: 'configuracion', redirectTo: 'configuracion/categoria-productos', pathMatch: 'full' },    

      { path: 'catalogos/productos', component: ProductosComponent},
      { path: 'catalogos/clientes', component: ClientesComponent},
      { path: 'catalogos/proveedores', component: ProveedoresComponent},

      { path: 'movimientos/guias-entrada', component: GuiaEntradaComponent},
      { path: 'movimientos/guias-salida', component: GuiaSalidaComponent},
      { path: 'movimientos/mercaderia', component: MovimientoMercaderiaComponent}, 
          
      { path: 'configuracion/categoria-productos', component: CategoriaProductosAComponent},
      { path: 'configuracion/almacen', component: AlmacenAComponent},
      { path: 'configuracion/tipo-movimiento-almacen', component: TipoMovAlmacenAComponent},
      { path: 'configuracion/marcas', component: MarcasAComponent},
            
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

export class AlmacenesRoutingModule { }
