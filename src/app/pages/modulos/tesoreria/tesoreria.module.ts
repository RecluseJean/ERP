import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { TesoreriaRoutingModule } from './tesoreria-routing.module';

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



@NgModule({
  declarations: [
    TesoreriaComponent,
    
    CuentasPagarComponent,
    CuentasCobrarComponent,
    ConstanciasPagosCobrosComponent,
    PagosCobrosComponent,
    
    PuntoVentaTComponent,
    SeriesTComponent,
    BancosEmpresaTComponent,
    CajasTComponent,
    CentroCostosTComponent,
    TipoCambioTComponent,
    PeriodosTComponent,
    MarcasTarjetasTComponent,
    ConciliacionTComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    TesoreriaRoutingModule
  ]
})
export class TesoreriaModule { }
