import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: []
})
export class AlmacenesComponent implements OnInit {

  a: any;

  constructor( private token : TokenStorageService) { }

  ngOnInit(): void {
    this.asignarId()
  }

  asignarId(){
    this.a = "Almacenes";
    this.token.saveSideBar(this.a)
  }

}
