import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: []
})
export class SideBarComponent implements OnInit {
  id: any;

  isViewCompras = false;
  isViewVentas = false;
  isViewTesoreria = false;
  isViewAlmacen = false;
  isViewContabilidad = false;
  isViewPuntoVenta = false;
  
  constructor( private token : TokenStorageService ) { }

  ngOnInit(): void {
    this.mostrarId();
  }
  
  mostrarId(){
    if(this.token.getSideBar()){
      this.id = this.token.getSideBar();

      this.isViewCompras = false;
      this.isViewVentas = false;
      this.isViewTesoreria = false;
      this.isViewAlmacen = false;
      this.isViewContabilidad = false;
      this.isViewPuntoVenta = false;

      switch (this.id) {
        case "Compras":   
          this.isViewCompras = true;
          break;

        case "Ventas":   
          this.isViewVentas = true;
          break;

        case "Tesoreria":   
          this.isViewTesoreria = true;
          break;

        case "Almacenes":   
          this.isViewAlmacen = true;
          break;

        case "Contabilidad":   
          this.isViewContabilidad = true;
          break;  

        case "PuntoVenta":   
          this.isViewPuntoVenta = true;
          break;
      
        default:
          this.isViewCompras = false;
          this.isViewVentas = false;
          this.isViewTesoreria = false;
          this.isViewAlmacen = false;
          this.isViewContabilidad = false;
          this.isViewPuntoVenta = false;
          break;
      }

    }else{
      this.id = 1;
    }
    
  }   
  


}