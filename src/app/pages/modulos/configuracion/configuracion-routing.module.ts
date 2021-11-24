import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfiguracionComponent } from './configuracion.component';

import { HomeComponent } from '../../components/home/home.component';

import { AreasComponent } from './planilla/areas/areas.component';
import { CargosComponent } from './planilla/cargos/cargos.component';
import { EmpleadosComponent } from './planilla/empleados/empleados.component';

import { ModulosComponent } from './administrar-erp/modulos/modulos.component';
import { PaginasComponent } from './administrar-erp/paginas/paginas.component';
import { AgrupadoresComponent } from './administrar-erp/agrupadores/agrupadores.component';
import { PlanesComponent } from './administrar-erp/planes/planes.component';
import { CuentasComponent } from './administrar-erp/cuentas/cuentas.component';
import { TareasComponent } from './administrar-erp/tareas/tareas.component';

import { CuentasCorreosComponent } from './correos/cuentas-correos/cuentas-correos.component';
import { PlantillaCorreosComponent } from './correos/plantilla-correos/plantilla-correos.component';

const routesDash : Routes = [
  {
    path: 'configuracion', component: ConfiguracionComponent,
    children: [

      { path: '', redirectTo: 'home', pathMatch: 'full' },    
      { path: 'planilla', redirectTo: 'planilla/areas', pathMatch: 'full' },  
      { path: 'administrar-erp', redirectTo: 'administrar-erp/modulos', pathMatch: 'full' },    
      { path: 'correos', redirectTo: 'correos/cuentas-correos', pathMatch: 'full' },    

      { path: 'home', component: HomeComponent},
 
      { path: 'planilla/areas', component: AreasComponent},       
      { path: 'planilla/cargos', component: CargosComponent},       
      { path: 'planilla/empleados', component: EmpleadosComponent},  
          
      { path: 'administrar-erp/modulos', component: ModulosComponent},  
      { path: 'administrar-erp/paginas', component: PaginasComponent},  
      { path: 'administrar-erp/agrupadores', component: AgrupadoresComponent},  
      { path: 'administrar-erp/planes', component: PlanesComponent},  
      { path: 'administrar-erp/cuentas', component: CuentasComponent},  
      { path: 'administrar-erp/tareas', component: TareasComponent},  

      { path: 'correos/cuentas-correos', component: CuentasCorreosComponent},  
      { path: 'correos/plantillas-correo', component: PlantillaCorreosComponent},  


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

export class ConfiguracionRoutingModule { }