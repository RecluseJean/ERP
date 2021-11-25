import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComprasComponent } from './compras.component';

import { HomeComponent } from '../../components/home/home.component';

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


const routesDash : Routes = [
  {
    path: 'compras', component: ComprasComponent,
    children: [

      { path: '', redirectTo: 'home', pathMatch: 'full' },    
      { path: 'documentos', redirectTo: 'documentos/presupuestos', pathMatch: 'full' },  
      { path: 'catalogos', redirectTo: 'catalogos/productos', pathMatch: 'full' },  
      { path: 'movimientos', redirectTo: 'movimientos/mercaderia', pathMatch: 'full' },  
      { path: 'gestion-recibos', redirectTo: 'gestion-recibos/impuestos-honorario', pathMatch: 'full' },  
      { path: 'aprobaciones', redirectTo: 'aprobaciones/orden-compra', pathMatch: 'full' },  
      { path: 'configuracion', redirectTo: 'catalogos/productos', pathMatch: 'full' },  

      { path: 'home', component: HomeComponent},
 
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