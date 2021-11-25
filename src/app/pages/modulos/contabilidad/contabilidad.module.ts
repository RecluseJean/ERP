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



@NgModule({
  declarations: [
    ContabilidadComponent,

    PlanCuentasComponent,
    PlanillaAsientosComponent,
    AsientosComponent,

    EmpleadosComponent,

    ReportesContablesComponent
  ],
  imports: [
    CommonModule,
    ContabilidadRoutingModule,
    ComponentsModule

  ]
})
export class ContabilidadModule { }