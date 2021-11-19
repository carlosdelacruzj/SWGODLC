import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

selectContrato: Cliente = {
  id: 0,
  nombre: '',
  apellido: '',
  correo: '',
  celular: '',
  numDoc: '',
  direccion: '',
  estado: '',
  ECli_Nombre: ''
};

  private API_PRUEBA =
    'https://tp2021database.herokuapp.com/cliente/consulta/getAllCliente';
  constructor(private http: HttpClient) {}

  public getAllClientes(): Observable<any> {
    return this.http.get(this.API_PRUEBA);
  }

  public addCliente(data:any): Observable<any> {

    console.log('Probando');

    const url = 'https://tp2021database.herokuapp.com/proyecto/registro/postProyecto';
    return this.http.post(url, data);
  }

}