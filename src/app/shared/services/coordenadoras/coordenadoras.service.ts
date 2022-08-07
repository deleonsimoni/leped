import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Coordenadora } from "@app/shared/types";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CoordenadorasService {

  private url = '/api/leped/coordenadoras'

  constructor(
    private httpClient: HttpClient
  ) {}

  public save(coordenadora: Coordenadora): Observable<any> {
    return this.httpClient.post(this.url, coordenadora);
  }

  public listAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public find(id: string): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public update(coordenadora: Coordenadora): Observable<any> {
    return this.httpClient.put(this.url, coordenadora);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
