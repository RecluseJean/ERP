import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-productos-cv',
  templateUrl: './agregar-productos-cv.component.html',
  styleUrls: []
})
export class AgregarProductosCvComponent implements OnInit {
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
