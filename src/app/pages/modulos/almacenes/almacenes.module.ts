import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { AlmacenesRoutingModule } from './almacenes-routing.module';

import { AlmacenesComponent } from './almacenes.component';

import { ProductosComponent } from './catalogos/productos/productos.component';
import { ClientesComponent } from './catalogos/clientes/clientes.component';
import { ProveedoresComponent } from './catalogos/proveedores/proveedores.component';

import { GuiaEntradaComponent } from './movimientos/guia-entrada/guia-entrada.component';
import { GuiaSalidaComponent } from './movimientos/guia-salida/guia-salida.component';
import { MovimientoMercaderiaComponent } from './movimientos/movimiento-mercaderia/movimiento-mercaderia.component';



@NgModule({
  declarations: [
    AlmacenesComponent,    

    ProductosComponent,
    ClientesComponent,
    ProveedoresComponent,
    
    GuiaEntradaComponent,
    GuiaSalidaComponent,
    MovimientoMercaderiaComponent,
    
  ],
  imports: [
    CommonModule,
    AlmacenesRoutingModule,
    ComponentsModule
  ]
})
export class AlmacenesModule { }
