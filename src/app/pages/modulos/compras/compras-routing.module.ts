import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
      { path: 'documentos/orden-compra', component: OrdenCompraComponent},
      { path: 'documentos/documentos-compra', component: DocumentoCompraComponent},
      { path: 'documentos/notas-credito-debito', component: NotasCreditoDebitoComponent},

      { path: 'catalogos/productos', component: ProductoComponent},
      { path: 'catalogos/proveedores', component: ProveedoresComponent},

      { path: 'movimientos/mercaderia', component: MovimientoMercaderiaComponent},

      { path: 'gestion-recibos/impuestos-honorario', component: ImpuestosHonorariosComponent},
      { path: 'gestion-recibos/tipos-honorario', component: TiposHonorariosComponent},
      { path: 'gestion-recibos/honorario', component: HonorariosComponent},
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
