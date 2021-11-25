import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: []
})
export class VentasComponent implements OnInit {
  
  a: any;

  constructor( private token : TokenStorageService) { }

  ngOnInit(): void {
    this.asignarId()
  }

  asignarId(){
    this.a = "Ventas";
    this.token.saveSideBar(this.a)
  }

}
