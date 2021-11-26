import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfiguracionComponent } from './configuracion.component';

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

import { UsuariosCfComponent } from './configuracion/usuarios-cf/usuarios-cf.component';
import { BancosCfComponent } from './configuracion/bancos-cf/bancos-cf.component';
import { PerfilesCfComponent } from './configuracion/perfiles-cf/perfiles-cf.component';
import { TipoMonedaCfComponent } from './configuracion/tipo-moneda-cf/tipo-moneda-cf.component';
import { CondicionesPagoCfComponent } from './configuracion/condiciones-pago-cf/condiciones-pago-cf.component';
import { ParametrosCfComponent } from './configuracion/parametros-cf/parametros-cf.component';
import { EmpresasCfComponent } from './configuracion/empresas-cf/empresas-cf.component';
import { AlmacenCfComponent } from './configuracion/almacen-cf/almacen-cf.component';
import { LocalesCfComponent } from './configuracion/locales-cf/locales-cf.component';
import { ProyectosCfComponent } from './configuracion/proyectos-cf/proyectos-cf.component';

const routesDash : Routes = [
  {
    path: 'configuracion', component: ConfiguracionComponent,
    children: [

      { path: '', redirectTo: 'planilla/areas', pathMatch: 'full' },    
      { path: 'planilla', redirectTo: 'planilla/areas', pathMatch: 'full' },  
      { path: 'administrar-erp', redirectTo: 'administrar-erp/modulos', pathMatch: 'full' },    
      { path: 'correos', redirectTo: 'correos/cuentas-correos', pathMatch: 'full' },    
      { path: 'configuracion', redirectTo: 'configuracion/usuarios', pathMatch: 'full' },    
 
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

      { path: 'configuracion/usuarios', component: UsuariosCfComponent},       
      { path: 'configuracion/bancos', component: BancosCfComponent},       
      { path: 'configuracion/perfiles', component: PerfilesCfComponent},       
      { path: 'configuracion/tipo-moneda', component: TipoMonedaCfComponent},       
      { path: 'configuracion/condiciones-pago', component: CondicionesPagoCfComponent},       
      { path: 'configuracion/parametros', component: ParametrosCfComponent},       
      { path: 'configuracion/empresas', component: EmpresasCfComponent},       
      { path: 'configuracion/almacen', component: AlmacenCfComponent},       
      { path: 'configuracion/locales', component: LocalesCfComponent},       
      { path: 'configuracion/proyecto', component: ProyectosCfComponent},       


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