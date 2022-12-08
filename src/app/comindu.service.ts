import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CominduService {
  constructor(
    private http: HttpClient
  ) { }

  listComunidades() {
    return this.http.get(`/api/comindu/comunidades`);
  }

  listComunidadeById(id) {
    return this.http.get(`/api/comindu/comunidadesById/${id}`);
  }

  desinscrever(id) {
    return this.http.post(`/api/comindu/unsubscribe/${id}`, {});
  }

  listTags() {
    return this.http.get(`/api/comindu/tags`);
  }

  sendPost(post, id) {
    return this.http.post(`/api/comindu/postSend/${id}`, { post: post });
  }

  getChat(idComunidade, idPost) {
    return this.http.get(`/api/comindu/comunidade/${idComunidade}/chats/${idPost}`);
  }

  postChat(post, idPost, idComunidade) {
    return this.http.post(`/api/comindu/comunidade/${idComunidade}/postChat/${idPost}/chat`, { post: post });
  }

  inscrever(id) {
    return this.http.post(`/api/comindu/subscribe/${id}`, {});
  }


  cadastrarComunidade(file: File, form: any) {
    const formData: FormData = new FormData();
    if (file) {
      formData.append('fileArray', file, `${file.name}`);
    }
    formData.append('formulario', JSON.stringify(form));
    return this.http.post(`/api/comindu/comunidade`, formData);
  }

}
