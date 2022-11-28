import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CominduService {
  constructor(
    private http: HttpClient
  ) { }

  listComunidade() {
    return this.http.get(`/api/comindu/listAll`);
  }

  cadastrarComunidade(file: File, form: any) {
    const formData: FormData = new FormData();
    formData.append('fileArray', file, `${file.name}`);
    formData.append('formulario', JSON.stringify(form));
    return this.http.post(`/api/comindu/register`, formData);
  }

}
