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
    { title: 'De cara nova!', short: 'Olha a repaginada que tivemos na nossa página', src: "assets/img/carrosssel3.png" },
    { title: 'Prontos pro congresso', short: 'Nosso grupo está preparado para o Endipe 2022 no Rio de janeiro!', src: "assets/img/carrosssel1.jpg" },
    { title: 'Reunião Quinzenal', short: 'Novas ideias vem por aí', src: "assets/img/carrosssel2.jpg" }
  ];

}
