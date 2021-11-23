import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


const routesDash : Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [

      { path: '', redirectTo: 'documentos/presupuestos', pathMatch: 'full' },  

      { path: 'documentos', redirectTo: 'documentos/presupuestos', pathMatch: 'full' },  
      { path: 'catalogos', redirectTo: 'catalogos/productos', pathMatch: 'full' },  
      { path: 'movimientos', redirectTo: 'movimientos/mercaderia', pathMatch: 'full' },  
      { path: 'gestion-recibos', redirectTo: 'gestion-recibos/impuestos-honorario', pathMatch: 'full' },  
      { path: 'aprobaciones', redirectTo: 'aprobaciones/orden-compra', pathMatch: 'full' },  
      { path: 'configuracion', redirectTo: 'catalogos/productos', pathMatch: 'full' },  

 
      { path: 'documentos/presupuestos', component: PresupuestoComponent},
      { path: 'documentos/orden-compra', component: OrdenCompraComponent},
      { path: 'documentos/documentos-compra', component: DocumentoCompraComponent},
      { path: 'documentos/notas-credito-debito', component: NotasCreditoDebitoComponent},

      { path: 'catalogos/productos', component: ProductoComponent},
      { path: 'catalogos/proveedores', component: ProveedoresComponent},

      { path: 'movimientos/mercaderia', component: MovimientoMercaderiaComponent},

      { path: 'gestion-recibos/impuestos-honorario', component: ImpuestosHonorariosComponent},
      { path: 'gestion-recibos/tipos-honorario', component: TiposHonorariosComponent},
      { path: 'gestion-recibos/recibos', component: HonorariosComponent},
      { path: 'gestion-recibos/honorario', component: RecibosComponent},

      { path: 'aprobaciones/orden-compra', component: OrdenCompraAprobarComponent},
      { path: 'aprobaciones/presupuesto', component: PresupuestoAprobarComponent},

      { path: 'configuracion/usuarios', component: UsuariosComponent},
      { path: 'configuracion/categoria-productos', component: CategoriaProductosComponent},
      { path: 'configuracion/motivo-traslado', component: MotivosTrasladoComponent},
      { path: 'configuracion/tipo-movimiento-almacen', component: TiposMovimientosAlmacenComponent},
      { path: 'configuracion/codigos-aduana', component: CodigoAduanaComponent},
      { path: 'configuracion/proyecto', component: ProyectosComponent},
      { path: 'configuracion/marcas', component: MarcasComponent},
      { path: 'configuracion/responsable', component: ResponsableComponent},
      { path: 'configuracion/tipos-concepto', component: TiposConceptoComponent},
      { path: 'configuracion/unidades-medida', component: UnidadesMedidaComponent},
            
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

export class DashboardRoutingModule { }
