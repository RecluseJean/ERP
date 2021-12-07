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

import { CategoriaProductosAComponent } from './configuracion/categoria-productos-a/categoria-productos-a.component';
import { AlmacenAComponent } from './configuracion/almacen-a/almacen-a.component';
import { TipoMovAlmacenAComponent } from './configuracion/tipo-mov-almacen-a/tipo-mov-almacen-a.component';
import { MarcasAComponent } from './configuracion/marcas-a/marcas-a.component';



@NgModule({
  declarations: [
    AlmacenesComponent,    

    ProductosComponent,
    ClientesComponent,
    ProveedoresComponent,
    
    GuiaEntradaComponent,
    GuiaSalidaComponent,
    MovimientoMercaderiaComponent,
    CategoriaProductosAComponent,
    AlmacenAComponent,
    TipoMovAlmacenAComponent,
    MarcasAComponent,
    
  ],
  imports: [
    CommonModule,
    AlmacenesRoutingModule,
    ComponentsModule,
  ]
})
export class AlmacenesModule { }
