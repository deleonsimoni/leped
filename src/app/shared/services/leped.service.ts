import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LepedService {

  constructor(
    private http: HttpClient
  ) { }

  listQuemSomos() {
    return this.http.get(`/api/leped/quemsomos`);
  }

  cadastrarQuemSomos(file: File, form: any) {
    const formData: FormData = new FormData();
    formData.append('fileArray', file, `${file.name}`);
    formData.append('formulario', JSON.stringify(form));
    return this.http.post(`/api/leped/quemsomos`, form);
  }

  deletarQuemSomos(form: any) {
    return this.http.delete(`/api/leped/quemsomos/${form._id}`);
  }

  atualizarQuemSomos(file: File, form: any) {
    const formData: FormData = new FormData();
    formData.append('fileArray', file, `${file.name}`);
    formData.append('formulario', JSON.stringify(form));
    return this.http.put(`/api/leped/quemsomos/`, form);
  }


  listNoticia() {
    return this.http.get(`/api/leped/noticia`);
  }

  cadastrarNoticia(form: any) {
    return this.http.post(`/api/leped/noticia`, form);
  }

  deletarNoticia(form: any) {
    return this.http.delete(`/api/leped/noticia/${form._id}`);
  }

  atualizarNoticia(form: any) {
    return this.http.put(`/api/leped/noticia/`, form);
  }


  listEvento() {
    return this.http.get(`/api/leped/eventos`);
  }

  cadastrarEvento(form: any) {
    return this.http.post(`/api/leped/eventos`, form);
  }

  deletarEvento(form: any) {
    return this.http.delete(`/api/leped/eventos/${form._id}`);
  }

  atualizarEvento(form: any) {
    return this.http.put(`/api/leped/eventos/`, form);
  }


  listCoordenadoras() {
    return this.http.get(`/api/leped/coordenadoras`);
  }

  cadastrarCoordenadoras(form: any) {
    return this.http.post(`/api/leped/coordenadoras`, form);
  }

  deletarCoordenadoras(form: any) {
    return this.http.delete(`/api/leped/coordenadoras/${form._id}`);
  }

  atualizarCoordenadoras(form: any) {
    return this.http.put(`/api/leped/coordenadoras/`, form);
  }


  listGrupoPesquisa() {
    return this.http.get(`/api/leped/grupoPesquisa`);
  }

  cadastrarGrupoPesquisa(form: any) {
    return this.http.post(`/api/leped/grupoPesquisa`, form);
  }

  deletarGrupoPesquisa(form: any) {
    return this.http.delete(`/api/leped/grupoPesquisa/${form._id}`);
  }

  atualizarGrupoPesquisa(form: any) {
    return this.http.put(`/api/leped/grupoPesquisa/`, form);
  }


  listGaleria() {
    return this.http.get(`/api/leped/galeria`);
  }

  cadastrarGaleria(form: any) {
    return this.http.post(`/api/leped/galeria`, form);
  }

  deletarGaleria(form: any) {
    return this.http.delete(`/api/leped/galeria/${form._id}`);
  }

  atualizarGaleria(form: any) {
    return this.http.put(`/api/leped/galeria/`, form);
  }
}
