import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environments';
import { Articulos } from '../Modulos/articulos.module';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  baseApiUrl: string = enviroment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllArticulos(): Observable<Articulos[]>  {
    return this.http.get<Articulos[]>(this.baseApiUrl + '/api/Articulos' ) 
  }

  addArticulo(agregarNuevoArticulo: Articulos): Observable<Articulos> {
    agregarNuevoArticulo.id = "00000000-0000-0000-0000-000000000000";
    agregarNuevoArticulo.id_tienda = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Articulos>(this.baseApiUrl + '/api/Articulos', agregarNuevoArticulo);
  }

  getArticulo(id: string): Observable<Articulos> {
    return this.http.get<Articulos>(this.baseApiUrl + '/api/Articulos/' + id);
  }

  updateArticulo(id: string, editarArticulo: Articulos): Observable<Articulos> {
    return this.http.put<Articulos>(this.baseApiUrl + '/api/Articulos/' + id, editarArticulo);
  }

  deleteArticulo(id: string): Observable<Articulos>{
    return this.http.delete<Articulos>(this.baseApiUrl + '/api/Articulos/' + id);
  }

}
