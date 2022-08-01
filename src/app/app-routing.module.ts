import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { HistoricoComponent } from './historico/historico.component';
import { LinhasPesquisaComponent } from './linhas-pesquisa/linhas-pesquisa.component';
import { EventosComponent } from './eventos/eventos.component';
import { ObrasPublicadasComponent } from './obras-publicadas/obras-publicadas.component';
import { GruposComponent } from './grupos/grupos.component';
import { EndipeComponent } from './endipe/endipe.component';
import { GecultComponent } from './gecult/gecult.component';
import { GedocComponent } from './gedoc/gedoc.component';
import { GeprodComponent } from './geprod/geprod.component';
import { GepematComponent } from './gepemat/gepemat.component';
import { GepedComponent } from './geped/geped.component';
import { RegisterComponent } from './auth/register/register.component';

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
    path: 'endipe',
    component: EndipeComponent,
    /*canActivate: [AuthGuard],*/
  },
  {
    path: 'grupo/:grupo',
    component: GruposComponent,
    /*canActivate: [AuthGuard],*/
  },

  {
    path: 'geped',
    component: GepedComponent,
    /*canActivate: [AuthGuard],*/
  },
  {
    path: 'gepemat',
    component: GepematComponent,
    /*canActivate: [AuthGuard],*/
  },
  {
    path: 'geprod',
    component: GeprodComponent,
    /*canActivate: [AuthGuard],*/
  },
  {
    path: 'gedoc',
    component: GedocComponent,
    /*canActivate: [AuthGuard],*/
  },
  {
    path: 'gecult',
    component: GecultComponent,
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
