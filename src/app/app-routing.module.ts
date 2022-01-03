import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/modulos/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/password/forgot-password/forgot-password.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [  

  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },   
  { path: 'password', component: ForgotPasswordComponent },   
  { path: 'home', component: HomeComponent },   
  { path: 'dashboard', component: DashboardComponent },   

  { path: '', redirectTo: 'signin', pathMatch: 'full' },  

  {
    path: '',
    loadChildren: () => import ('./pages/modulos/profile/profile.module').then(module =>module.ProfileModule)
  },

  {
    path: '',
    loadChildren: () => import ('./pages/modulos/compras/compras.module').then(module =>module.ComprasModule)
  },

  {
    path: '',
    loadChildren: () => import ('./pages/modulos/ventas/ventas.module').then(module =>module.VentasModule)
  },

  {
    path: '',
    loadChildren: () => import ('./pages/modulos/tesoreria/tesoreria.module').then(module =>module.TesoreriaModule)
  },

  {
    path: '',
    loadChildren: () => import ('./pages/modulos/almacenes/almacenes.module').then(module =>module.AlmacenesModule)
  },

  {
    path: '',
    loadChildren: () => import ('./pages/modulos/contabilidad/contabilidad.module').then(module =>module.ContabilidadModule)
  },

  {
    path: '',
    loadChildren: () => import ('./pages/modulos/configuracion/configuracion.module').then(module =>module.ConfiguracionModule)
  },

  {
    path: '',
    loadChildren: () => import ('./pages/modulos/punto-venta/punto-venta.module').then(module =>module.PuntoVentaModule)
  }

]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

