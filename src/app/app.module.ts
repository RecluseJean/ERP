import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { ComponentsModule } from './pages/components/components.module';
//Signin-Signup
import { SignInModule } from './pages/sign-in/sign-in.module';
import { SignUpModule } from './pages/sign-up/sign-up.module';

//Password
import { PasswordModule } from './pages/password/password.module';
//Dashboard
import { HomeModule } from './pages/home/home.module';
import { ComprasModule } from './pages/modulos/compras/compras.module';
import { VentasModule } from './pages/modulos/ventas/ventas.module';
import { TesoreriaModule } from './pages/modulos/tesoreria/tesoreria.module';
import { AlmacenesModule } from './pages/modulos/almacenes/almacenes.module';
import { ContabilidadModule } from './pages/modulos/contabilidad/contabilidad.module';
import { ConfiguracionModule } from './pages/modulos/configuracion/configuracion.module';
import { PuntoVentaModule } from './pages/modulos/punto-venta/punto-venta.module';

@NgModule({
  declarations: [
    AppComponent,
       
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,

    ComponentsModule,

    HomeModule,

    PasswordModule,

    SignInModule,
    SignUpModule,

    ComprasModule,
    VentasModule,
    TesoreriaModule,
    AlmacenesModule,
    ContabilidadModule,
    ConfiguracionModule,
    PuntoVentaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
