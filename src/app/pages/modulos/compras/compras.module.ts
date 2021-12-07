import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { ComprasRoutingModule } from './compras-routing.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComprasComponent } from './compras.component';

import { PresupuestoComponent } from './documentos/presupuesto/presupuesto.component';
import { AgregarPresupuestoComponent } from './documentos/presupuesto/agregar-presupuesto/agregar-presupuesto.component';
import { EditarPresupuestoComponent } from './documentos/presupuesto/editar-presupuesto/editar-presupuesto.component';
import { OrdenCompraComponent } from './documentos/orden-compra/orden-compra.component';
import { AgregarOrdenCompraComponent } from './documentos/orden-compra/agregar-orden-compra/agregar-orden-compra.component';
import { EditarOrdenCompraComponent } from './documentos/orden-compra/editar-orden-compra/editar-orden-compra.component';
import { DocumentoCompraComponent } from './documentos/documento-compra/documento-compra.component';
import { AgregarDocumentoCompraComponent } from './documentos/documento-compra/agregar-documento-compra/agregar-documento-compra.component';
import { EditarDocumentoCompraComponent } from './documentos/documento-compra/editar-documento-compra/editar-documento-compra.component';
import { NotasCreditoDebitoComponent } from './documentos/notas-credito-debito/notas-credito-debito.component';
import { AgregarNotasCdComponent } from './documentos/notas-credito-debito/agregar-notas-cd/agregar-notas-cd.component';
import { EditarNotasCdComponent } from './documentos/notas-credito-debito/editar-notas-cd/editar-notas-cd.component';

import { ProductoComponent } from './catalogos/producto/producto.component';
import { AgregarProductoCatalogoComponent } from './catalogos/producto/agregar-producto-catalogo/agregar-producto-catalogo.component';
import { EditarProductoCatalogoComponent } from './catalogos/producto/editar-producto-catalogo/editar-producto-catalogo.component';
import { ProveedoresComponent } from './catalogos/proveedores/proveedores.component';
import { AgregarProveedoresCatalogosComponent } from './catalogos/proveedores/agregar-proveedores-catalogos/agregar-proveedores-catalogos.component';
import { EditarProveedoresCatalogosComponent } from './catalogos/proveedores/editar-proveedores-catalogos/editar-proveedores-catalogos.component';

import { MovimientoMercaderiaComponent } from './movimientos/movimiento-mercaderia/movimiento-mercaderia.component';
import { AgregarMovimientoMercaderiaMovimientoComponent } from './movimientos/movimiento-mercaderia/agregar-movimiento-mercaderia-movimiento/agregar-movimiento-mercaderia-movimiento.component';
import { EditarMovimientoMercaderiaMovimientoComponent } from './movimientos/movimiento-mercaderia/editar-movimiento-mercaderia-movimiento/editar-movimiento-mercaderia-movimiento.component';


import { ImpuestosHonorariosComponent } from './gestion-recibos/impuestos-honorarios/impuestos-honorarios.component';
import { AgregarImpuestohGrComponent } from './gestion-recibos/impuestos-honorarios/agregar-impuestoh-gr/agregar-impuestoh-gr.component';
import { EditarImpuestohGrComponent } from './gestion-recibos/impuestos-honorarios/editar-impuestoh-gr/editar-impuestoh-gr.component';
import { TiposHonorariosComponent } from './gestion-recibos/tipos-honorarios/tipos-honorarios.component';
import { HonorariosComponent } from './gestion-recibos/honorarios/honorarios.component';
import { AgregarHonorarioGrComponent } from './gestion-recibos/honorarios/agregar-honorario-gr/agregar-honorario-gr.component';
import { EditarHonorarioGrComponent } from './gestion-recibos/honorarios/editar-honorario-gr/editar-honorario-gr.component';
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
    AgregarPresupuestoComponent,
    EditarPresupuestoComponent,
    OrdenCompraComponent,
    AgregarOrdenCompraComponent,
    EditarOrdenCompraComponent,
    DocumentoCompraComponent,    
    AgregarDocumentoCompraComponent,
    EditarDocumentoCompraComponent,  
    NotasCreditoDebitoComponent,
    AgregarNotasCdComponent,
    EditarNotasCdComponent,      

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
    AgregarProductoCatalogoComponent,
    EditarProductoCatalogoComponent,
    AgregarProveedoresCatalogosComponent,
    EditarProveedoresCatalogosComponent,
    AgregarMovimientoMercaderiaMovimientoComponent,
    EditarMovimientoMercaderiaMovimientoComponent,
    AgregarImpuestohGrComponent,
    EditarImpuestohGrComponent,
    AgregarHonorarioGrComponent,
    EditarHonorarioGrComponent,
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
