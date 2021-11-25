import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: []
})
export class ComprasComponent implements OnInit {

  a: any;

  constructor( private token : TokenStorageService,
               private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.asignarId()
  }

  asignarId(){
    this.a = "Compras";
    this.token.saveSideBar(this.a)
  }

}
