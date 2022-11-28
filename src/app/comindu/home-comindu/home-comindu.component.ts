import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CominduService } from '@app/comindu.service';
import { DialogNewsComponent } from '@app/shared/dialogs/dialog-news/dialog-news.component';
import { LepedService } from '@app/shared/services/leped.service';
import { iif, map, Observable, of, switchMap, take } from 'rxjs';
import { RegisterCominduComponent } from '../dialog/register-comindu/register-comindu.component';

@Component({
  selector: 'app-home-comindu',
  templateUrl: './home-comindu.component.html',
  styleUrls: ['./home-comindu.component.scss']
})
export class HomeCominduComponent implements OnInit {

  comunidades;

  constructor(
    private cominduService: CominduService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public openDialog(form: any = null): Observable<any> {
    const dialog = this.dialog.open(RegisterCominduComponent, {
      disableClose: true,
      minWidth: "40%",
      maxWidth: "100%",
      data: {
        form
      }
    });

    return dialog.afterClosed();
  }

  private listAll(): Observable<any> {
    return this.cominduService.listComunidade()
      .pipe(
        map((comunidades: any) => this.comunidades = comunidades)
      )
  }

  public register(): void {
    this.openDialog()
      .pipe(
        switchMap(({ save, form, file }: any) =>
          iif(() => save,
            this.cominduService.cadastrarComunidade(file, form)
              .pipe(switchMap(_ => this.listAll())),
            of(null)
          )
        )
      )
      .subscribe();
  }

}
