import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gedoc',
  templateUrl: './gedoc.component.html',
  styleUrls: ['./gedoc.component.scss']
})
export class GedocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = "../../assets/js/gallery.js";
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  ngAfterViewInit() {
    this.loadScript();
  }

}
