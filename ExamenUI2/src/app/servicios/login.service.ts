import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environments';
import { Cliente } from '../Modulos/cliente.module';
import { Articulos } from '../Modulos/articulos.modelu';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseApiUrl: string = enviroment.baseApiUrl;

  constructor(private http: HttpClient) { }

  loginCliente(nombre: string, apellido: string): Observable<Cliente> {
    return this.http.get<Cliente>(this.baseApiUrl + '/api/Clientes/' + nombre + '&' + apellido);
  }

  getAllArticulos(): Observable<Articulos[]>  {
    return this.http.get<Articulos[]>(this.baseApiUrl + '/api/Articulos' ) 
  }

  getArticulo(id: string): Observable<Articulos> {
    return this.http.get<Articulos>(this.baseApiUrl + '/api/Articulos/' + id);
  }

  compraArticulo(id: string, editarArticulo: Articulos, nombre: string, apellido: string): Observable<Articulos> {
    return this.http.put<Articulos>(this.baseApiUrl + '/api/Articulos/' + id + '&' + nombre + '&' + apellido, editarArticulo);
  }

}