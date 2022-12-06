import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environments';
import { Cliente } from '../Modulos/cliente.module';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseApiUrl: string = enviroment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllClientes(): Observable<Cliente[]>  {
      return this.http.get<Cliente[]>(this.baseApiUrl + '/api/Clientes' ) 
  }

  addCliente(agregarNuevoCliente: Cliente): Observable<Cliente> {
    agregarNuevoCliente.id = "00000000-0000-0000-0000-000000000000";
    agregarNuevoCliente.id_articulo = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Cliente>(this.baseApiUrl + '/api/Clientes', agregarNuevoCliente);
  }

  getCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(this.baseApiUrl + '/api/Clientes/' + id);
  }

  updateCliente(id: string, editarcliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.baseApiUrl + '/api/Clientes/' + id, editarcliente);
  }

  deleteCliente(id: string): Observable<Cliente>{
    return this.http.delete<Cliente>(this.baseApiUrl + '/api/Clientes/' + id);
  }

}