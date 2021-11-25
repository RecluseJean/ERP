import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlmacenesComponent } from './almacenes.component';

import { ProductosComponent } from './catalogos/productos/productos.component';
import { ClientesComponent } from './catalogos/clientes/clientes.component';
import { ProveedoresComponent } from './catalogos/proveedores/proveedores.component';

import { GuiaEntradaComponent } from './movimientos/guia-entrada/guia-entrada.component';
import { GuiaSalidaComponent } from './movimientos/guia-salida/guia-salida.component';
import { MovimientoMercaderiaComponent } from './movimientos/movimiento-mercaderia/movimiento-mercaderia.component';





const routesDash : Routes = [
  {
    path: 'almacenes', component: AlmacenesComponent,
    children: [

      { path: '', redirectTo: 'catalogos/productos', pathMatch: 'full' },    
      { path: 'catalogos', redirectTo: 'catalogos/productos', pathMatch: 'full' },    
      { path: 'movimientos', redirectTo: 'movimientos/guias-entrada', pathMatch: 'full' },  

      { path: 'catalogos/productos', component: ProductosComponent},
      { path: 'catalogos/clientes', component: ClientesComponent},
      { path: 'catalogos/proveedores', component: ProveedoresComponent},

      { path: 'movimientos/guias-entrada', component: GuiaEntradaComponent},
      { path: 'movimientos/guias-salida', component: GuiaSalidaComponent},
      { path: 'movimientos/mercaderia', component: MovimientoMercaderiaComponent}, 
          
            
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
