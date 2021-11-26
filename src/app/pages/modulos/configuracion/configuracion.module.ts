import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { ConfiguracionRoutingModule } from './configuracion-routing.module';

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


@NgModule({
  declarations: [
    ConfiguracionComponent,

    AreasComponent,
    CargosComponent,
    EmpleadosComponent,

    ModulosComponent,
    PaginasComponent,
    AgrupadoresComponent,
    PlanesComponent,
    CuentasComponent,
    TareasComponent,
    
    CuentasCorreosComponent,
    PlantillaCorreosComponent,
    UsuariosCfComponent,
    BancosCfComponent,
    PerfilesCfComponent,
    TipoMonedaCfComponent,
    CondicionesPagoCfComponent,
    ParametrosCfComponent,
    EmpresasCfComponent,
    AlmacenCfComponent,
    LocalesCfComponent,
    ProyectosCfComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule,
    ComponentsModule

  ]
})
export class ConfiguracionModule { }
