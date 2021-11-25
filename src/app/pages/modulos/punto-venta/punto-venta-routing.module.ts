import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PuntoVentaComponent } from './punto-venta.component';

import { VentaDirectaComponent } from './documentos/venta-directa/venta-directa.component';
import { SesionesComponent } from './documentos/sesiones/sesiones.component';

const routesDash : Routes = [
  {
    path: 'punto-venta', component: PuntoVentaComponent,
    children: [

      { path: '', redirectTo: 'documentos/venta-directa', pathMatch: 'full' },    
      { path: 'documentos', redirectTo: 'documentos/venta-directa', pathMatch: 'full' },  
 
      { path: 'documentos/venta-directa', component: VentaDirectaComponent},
      { path: 'documentos/sesiones', component: SesionesComponent},

            
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

export class PuntaVentaRoutingModule { }
