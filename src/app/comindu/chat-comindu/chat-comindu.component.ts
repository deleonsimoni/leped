import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '@app/shared/services';
import { ChatService } from '@app/shared/services/chat.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat-comindu',
  templateUrl: './chat-comindu.component.html',
  styleUrls: ['./chat-comindu.component.scss']
})
export class ChatCominduComponent implements OnInit {

  user;
  carregando = false;
  comments;
  chats = [];
  chatSelected;
  pager: any = {};
  newComment = null;
  idTimerchat;
  pageChoose;
  userTo;

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private chatService: ChatService,
    public authService: AuthService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getChat(this.pageChoose);

    this.authService.getUser().subscribe(user => {
      this.user = user;
    });

    this.idTimerchat = setInterval(() => {

      if (this.chatSelected) {
        this.selectChat(this.chatSelected);
      } else {
        this.getChat(this.pageChoose);
      }

    }, 50 * 1000);
  }

  ngOnDestroy() {
    if (this.idTimerchat) {
      clearInterval(this.idTimerchat);
    }
  }

  parseContent(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  };

  getChat(event) {
    this.carregando = true;
    this.pageChoose = event && event.pageIndex + 1 || 1;

    this.chatService.getChat(this.pageChoose)
      .subscribe((res: any) => {
        this.carregando = false;
        if (res.pager) {
          this.chats = res;
          this.pager = res.pager;
        } else {
          this.comments = res;

        }

      }, err => {
        this.carregando = false;
      });
  }

  selectChat(chat) {

    this.carregando = true;
    this.chatSelected = chat._id;
    this.userTo = chat.author.user.email;
    this.chatService.getChatbyID(chat._id)
      .subscribe((res: any) => {
        this.carregando = false;
        this.comments = res;
      }, err => {
        this.carregando = false;
      });

  }

  addNewComment() {
    if (this.newComment) {

      let chatMessage = this.newComment;
      chatMessage = chatMessage.replace(/(@[^@.]+)@/, '<span class="reply">$1</span>')
      chatMessage = chatMessage.replace(/https?:\/\/(www.)?([a-zA-Z0-9\-_]+\.[a-zA-Z0-9]+)/, '<a href="//$2">$2</a>')
      this.newComment = null;

      if (this.comments && this.comments._id) {

        this.chatService.putChat(this.comments._id, { mensagem: chatMessage }).subscribe((res: any) => {
          if (this.chatSelected) {
            this.selectChat(this.chatSelected);
          } else {
            this.getChat(this.pageChoose);
          }
          this.toastr.success("Mensagem enviada com sucesso", "Sucesso");
        }, err => {
          this.toastr.error("Servidor momentâneamente inoperante", "Atenção");
        });

      } else {

        this.chatService.postChat({ mensagem: chatMessage }).subscribe((res: any) => {
          this.comments = res;
          this.toastr.success("Mensagem enviada com sucesso", "Sucesso");
        }, err => {
          this.toastr.error("Servidor momentâneamente inoperante", "Atenção");
        });

      }

    } else {
      this.toastr.error("Preencha sua mensagem antes de enviar", "Atenção");

    }
  }


}
