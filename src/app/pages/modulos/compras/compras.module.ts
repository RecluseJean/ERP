import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { ComprasRoutingModule } from './compras-routing.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

import { UsuariosCComponent } from './configuracion/usuarios-c/usuarios-c.component';
import { CategoriaProductosCComponent } from './configuracion/categoria-productos-c/categoria-productos-c.component';
import { MotivosTrasladoCComponent } from './configuracion/motivos-traslado-c/motivos-traslado-c.component';
import { TipoMovAlmacenCComponent } from './configuracion/tipo-mov-almacen-c/tipo-mov-almacen-c.component';
import { CodigosAduanaCComponent } from './configuracion/codigos-aduana-c/codigos-aduana-c.component';
import { ResponsableCComponent } from './configuracion/responsable-c/responsable-c.component';
import { ProyectosCComponent } from './configuracion/proyectos-c/proyectos-c.component';
import { MarcasCComponent } from './configuracion/marcas-c/marcas-c.component';
import { TiposConceptoCComponent } from './configuracion/tipos-concepto-c/tipos-concepto-c.component';
import { UnidadesMedidasCComponent } from './configuracion/unidades-medidas-c/unidades-medidas-c.component';

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
    UsuariosCComponent,
    CategoriaProductosCComponent,
    MotivosTrasladoCComponent,
    TipoMovAlmacenCComponent,
    CodigosAduanaCComponent,
   
    ResponsableCComponent,
    ProyectosCComponent,
    MarcasCComponent,
    TiposConceptoCComponent,
    UnidadesMedidasCComponent,
  ],

  imports: [
    CommonModule,
    ComponentsModule,
    ComprasRoutingModule,
    ImageCropperModule,
    FormsModule, 
    ReactiveFormsModule

  ]
})
export class ComprasModule { }
