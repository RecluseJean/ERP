import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-honorario-gr',
  templateUrl: './agregar-honorario-gr.component.html',
  styleUrls: []
})
export class AgregarHonorarioGrComponent implements OnInit {
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
