import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { ComponentsModule } from '../components/components.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { DashboardComponent } from './dashboard.component';

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

import { UsuariosComponent } from './configuracion/usuarios/usuarios.component';
import { CategoriaProductosComponent } from './configuracion/categoria-productos/categoria-productos.component';
import { MotivosTrasladoComponent } from './configuracion/motivos-traslado/motivos-traslado.component';
import { TiposMovimientosAlmacenComponent } from './configuracion/tipos-movimientos-almacen/tipos-movimientos-almacen.component';
import { CodigoAduanaComponent } from './configuracion/codigo-aduana/codigo-aduana.component';
import { ProyectosComponent } from './configuracion/proyectos/proyectos.component';
import { MarcasComponent } from './configuracion/marcas/marcas.component';
import { ResponsableComponent } from './configuracion/responsable/responsable.component';
import { TiposConceptoComponent } from './configuracion/tipos-concepto/tipos-concepto.component';
import { UnidadesMedidaComponent } from './configuracion/unidades-medida/unidades-medida.component';




@NgModule({
  declarations: [
    DashboardComponent,

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
    
    UsuariosComponent,
    CategoriaProductosComponent,
    MotivosTrasladoComponent,
    TiposMovimientosAlmacenComponent,
    CodigoAduanaComponent,
    ProyectosComponent,
    MarcasComponent,
    ResponsableComponent,
    TiposConceptoComponent,
    UnidadesMedidaComponent,  
      
  ],
  imports: [
    CommonModule,
    RouterModule,   
    DashboardRoutingModule,
    ComponentsModule,
    NgxPaginationModule
        
  ]
})
export class DashboardModule { }
