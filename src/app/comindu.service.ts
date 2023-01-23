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

  confirmComprovante(id) {
    return this.http.post(`/api/user/confirmComprovante/${id}`, {});
  }

  negarComprovante(id) {
    return this.http.post(`/api/user/negarComprovante/${id}`, {});
  }

  retrieveUsers(page, search) {
    return this.http.get(`/api/user/usrs?page=${page}&search=${search}`);
  }

  listAdmins() {
    return this.http.get(`/api/comindu/listAdmins`);
  }

  listComunidadeById(id) {
    return this.http.get(`/api/comindu/comunidadesById/${id}`);
  }

  desinscrever(id) {
    return this.http.post(`/api/comindu/unsubscribe/${id}`, {});
  }

  inativarComunidade(id) {
    return this.http.post(`/api/comindu/inativarComunidade/${id}`, {});
  }

  ativarComunidade(id) {
    return this.http.post(`/api/comindu/ativarComunidade/${id}`, {});
  }

  listMyComunidades() {
    return this.http.get(`/api/comindu/minhascomunidades`);
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
