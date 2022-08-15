import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TruncateStringPipe } from '@app/shared/pipes/truncate-string.pipe';
import { LepedService } from '@app/shared/services/leped.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias;

  constructor(
    private lepedService: LepedService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    this.lepedService.listNoticia()
      .subscribe((res: any) => {
        this.toastr.success('Olhe as nossas últimas notícias', 'Sempre Atualizados');
        this.noticias = res;
      }, err => {
        this.toastr.success('Ocorreu um erro ao listar as notícias', 'Aguarde');
        console.log(err);
      });
  }

  visualizar(item) {
    this.router.navigate(['visualizar'], { state: { data: item } });
  }

}
