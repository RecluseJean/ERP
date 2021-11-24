import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TesoreriaComponent } from './tesoreria.component';

import { HomeComponent } from '../../components/home/home.component';

import { CuentasPagarComponent } from './pagos-cobranza/cuentas-pagar/cuentas-pagar.component';
import { CuentasCobrarComponent } from './pagos-cobranza/cuentas-cobrar/cuentas-cobrar.component';
import { ConstanciasPagosCobrosComponent } from './pagos-cobranza/constancias-pagos-cobros/constancias-pagos-cobros.component';
import { PagosCobrosComponent } from './pagos-cobranza/pagos-cobros/pagos-cobros.component';



const routesDash : Routes = [
  {
    path: 'tesoreria', component: TesoreriaComponent,
    children: [

      { path: '', redirectTo: 'home', pathMatch: 'full' },    
      { path: 'documentos', redirectTo: 'documentos/cotizacion', pathMatch: 'full' },  
      { path: 'catalogos', redirectTo: 'catalogos/clientes', pathMatch: 'full' },  
  

      { path: 'home', component: HomeComponent},
 
      { path: 'pagos-cobranza/cuentas-pagar', component: CuentasPagarComponent},
      { path: 'pagos-cobranza/cuentas-cobrar', component: CuentasCobrarComponent},
      { path: 'pagos-cobranza/constancias', component: ConstanciasPagosCobrosComponent},
      { path: 'pagos-cobranza/pagos-cobros', component: PagosCobrosComponent},
        
            
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
