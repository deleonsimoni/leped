import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  nomeMenu;

  public menu = [
    { name: 'QUEM SOMOS', path: '/admin/quem-somos' },
    { name: 'COORDENADORAS', path: '/admin/coordenadoras' },
    { name: 'EVENTOS', path: '/admin/eventos' },
    { name: 'GALERIA', path: '/admin/galeria' },
    { name: 'NOTÍCIAS', path: '/admin/noticias' },
    { name: 'GRUPOS DE PESQUISA', path: '/admin/grupos-pesquisa' },
  ];

  ngOnInit() { }



}
