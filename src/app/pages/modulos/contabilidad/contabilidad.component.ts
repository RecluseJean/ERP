import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: []
})
export class ContabilidadComponent implements OnInit {

  a: any;

  constructor( private token : TokenStorageService) { }

  ngOnInit(): void {
    this.asignarId()
  }

  asignarId(){
    this.a = "Contabilidad";
    this.token.saveSideBar(this.a)
  }

}
