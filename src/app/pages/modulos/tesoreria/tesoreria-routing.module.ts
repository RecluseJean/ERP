import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TesoreriaComponent } from './tesoreria.component';

import { CuentasPagarComponent } from './pagos-cobranza/cuentas-pagar/cuentas-pagar.component';
import { CuentasCobrarComponent } from './pagos-cobranza/cuentas-cobrar/cuentas-cobrar.component';
import { ConstanciasPagosCobrosComponent } from './pagos-cobranza/constancias-pagos-cobros/constancias-pagos-cobros.component';
import { PagosCobrosComponent } from './pagos-cobranza/pagos-cobros/pagos-cobros.component';

import { PuntoVentaTComponent } from './configuracion/punto-venta-t/punto-venta-t.component';
import { SeriesTComponent } from './configuracion/series-t/series-t.component';
import { BancosEmpresaTComponent } from './configuracion/bancos-empresa-t/bancos-empresa-t.component';
import { CajasTComponent } from './configuracion/cajas-t/cajas-t.component';
import { CentroCostosTComponent } from './configuracion/centro-costos-t/centro-costos-t.component';
import { TipoCambioTComponent } from './configuracion/tipo-cambio-t/tipo-cambio-t.component';
import { PeriodosTComponent } from './configuracion/periodos-t/periodos-t.component';
import { MarcasTarjetasTComponent } from './configuracion/marcas-tarjetas-t/marcas-tarjetas-t.component';
import { ConciliacionTComponent } from './configuracion/conciliacion-t/conciliacion-t.component';

const routesDash : Routes = [
  {
    path: 'tesoreria', component: TesoreriaComponent,
    children: [

      { path: '', redirectTo: 'pagos-cobranza/cuentas-pagar', pathMatch: 'full' },    
      { path: 'pagos-cobranza', redirectTo: 'pagos-cobranza/cuentas-pagar', pathMatch: 'full' },  
      { path: 'configuracion', redirectTo: 'configuracion/punto-venta', pathMatch: 'full' },    

      { path: 'pagos-cobranza/cuentas-pagar', component: CuentasPagarComponent},
      { path: 'pagos-cobranza/cuentas-cobrar', component: CuentasCobrarComponent},
      { path: 'pagos-cobranza/constancias', component: ConstanciasPagosCobrosComponent},
      { path: 'pagos-cobranza/pagos-cobros', component: PagosCobrosComponent},

      { path: 'configuracion/punto-venta', component: PuntoVentaTComponent},
      { path: 'configuracion/series', component: SeriesTComponent},
      { path: 'configuracion/bancos-empresa', component: BancosEmpresaTComponent},
      { path: 'configuracion/cajas', component: CajasTComponent},
      { path: 'configuracion/cemtro-costos', component: CentroCostosTComponent},
      { path: 'configuracion/tipo-cambio', component: TipoCambioTComponent},
      { path: 'configuracion/periodos', component: PeriodosTComponent},
      { path: 'configuracion/marcas-tarjetas', component: MarcasTarjetasTComponent},
      { path: 'configuracion/conciliaciones', component: ConciliacionTComponent}, 
            
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

export class TesoreriaRoutingModule { }
