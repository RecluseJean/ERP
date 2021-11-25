import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-tesoreria',
  templateUrl: './tesoreria.component.html',
  styleUrls: []
})
export class TesoreriaComponent implements OnInit {
  
  a: any;

  constructor( private token : TokenStorageService) { }

  ngOnInit(): void {
    this.asignarId()
  }

  asignarId(){
    this.a = "Tesoreria";
    this.token.saveSideBar(this.a)
  }
}
