import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-empresas',
  templateUrl: './c-empresas.component.html',
  styleUrls: []
})
export class CEmpresasComponent implements OnInit {

  urls = new Array<string>();
  

  constructor() { }

  ngOnInit(): void {

  }

  detectFiles(event : any) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

}
