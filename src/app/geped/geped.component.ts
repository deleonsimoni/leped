import { Component, OnInit } from '@angular/core';
import { GepedService } from '@app/shared/services/geped.service';

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

  constructor(
    private gepedService: GepedService,

  ) { }

  ngOnInit(): void {
    this.listAll();
  }

  public listAll() {

    this.gepedService.listHome('geped')
      .subscribe((res: any) => {
        this.home = res[0];
      }, err => {
        console.log(err);
      });

  }

  public getPesquisas(type, typePesquisa) {

    this.gepedService.listPesquisa(type, typePesquisa)
      .subscribe((res: any) => {
        this.pesquisasServer = res[0];
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
