import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { ContabilidadRoutingModule } from './contabilidad-routing.module';

import { ContabilidadComponent } from './contabilidad.component';

import { PlanCuentasComponent } from './contable/plan-cuentas/plan-cuentas.component';
import { PlanillaAsientosComponent } from './contable/planilla-asientos/planilla-asientos.component';
import { AsientosComponent } from './contable/asientos/asientos.component';

import { EmpleadosComponent } from './planilla/empleados/empleados.component';

import { ReportesContablesComponent } from './reportes/reportes-contables/reportes-contables.component';

import { NivelCuentaCnComponent } from './configuracion/nivel-cuenta-cn/nivel-cuenta-cn.component';
import { RubroContableCnComponent } from './configuracion/rubro-contable-cn/rubro-contable-cn.component';
import { TipoCuentaBancariaCnComponent } from './configuracion/tipo-cuenta-bancaria-cn/tipo-cuenta-bancaria-cn.component';
import { TipoOperacionCnComponent } from './configuracion/tipo-operacion-cn/tipo-operacion-cn.component';
import { TipoAnalisisCnComponent } from './configuracion/tipo-analisis-cn/tipo-analisis-cn.component';
import { TipoCuentasCnComponent } from './configuracion/tipo-cuentas-cn/tipo-cuentas-cn.component';
import { PaisCuentaEquivalenteCnComponent } from './configuracion/pais-cuenta-equivalente-cn/pais-cuenta-equivalente-cn.component';



@NgModule({
  declarations: [
    ContabilidadComponent,

    PlanCuentasComponent,
    PlanillaAsientosComponent,
    AsientosComponent,

    EmpleadosComponent,

    ReportesContablesComponent,
    
     NivelCuentaCnComponent,
     RubroContableCnComponent,
     TipoCuentaBancariaCnComponent,
     TipoOperacionCnComponent,
     TipoAnalisisCnComponent,
     TipoCuentasCnComponent,
     PaisCuentaEquivalenteCnComponent
  ],
  imports: [
    CommonModule,
    ContabilidadRoutingModule,
    ComponentsModule

  ]
})
export class ContabilidadModule { }
