import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContabilidadComponent } from './contabilidad.component';

import { PlanCuentasComponent } from './contable/plan-cuentas/plan-cuentas.component';
import { PlanillaAsientosComponent } from './contable/planilla-asientos/planilla-asientos.component';
import { AsientosComponent } from './contable/asientos/asientos.component';

import { EmpleadosComponent } from './planilla/empleados/empleados.component';

import { ReportesContablesComponent } from './reportes/reportes-contables/reportes-contables.component';

const routesDash : Routes = [
  {
    path: 'contabilidad', component: ContabilidadComponent,
    children: [

      { path: '', redirectTo: 'contable/plan-cuentas', pathMatch: 'full' },    
      { path: 'contable', redirectTo: 'contable/plan-cuentas', pathMatch: 'full' },  
      { path: 'planilla', redirectTo: 'planilla/empleados', pathMatch: 'full' },    
      { path: 'reportes', redirectTo: 'reportes/reportes-contables', pathMatch: 'full' },  
 
      { path: 'contable/plan-cuentas', component: PlanCuentasComponent},       
      { path: 'contable/plantilla-asientos', component: PlanillaAsientosComponent},       
      { path: 'contable/asientos', component: AsientosComponent},       

      { path: 'planilla/empleados', component: EmpleadosComponent},       

      { path: 'reportes/reportes-contables', component: ReportesContablesComponent},       

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

export class ContabilidadRoutingModule { }