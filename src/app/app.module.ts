import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';
import { CatchErrorInterceptor } from './interceptors/http-error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './shared/services';
import { CarrosselHomeComponent } from './carrossel-home/carrossel-home.component';
import { EventosComponent } from './eventos/eventos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HistoricoComponent } from './historico/historico.component';
import { LinhasPesquisaComponent } from './linhas-pesquisa/linhas-pesquisa.component';
import { APP_BASE_HREF } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SobreComponent } from './sobre/sobre.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ObrasPublicadasComponent } from './obras-publicadas/obras-publicadas.component';
import { GruposComponent } from './grupos/grupos.component';
import { EndipeComponent } from './endipe/endipe.component';
import { NgxFlagPickerModule } from 'ngx-flag-picker';
import { GepedComponent } from './geped/geped.component';
import { GepematComponent } from './gepemat/gepemat.component';
import { GeprodComponent } from './geprod/geprod.component';
import { GedocComponent } from './gedoc/gedoc.component';
import { GecultComponent } from './gecult/gecult.component';

import { ToastrModule } from 'ngx-toastr';
import { DialogDeleteComponent } from './dialog/dialog-delete/dialog-delete.component';
import { ModalTermoComponent } from './dialog/modal-termo/modal-termo.component';
import { AngularEditorModule } from '@kolkov/angular-editor';



export function appInitializerFactory(authService: AuthService) {
  return () => authService.checkTheUserOnTheFirstLoad();
}



@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    ToastrModule.forRoot(),
    NgbModule,
    FontAwesomeModule,
    NgxFlagPickerModule,
    AngularEditorModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarrosselHomeComponent,
    EventosComponent,
    NoticiasComponent,
    HistoricoComponent,
    LinhasPesquisaComponent,
    FooterComponent,
    SobreComponent,
    ObrasPublicadasComponent,
    GruposComponent,
    EndipeComponent,
    GepedComponent,
    GepematComponent,
    GeprodComponent,
    GedocComponent,
    GecultComponent,
    DialogDeleteComponent,
    ModalTermoComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchErrorInterceptor,
      multi: true,
    },

    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
