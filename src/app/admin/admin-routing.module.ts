import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { OnlyAdminUsersGuard } from './admin-user-guard';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NoticiasComponent } from '@app/noticias/noticias.component';
import { GruposPesquisaComponent } from './grupos-pesquisa/grupos-pesquisa.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { EventosComponent } from './eventos/eventos.component';
import { CoordenadorasComponent } from './coordenadoras/coordenadoras.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [OnlyAdminUsersGuard],
    component: AdminComponent,
    children: [
      {
        path: 'quem-somos', component: QuemSomosComponent
      },
      {
        path: 'coordenadoras', component: CoordenadorasComponent
      },
      {
        path: 'eventos', component: EventosComponent
      },
      {
        path: 'galeria', component: GaleriaComponent
      },
      {
        path: 'grupos-pesquisa', component: GruposPesquisaComponent
      },
      {
        path: 'noticias', component: NoticiasComponent
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
