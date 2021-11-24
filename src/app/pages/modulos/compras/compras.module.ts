import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { ComprasRoutingModule } from './compras-routing.module';

import { ComprasComponent } from './compras.component';

import { PresupuestoComponent } from './documentos/presupuesto/presupuesto.component';
import { OrdenCompraComponent } from './documentos/orden-compra/orden-compra.component';
import { DocumentoCompraComponent } from './documentos/documento-compra/documento-compra.component';
import { NotasCreditoDebitoComponent } from './documentos/notas-credito-debito/notas-credito-debito.component';

import { ProductoComponent } from './catalogos/producto/producto.component';
import { ProveedoresComponent } from './catalogos/proveedores/proveedores.component';

import { MovimientoMercaderiaComponent } from './movimientos/movimiento-mercaderia/movimiento-mercaderia.component';

import { ImpuestosHonorariosComponent } from './gestion-recibos/impuestos-honorarios/impuestos-honorarios.component';
import { TiposHonorariosComponent } from './gestion-recibos/tipos-honorarios/tipos-honorarios.component';
import { HonorariosComponent } from './gestion-recibos/honorarios/honorarios.component';
import { RecibosComponent } from './gestion-recibos/recibos/recibos.component';

import { OrdenCompraAprobarComponent } from './aprobaciones/orden-compra-aprobar/orden-compra-aprobar.component';
import { PresupuestoAprobarComponent } from './aprobaciones/presupuesto-aprobar/presupuesto-aprobar.component';


@NgModule({
  declarations: [
    ComprasComponent,

    PresupuestoComponent,
    OrdenCompraComponent,
    DocumentoCompraComponent,
    NotasCreditoDebitoComponent,

    ProductoComponent,
    ProveedoresComponent,

    MovimientoMercaderiaComponent,

    ImpuestosHonorariosComponent,
    TiposHonorariosComponent,
    HonorariosComponent,
    RecibosComponent,

    OrdenCompraAprobarComponent,
    PresupuestoAprobarComponent,

  ],

  imports: [
    CommonModule,
    ComponentsModule,
    ComprasRoutingModule

  ]
})
export class ComprasModule { }
