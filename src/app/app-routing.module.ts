import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { HistoricoComponent } from './historico/historico.component';
import { LinhasPesquisaComponent } from './linhas-pesquisa/linhas-pesquisa.component';
import { EventosComponent } from './eventos/eventos.component';
import { ObrasPublicadasComponent } from './obras-publicadas/obras-publicadas.component';
import { GruposComponent } from './grupos/grupos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    /*canActivate: [AuthGuard],*/
  },
  {
    path: 'historico',
    component: HistoricoComponent,
    /*canActivate: [AuthGuard],*/
  },
  {
    path: 'linhas-pesquisa',
    component: LinhasPesquisaComponent,
    /*canActivate: [AuthGuard],*/
  },
  {
    path: 'eventos',
    component: EventosComponent,
    /*canActivate: [AuthGuard],*/
  },
  {
    path: 'obras-publicadas',
    component: ObrasPublicadasComponent,
    /*canActivate: [AuthGuard],*/
  },
  {
    path: 'grupo/:id',
    component: GruposComponent,
    /*canActivate: [AuthGuard],*/
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
