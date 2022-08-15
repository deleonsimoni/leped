import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LepedService } from '@app/shared/services/leped.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrossel-home',
  templateUrl: './carrossel-home.component.html',
  styleUrls: ['./carrossel-home.component.scss']
})
export class CarrosselHomeComponent implements OnInit {

  mobile: any;
  noticias = [];

  constructor(
    config: NgbCarouselConfig,
    private router: Router,
    private lepedService: LepedService,
  ) {
    config.interval = 8000;
    config.keyboard = true;
    config.pauseOnHover = true;

  }

  ngOnInit(): void {
    if (window.screen.width <= 400) { // 768px portrait
      this.mobile = true;
    }

    this.lepedService.listNoticia()
      .subscribe((res: any) => {
        this.noticias.push(res[0]);
      }, err => {
        console.log(err);
      });

  }

  visualizar(item) {
    this.router.navigate(['visualizar'], { state: { data: item } });
  }

  images = [
    { title: 'V SIMPÓSIO DO LEPED', short: 'Será realizado o V SIMPÓSIO DO LEPED...', src: "assets/img/carrossel34.jpeg" }
  ];

}
