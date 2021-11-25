import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-punto-venta',
  templateUrl: './punto-venta.component.html',
  styleUrls: []
})
export class PuntoVentaComponent implements OnInit {
  a: any;

  constructor( private token : TokenStorageService) { }

  ngOnInit(): void {
    this.asignarId()
  }

  asignarId(){
    this.a = "PuntoVenta";
    this.token.saveSideBar(this.a)
  }

}
