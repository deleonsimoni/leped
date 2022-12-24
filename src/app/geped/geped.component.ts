import { Component, OnInit } from '@angular/core';
import { GepedService } from '@app/shared/services/geped.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-geped',
  templateUrl: './geped.component.html',
  styleUrls: ['./geped.component.scss']
})
export class GepedComponent implements OnInit {

  publicacao = 'dissertacao';
  pesquisas = 'Pesquisas Realizadas';
  home;
  pesquisasServer;
  livros;
  teses;
  artigos;
  capitulos;
  extensaoEnsino;

  constructor(
    private gepedService: GepedService,
    private _sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {
    this.listAll();
  }

  public listAll() {

    this.gepedService.listHome('geped')
      .subscribe((res: any) => {
        this.home = res[0];
        this.ordenarParticipantes();
      }, err => {
        console.log(err);
      });

  }


  ordenarParticipantes() {

    this.home.participantes.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })

  }


  stringtoDate(a: any, b: any) {


    // converto a data recebida em array
    let data1 = a.dateTesis.split("/");
    let data2 = b.dateTesis.split("/");
    // converto os valores em objeto data
    var d1 = new Date(data1[0], data1[1], data1[2]);
    var d2 = new Date(data2[0], data2[1], data2[2]);
    // retorna o objeto

    return d1 > d2;


  }



  ordenarTeses() {

    this.teses.sort(this.stringtoDate, -1);

  }

  sanitizeVideo(link) {
    if (link && link.includes('watch')) {
      link = link.replace('watch?v=', 'embed/');
    }

    return this._sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  public getPesquisas(type, typePesquisa) {

    this.gepedService.listPesquisa(type, typePesquisa)
      .subscribe((res: any) => {
        this.pesquisasServer = res[0];
      }, err => {
        console.log(err);
      });

  }

  public getExtensaoEnsino(type, typeExtensao) {

    this.gepedService.listExtensaoEnsino(type, typeExtensao)
      .subscribe((res: any) => {
        this.extensaoEnsino = res[0];
      }, err => {
        console.log(err);
      });

  }

  public getArtigos() {

    this.gepedService.getArtigo('geped')
      .subscribe((res: any) => {
        this.artigos = res[0];
      }, err => {
        console.log(err);
      });

  }

  public getLivros() {

    this.gepedService.getLivro('geped')
      .subscribe((res: any) => {
        this.livros = res[0];
      }, err => {
        console.log(err);
      });

  }

  public getCapitulos() {

    this.gepedService.getCapitulos('geped')
      .subscribe((res: any) => {
        this.capitulos = res[0];
      }, err => {
        console.log(err);
      });

  }



  public getTeses() {

    this.gepedService.getTeses('geped')
      .subscribe((res: any) => {
        this.teses = res[0];
        //   this.ordenarTeses();
      }, err => {
        console.log(err);
      });

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
