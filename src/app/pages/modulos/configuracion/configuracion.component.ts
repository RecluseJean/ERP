import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: []
})
export class ConfiguracionComponent implements OnInit {

  a: any;

  constructor( private token : TokenStorageService ) { }

  ngOnInit(): void {
    this.asignarId()
  }

  asignarId(){
    this.a = "Configuracion";
    this.token.saveSideBar(this.a)
  }


}
