import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routesDash : Routes = [
  {
    path: 'contabilidad', component: ContabilidadComponent,
    children: [

      { path: '', redirectTo: 'contable/plan-cuentas', pathMatch: 'full' },    
      { path: 'contable', redirectTo: 'contable/plan-cuentas', pathMatch: 'full' },  
      { path: 'planilla', redirectTo: 'planilla/empleados', pathMatch: 'full' },    
      { path: 'reportes', redirectTo: 'reportes/reportes-contables', pathMatch: 'full' },  
      { path: 'configuracion', redirectTo: 'configuracion/nivel-cuenta', pathMatch: 'full' },    

      { path: 'contable/plan-cuentas', component: PlanCuentasComponent},       
      { path: 'contable/plantilla-asientos', component: PlanillaAsientosComponent},       
      { path: 'contable/asientos', component: AsientosComponent},       

      { path: 'planilla/empleados', component: EmpleadosComponent},       

      { path: 'reportes/reportes-contables', component: ReportesContablesComponent},   
      
      { path: 'configuracion/nivel-cuenta', component: NivelCuentaCnComponent},       
      { path: 'configuracion/rubro-contable', component: RubroContableCnComponent},       
      { path: 'configuracion/tipo-cuenta-bancaria', component: TipoCuentaBancariaCnComponent},       
      { path: 'configuracion/tipo-opracion', component: TipoOperacionCnComponent},       
      { path: 'configuracion/tipo-analisis', component: TipoAnalisisCnComponent},       
      { path: 'configuracion/tipo-cuentas', component: TipoCuentasCnComponent},       
      { path: 'configuracion/pais-cuenta-equivalente', component: PaisCuentaEquivalenteCnComponent},       

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