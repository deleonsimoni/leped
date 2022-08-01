import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { OnlyAdminUsersGuard } from './admin-user-guard';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { SharedModule } from '@app/shared/shared.module';
import { CoordenadorasComponent } from './coordenadoras/coordenadoras.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EventosComponent } from './eventos/eventos.component';
import { GruposPesquisaComponent } from './grupos-pesquisa/grupos-pesquisa.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [AdminComponent, QuemSomosComponent, CoordenadorasComponent, GaleriaComponent, NoticiasComponent, EventosComponent, GruposPesquisaComponent],
  imports: [CommonModule, SharedModule, AdminRoutingModule, AngularEditorModule],
  providers: [OnlyAdminUsersGuard],
})
export class AdminModule { }
