import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environments';
import { Tienda } from '../Modulos/tienda.module';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  baseApiUrl: string = enviroment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllTiendas(): Observable<Tienda[]>  {
    return this.http.get<Tienda[]>(this.baseApiUrl + '/api/Tiendas' ) 
}

  addTienda(agregarNuevaTienda: Tienda): Observable<Tienda> {
    agregarNuevaTienda.id = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Tienda>(this.baseApiUrl + '/api/Tiendas', agregarNuevaTienda);
  }

  getTienda(id: string): Observable<Tienda> {
    return this.http.get<Tienda>(this.baseApiUrl + '/api/Tiendas/' + id);
  }

  updateTienda(id: string, editarTienda: Tienda): Observable<Tienda> {
    return this.http.put<Tienda>(this.baseApiUrl + '/api/Tiendas/' + id, editarTienda);
  }

  deleteTienda(id: string): Observable<Tienda>{
    return this.http.delete<Tienda>(this.baseApiUrl + '/api/Tiendas/' + id);
  }

}