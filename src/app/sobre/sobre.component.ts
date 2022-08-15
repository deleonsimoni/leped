import { Component, OnInit } from '@angular/core';
import { LepedService } from '@app/shared/services/leped.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  carregando = false;
  quemSomos;

  constructor(
    private lepedService: LepedService,
  ) { }

  ngOnInit(): void {
    this.lepedService.listQuemSomos().subscribe((res: any) => {
      this.carregando = false;
      this.quemSomos = res[0];
    }, err => {
      this.carregando = false;
    });;
  }

}
