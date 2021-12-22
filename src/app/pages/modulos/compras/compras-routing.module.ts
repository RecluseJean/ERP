import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routesDash : Routes = [
  {
    path: 'compras', component: ComprasComponent,
    children: [

      { path: '', redirectTo: 'documentos/presupuestos', pathMatch: 'full' },    
      { path: 'documentos', redirectTo: 'documentos/presupuestos', pathMatch: 'full' },  
      { path: 'catalogos', redirectTo: 'catalogos/productos', pathMatch: 'full' },  
      { path: 'movimientos', redirectTo: 'movimientos/mercaderia', pathMatch: 'full' },  
      { path: 'gestion-recibos', redirectTo: 'gestion-recibos/impuestos-honorario', pathMatch: 'full' },  
      { path: 'aprobaciones', redirectTo: 'aprobaciones/orden-compra', pathMatch: 'full' },  
      { path: 'configuracion', redirectTo: 'configuracion/usuarios', pathMatch: 'full' },  
 
      { path: 'documentos/presupuestos', component: PresupuestoComponent},
      { path: 'documentos/presupuestos/agregar', component: AgregarPresupuestoComponent},
      { path: 'documentos/presupuestos/editar', component: EditarPresupuestoComponent},
      { path: 'documentos/orden-compra', component: OrdenCompraComponent},
      { path: 'documentos/orden-compra/agregar', component: AgregarOrdenCompraComponent},
      { path: 'documentos/orden-compra/editar', component: EditarOrdenCompraComponent},
      { path: 'documentos/documentos-compra', component: DocumentoCompraComponent},
      { path: 'documentos/documentos-compra/agregar', component: AgregarDocumentoCompraComponent},
      { path: 'documentos/documentos-compra/editar', component: EditarDocumentoCompraComponent},
      { path: 'documentos/notas-credito-debito', component: NotasCreditoDebitoComponent},
      { path: 'documentos/notas-credito-debito/agregar', component: AgregarNotasCdComponent},
      { path: 'documentos/notas-credito-debito/editar', component: EditarNotasCdComponent},

      { path: 'catalogos/productos', component: ProductoComponent},
      { path: 'catalogos/productos/agregar', component: AgregarProductoCatalogoComponent},
      { path: 'catalogos/productos/editar', component: EditarProductoCatalogoComponent},
      { path: 'catalogos/proveedores', component: ProveedoresComponent},
      { path: 'catalogos/proveedores/agregar', component: AgregarProveedoresCatalogosComponent},
      { path: 'catalogos/proveedores/editar', component: EditarProveedoresCatalogosComponent},

      { path: 'movimientos/mercaderia', component: MovimientoMercaderiaComponent},
      { path: 'movimientos/mercaderia/agregar', component: AgregarMovimientoMercaderiaMovimientoComponent},
      { path: 'movimientos/mercaderia/editar', component: EditarMovimientoMercaderiaMovimientoComponent},

      { path: 'gestion-recibos/impuestos-honorario', component: ImpuestosHonorariosComponent},
      { path: 'gestion-recibos/impuestos-honorario/agregar', component: AgregarImpuestohGrComponent},
      { path: 'gestion-recibos/impuestos-honorario/editar', component: EditarImpuestohGrComponent},
      { path: 'gestion-recibos/tipos-honorario', component: TiposHonorariosComponent},
      { path: 'gestion-recibos/honorario', component: HonorariosComponent},
      { path: 'gestion-recibos/honorario/agregar', component: AgregarHonorarioGrComponent},
      { path: 'gestion-recibos/honorario/editar', component: EditarHonorarioGrComponent},
      { path: 'gestion-recibos/recibos', component: RecibosComponent},

      { path: 'aprobaciones/orden-compra', component: OrdenCompraAprobarComponent},
      { path: 'aprobaciones/presupuesto', component: PresupuestoAprobarComponent},  

      { path: 'configuracion/usuarios', component: UsuariosCComponent},  
      { path: 'configuracion/categoria-productos', component: CategoriaProductosCComponent},  
      { path: 'configuracion/motivo-traslado', component: MotivosTrasladoCComponent},  
      { path: 'configuracion/tipo-movimiento-almacen', component: TipoMovAlmacenCComponent},  
      { path: 'configuracion/codigos-aduana', component: CodigosAduanaCComponent},  
      { path: 'configuracion/proyectos', component:ProyectosCComponent },  
      { path: 'configuracion/marcas', component: MarcasCComponent},  
      { path: 'configuracion/responsable', component: ResponsableCComponent},  
      { path: 'configuracion/tipos-concepto', component: TiposConceptoCComponent},  
      { path: 'configuracion/unidades-medida', component: UnidadesMedidasCComponent},  
            
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

export class ComprasRoutingModule { }
