import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ListadoBusquedaComponent } from './listado-busqueda/listado-busqueda.component';

import { CUsuariosComponent } from './configuracion/c-usuarios/c-usuarios.component';
import { CCategoriaProductosComponent } from './configuracion/c-categoria-productos/c-categoria-productos.component';
import { CMotivosTrasladoComponent } from './configuracion/c-motivos-traslado/c-motivos-traslado.component';
import { CTipoMovAlmacenComponent } from './configuracion/c-tipo-mov-almacen/c-tipo-mov-almacen.component';
import { CCodigosAduanaComponent } from './configuracion/c-codigos-aduana/c-codigos-aduana.component';
import { CProyectosComponent } from './configuracion/c-proyectos/c-proyectos.component';
import { CMarcasComponent } from './configuracion/c-marcas/c-marcas.component';
import { CResponsableComponent } from './configuracion/c-responsable/c-responsable.component';
import { CTipoConceptosComponent } from './configuracion/c-tipo-conceptos/c-tipo-conceptos.component';
import { CUnidadesMedidasComponent } from './configuracion/c-unidades-medidas/c-unidades-medidas.component';
import { CPuntoVentaComponent } from './configuracion/c-punto-venta/c-punto-venta.component';
import { CSeriesComponent } from './configuracion/c-series/c-series.component';
import { CBancosEmpresaComponent } from './configuracion/c-bancos-empresa/c-bancos-empresa.component';
import { CCajasComponent } from './configuracion/c-cajas/c-cajas.component';
import { CCentroCostosComponent } from './configuracion/c-centro-costos/c-centro-costos.component';
import { CTipoCambioComponent } from './configuracion/c-tipo-cambio/c-tipo-cambio.component';
import { CPeriodosComponent } from './configuracion/c-periodos/c-periodos.component';
import { CMarcasTarjetasComponent } from './configuracion/c-marcas-tarjetas/c-marcas-tarjetas.component';
import { CConciliacionComponent } from './configuracion/c-conciliacion/c-conciliacion.component';
import { CAlmacenComponent } from './configuracion/c-almacen/c-almacen.component';
import { CNivelCuentaComponent } from './configuracion/c-nivel-cuenta/c-nivel-cuenta.component';
import { CRubroContableComponent } from './configuracion/c-rubro-contable/c-rubro-contable.component';
import { CTipoCuentaBancariaComponent } from './configuracion/c-tipo-cuenta-bancaria/c-tipo-cuenta-bancaria.component';
import { CTipoOperacionComponent } from './configuracion/c-tipo-operacion/c-tipo-operacion.component';
import { CTipoAnalisisComponent } from './configuracion/c-tipo-analisis/c-tipo-analisis.component';
import { CTipoCuentasComponent } from './configuracion/c-tipo-cuentas/c-tipo-cuentas.component';
import { CPaisCuentaEquivalenteComponent } from './configuracion/c-pais-cuenta-equivalente/c-pais-cuenta-equivalente.component';
import { CBancosComponent } from './configuracion/c-bancos/c-bancos.component';
import { CPerfilesComponent } from './configuracion/c-perfiles/c-perfiles.component';
import { CTipoMonedaComponent } from './configuracion/c-tipo-moneda/c-tipo-moneda.component';
import { CCondicionesPagoComponent } from './configuracion/c-condiciones-pago/c-condiciones-pago.component';
import { CParametrosComponent } from './configuracion/c-parametros/c-parametros.component';
import { CEmpresasComponent } from './configuracion/c-empresas/c-empresas.component';
import { CLocalesComponent } from './configuracion/c-locales/c-locales.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    ListadoBusquedaComponent,

    CUsuariosComponent,
    CCategoriaProductosComponent,
    CMotivosTrasladoComponent,
    CTipoMovAlmacenComponent,
    CCodigosAduanaComponent,
    CProyectosComponent,
    CMarcasComponent,
    CResponsableComponent,
    CTipoConceptosComponent,
    CUnidadesMedidasComponent,
    CPuntoVentaComponent,
    CSeriesComponent,
    CBancosEmpresaComponent,
    CCajasComponent,
    CCentroCostosComponent,
    CTipoCambioComponent,
    CPeriodosComponent,
    CMarcasTarjetasComponent,
    CConciliacionComponent,
    CAlmacenComponent,
    CNivelCuentaComponent,
    CRubroContableComponent,
    CTipoCuentaBancariaComponent,
    CTipoOperacionComponent,
    CTipoAnalisisComponent,
    CTipoCuentasComponent,
    CPaisCuentaEquivalenteComponent,
    CBancosComponent,
    CPerfilesComponent,
    CTipoMonedaComponent,
    CCondicionesPagoComponent,
    CParametrosComponent,
    CEmpresasComponent,
    CLocalesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    ListadoBusquedaComponent,
    
    CUsuariosComponent,
    CCategoriaProductosComponent,
    CMotivosTrasladoComponent,
    CTipoMovAlmacenComponent,
    CCodigosAduanaComponent,
    CProyectosComponent,
    CMarcasComponent,
    CResponsableComponent,
    CTipoConceptosComponent,
    CUnidadesMedidasComponent,
    CPuntoVentaComponent,
    CSeriesComponent,
    CBancosEmpresaComponent,
    CCajasComponent,
    CCentroCostosComponent,
    CTipoCambioComponent,
    CPeriodosComponent,
    CMarcasTarjetasComponent,
    CConciliacionComponent,
    CAlmacenComponent,
    CNivelCuentaComponent,
    CRubroContableComponent,
    CTipoCuentaBancariaComponent,
    CTipoOperacionComponent,
    CTipoAnalisisComponent,
    CTipoCuentasComponent,
    CPaisCuentaEquivalenteComponent,
    CBancosComponent,
    CPerfilesComponent,
    CTipoMonedaComponent,
    CCondicionesPagoComponent,
    CParametrosComponent,
    CEmpresasComponent,
    CLocalesComponent,
    
  ]
})
export class ComponentsModule { }
