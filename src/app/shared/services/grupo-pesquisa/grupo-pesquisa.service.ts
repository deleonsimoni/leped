import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Coordenadora } from "@app/shared/types";
import { forkJoin, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GrupoPesquisaService {

  private url = '/api/leped/grupo-pesquisa';

  constructor(
    private httpClient: HttpClient
  ) { }

  public save(files: any, grupo: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('formulario', JSON.stringify(grupo));

    if (files[0]) {
      formData.append('fotoGrupo', files[0], `${files[0].name}`);
    }

    if (files[1]) {
      formData.append('fotoCoordenadora', files[1], `${files[1].name}`);
    }

    if (files[2]) {
      files[2].forEach((el: any, key: any) => {
        formData.append(`galeria${key + 1}`, el, el.name);
      });
    }

    return this.httpClient.post(this.url, formData);
  }

  public listAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public find(id: string): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public update(files: any, grupo: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('formulario', JSON.stringify(grupo));

    if (files[0]) {
      formData.append('fotoGrupo', files[0], `${files[0].name}`);
    }

    if (files[1]) {
      formData.append('fotoCoordenadora', files[1], `${files[1].name}`);
    }

    if (files[2].length > 0) {
      let key = 1;
      files[2].forEach((el: any) => {
        formData.append(`galeria${key++}`, el, el.name);
      });
    }

    return this.httpClient.put(this.url, formData);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  listPesquisa() {
    return this.httpClient.get(`/api/grupos-pesquisa/pesquisas`);
  }

  cadastrarPesquisa(form: any) {
    return this.httpClient.post(`/api/grupos-pesquisa/pesquisas`, form);
  }

  deletarPesquisa(form: any) {
    return this.httpClient.delete(`/api/grupos-pesquisa/pesquisas/${form._id}`);
  }

  atualizarPesquisa(form: any) {
    return this.httpClient.put(`/api/grupos-pesquisa/pesquisas/`, form);
  }

  listTese() {
    return this.httpClient.get(`/api/grupos-pesquisa/teses`);
  }

  cadastrarTese(form: any) {
    return this.httpClient.post(`/api/grupos-pesquisa/teses`, form);
  }

  deletarTese(form: any) {
    return this.httpClient.delete(`/api/grupos-pesquisa/teses/${form._id}`);
  }

  atualizarTese(form: any) {
    return this.httpClient.put(`/api/grupos-pesquisa/teses/`, form);
  }

  listArtigo() {
    return this.httpClient.get(`/api/grupos-pesquisa/artigos`);
  }

  cadastrarArtigo(form: any) {
    return this.httpClient.post(`/api/grupos-pesquisa/artigos`, form);
  }

  deletarArtigo(form: any) {
    return this.httpClient.delete(`/api/grupos-pesquisa/artigos/${form._id}`);
  }

  atualizarArtigo(form: any) {
    return this.httpClient.put(`/api/grupos-pesquisa/artigos/`, form);
  }
  listLivro() {
    return this.httpClient.get(`/api/grupos-pesquisa/livros`);
  }

  cadastrarLivro(form: any) {
    return this.httpClient.post(`/api/grupos-pesquisa/livros`, form);
  }

  deletarLivro(form: any) {
    return this.httpClient.delete(`/api/grupos-pesquisa/livros/${form._id}`);
  }

  atualizarLivro(form: any) {
    return this.httpClient.put(`/api/grupos-pesquisa/livros/`, form);
  }

  listCapitulo() {
    return this.httpClient.get(`/api/grupos-pesquisa/capitulos`);
  }

  cadastrarCapitulo(form: any) {
    return this.httpClient.post(`/api/grupos-pesquisa/capitulos`, form);
  }

  deletarCapitulo(form: any) {
    return this.httpClient.delete(`/api/grupos-pesquisa/capitulos/${form._id}`);
  }

  atualizarCapitulo(form: any) {
    return this.httpClient.put(`/api/grupos-pesquisa/capitulos/`, form);
  }
  listQuemSomosGrupo() {
    return this.httpClient.get(`/api/grupos-pesquisa/quem-somos-grupo`);
  }

  cadastrarQuemSomosGrupo(form: any) {
    return this.httpClient.post(`/api/grupos-pesquisa/quem-somos-grupo`, form);
  }

  deletarQuemSomosGrupo(form: any) {
    return this.httpClient.delete(`/api/grupos-pesquisa/quem-somos-grupo/${form._id}`);
  }

  atualizarQuemSomosGrupo(form: any) {
    return this.httpClient.put(`/api/grupos-pesquisa/quem-somos-grupo/`, form);
  }

}
