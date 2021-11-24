import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PuntoVentaComponent } from './punto-venta.component';
import { HomeComponent } from '../../components/home/home.component';

import { VentaDirectaComponent } from './documentos/venta-directa/venta-directa.component';
import { SesionesComponent } from './documentos/sesiones/sesiones.component';

const routesDash : Routes = [
  {
    path: 'puntos-ventas', component: PuntoVentaComponent,
    children: [

      { path: '', redirectTo: 'home', pathMatch: 'full' },    
      { path: 'documentos', redirectTo: 'documentos/cotizacion', pathMatch: 'full' },  
      { path: 'catalogos', redirectTo: 'catalogos/clientes', pathMatch: 'full' },  
  

      { path: 'home', component: HomeComponent},
 
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
