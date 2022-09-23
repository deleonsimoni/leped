import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogGroupPesquisasComponent } from '@app/shared/dialogs/dialog-group-pesquisas/dialog-group-pesquisas.component';

import { GrupoPesquisaService } from '@app/shared/services/grupo-pesquisa/grupo-pesquisa.service';
import { iif, map, Observable, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-pesquisas',
  templateUrl: './pesquisas.component.html',
  styleUrls: ['./pesquisas.component.scss']
})
export class PesquisasComponent implements OnInit {

  public profileImage: any;
  public itens: Array<any> = [];
  public type;

  constructor(
    private grupoPesquisaService: GrupoPesquisaService,
    public dialog: MatDialog,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.type = params['type'];
        this.listAll()
          .subscribe();
      });
  }

  private listAll(): Observable<any> {
    return this.grupoPesquisaService.listPesquisa(this.type)
      .pipe(
        map((itens: any) => this.itens = itens)
      )
  }

  public openDialog(form: any = null): Observable<any> {
    const dialog = this.dialog.open(DialogGroupPesquisasComponent, {
      disableClose: true,
      minWidth: "40%",
      maxWidth: "100%",
      data: {
        form
      }
    });

    return dialog.afterClosed();
  }

  public register(): void {
    this.openDialog()
      .pipe(
        switchMap(({ save, form, file }: any) =>
          iif(() => save,
            this.grupoPesquisaService.cadastrarPesquisa(form, this.type)
              .pipe(switchMap(_ => this.listAll())),
            of(null)
          )
        )
      )
      .subscribe();
  }

  public edit(data: any): void {
    this.openDialog(data)
      .pipe(
        switchMap(({ save, form }: any) =>
          iif(() => save,
            this.grupoPesquisaService.atualizarPesquisa({ ...form, _id: data._id }, this.type)
              .pipe(switchMap(_ => this.listAll())),
            of(null)
          )
        )
      )
      .subscribe();
  }

  public delete(item: any): void {
    this.grupoPesquisaService.deletarPesquisa(item._id, this.type)
      .pipe(
        take(1),
        switchMap(_ => this.listAll())
      )
      .subscribe()
  }

}
