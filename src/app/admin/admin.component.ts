import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  private adminRoutes = [
    { name: 'QUEM SOMOS', path: '/admin/quem-somos' },
    { name: 'COORDENADORAS', path: '/admin/coordenadoras' },
    { name: 'EVENTOS', path: '/admin/eventos' },
    { name: 'GALERIA', path: '/admin/galeria' },
    { name: 'GRUPOS DE PESQUISA', path: '/admin/grupos-pesquisa' },
    { name: 'NOTÍCIAS', path: '/admin/noticias' },
  ];


  ngOnInit() { }



}
