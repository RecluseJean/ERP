import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routesDash : Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [

    //{ path: '', redirectTo: 'documentos/venta-directa', pathMatch: 'full' },    
    //  { path: 'documentos', redirectTo: 'documentos/venta-directa', pathMatch: 'full' },   
    //   { path: '', component: VentaDirectaComponent},
            
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

export class DashboardRoutingModule { }
