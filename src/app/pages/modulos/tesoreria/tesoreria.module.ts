import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { TesoreriaRoutingModule } from './tesoreria-routing.module';

import { TesoreriaComponent } from './tesoreria.component';

import { CuentasPagarComponent } from './pagos-cobranza/cuentas-pagar/cuentas-pagar.component';
import { CuentasCobrarComponent } from './pagos-cobranza/cuentas-cobrar/cuentas-cobrar.component';
import { ConstanciasPagosCobrosComponent } from './pagos-cobranza/constancias-pagos-cobros/constancias-pagos-cobros.component';
import { PagosCobrosComponent } from './pagos-cobranza/pagos-cobros/pagos-cobros.component';



@NgModule({
  declarations: [
    TesoreriaComponent,
    
    CuentasPagarComponent,
    CuentasCobrarComponent,
    ConstanciasPagosCobrosComponent,
    PagosCobrosComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    TesoreriaRoutingModule
  ]
})
export class TesoreriaModule { }
