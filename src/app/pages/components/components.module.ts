import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ListadoBusquedaComponent } from './listado-busqueda/listado-busqueda.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    ListadoBusquedaComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    ListadoBusquedaComponent
  ]
})
export class ComponentsModule { }
