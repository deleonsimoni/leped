import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LepedService } from '@app/shared/services/leped.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos;
  carregando = false;

  constructor(
    private lepedService: LepedService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.carregando = true;

    this.lepedService.listEvento()
      .subscribe((res: any) => {
        this.carregando = false;
        this.eventos = res;
      }, err => {
        this.carregando = false;
        console.log(err);
      });
  }

  visualizar(item) {
    item.tipo = 'evento';
    this.router.navigate(['visualizar'], { state: { data: item } });
  }

}
