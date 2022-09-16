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
    { name: 'GRUPOS DE PESQUISA', path: '/admin/grupos-pesquisa' },
    { name: 'NOTÍCIAS', path: '/admin/noticias' },
  ];


  public menuGroup = [
    { name: 'QUEM SOMOS', path: '/admin/grupos-pesquisa/quem-somos-grupo' },
    { name: 'PESQUISAS', path: '/admin/grupos-pesquisa/pesquisas' },
    { name: 'DISSERTAÇÃO E TESES', path: '/admin/grupos-pesquisa/teses' },
    { name: 'ARTIGOS', path: '/admin/grupos-pesquisa/artigos' },
    { name: 'LIVROS', path: '/admin/grupos-pesquisa/livros' },
    { name: 'CAPÍTULO DE LIVROS', path: '/admin/grupos-pesquisa/capitulos' },

  ];

  ngOnInit() { }



}
