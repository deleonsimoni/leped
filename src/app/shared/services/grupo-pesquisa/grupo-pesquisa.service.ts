import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Coordenadora } from "@app/shared/types";
import { forkJoin, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GrupoPesquisaService {

  private url = '/api/leped/grupo-pesquisa';

  constructor(
    private httpClient: HttpClient
  ) {}

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

}
