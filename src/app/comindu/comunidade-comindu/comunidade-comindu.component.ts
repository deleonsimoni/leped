import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CominduService } from '@app/comindu.service';
import { AuthService } from '@app/shared/services';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comunidade-comindu',
  templateUrl: './comunidade-comindu.component.html',
  styleUrls: ['./comunidade-comindu.component.scss']
})
export class ComunidadeCominduComponent implements OnInit {

  idComunidade;
  carregando;
  comunidade;
  user;
  postSend;
  chatSend;
  postSelect;
  chats;

  constructor(
    private cominduService: CominduService,
    private authService: AuthService,
    private toastr: ToastrService,
    route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.idComunidade = params['id'];
    });
  }

  ngOnInit(): void {
    this.getComunidade();
    this.authService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  public inscrever() {
    this.carregando = true;
    this.cominduService.inscrever(this.comunidade._id)
      .subscribe((res: any) => {
        this.carregando = false;
        this.getComunidade();
      }, err => {
        this.carregando = false;
      });
  }

  public desinscrever() {
    this.carregando = true;
    this.cominduService.desinscrever(this.comunidade._id)
      .subscribe((res: any) => {
        this.carregando = false;
        this.getComunidade();
      }, err => {
        this.carregando = false;
      });
  }

  public getComunidade() {
    this.carregando = true;
    this.cominduService.listComunidadeById(this.idComunidade)
      .subscribe((res: any) => {
        this.carregando = false;
        this.comunidade = res;
      }, err => {
        this.carregando = false;
      });
  }

  public getChat(idPost, idComunidade) {
    this.carregando = true;
    this.postSelect = idPost;
    this.cominduService.getChat(idComunidade, idPost)
      .subscribe((res: any) => {
        this.carregando = false;
        this.chats = res[0].posts[0].chats;
        if (this.chats.length == 0) {
          this.toastr.warning('Ainda não há comentários', 'Poxa...');
        }

      }, err => {
        this.carregando = false;
      });
  }

  public sendChat() {
    this.carregando = true;
    this.cominduService.postChat(this.chatSend, this.postSelect, this.idComunidade)
      .subscribe((res: any) => {
        this.carregando = false;
        this.toastr.success('Comentário inserido', 'Ok ;)');
        this.chatSend = "";
        this.getChat(this.postSelect, this.idComunidade);
      }, err => {
        this.carregando = false;
        this.toastr.error('Ocorreu um erro ao cadastrar comentário', 'Atenção: ');

      });
  }



  public sendPost() {
    this.carregando = true;
    this.cominduService.sendPost(this.postSend, this.comunidade._id)
      .subscribe((res: any) => {
        this.carregando = false;
        this.toastr.success('Postagem inserida', 'Ok ;)');
        this.postSend = "";
        this.getComunidade();
      }, err => {
        this.carregando = false;
        this.toastr.error('Ocorreu um erro ao cadastrar postagem', 'Atenção: ');

      });
  }

  public isSubscribe() {
    return this.comunidade?.subscribers?.some(el => el.userId._id == this.user._id);
  }




















  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,

    width: '800px',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    sanitize: true,
    toolbarHiddenButtons: [
      ['undo', 'redo', 'heading'],
      ['insertVideo', 'insertImage', 'toggleEditorMode', 'fontSize']
    ]
  };

}
