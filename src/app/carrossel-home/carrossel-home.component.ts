import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrossel-home',
  templateUrl: './carrossel-home.component.html',
  styleUrls: ['./carrossel-home.component.scss']
})
export class CarrosselHomeComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 8000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

  images = [
    { title: 'V SIMPÓSIO DO LEPED', short: 'Será realizado o V SIMPÓSIO DO LEPED...', src: "assets/img/carrossel3.jpeg" }
  ];

}
