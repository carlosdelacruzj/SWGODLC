import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto, DatosCliente } from '../model/pedido.model';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  selectProyecto: Proyecto = {

    "ID": 0,
    "Nombre": '',
    "Fecha": '',
    "Servicio": '',
    "Evento": '',
    "Cliente": '',
    "Estado": '',
  };
  selectCliente: DatosCliente = {


    "Nombre": '',
    "Apellido": '',
    "Cod_Cli": 0

  };

  private API_PRUEBA =
    'https://tp2021database.herokuapp.com/pedido/consulta/getAllPedido';
  private API_N_Pedido =
    'https://tp2021database.herokuapp.com/pedido/consulta/getIndexPedido';

  private API_DNI =
    'https://tp2021database.herokuapp.com/cliente/consulta/getDataCliente/';
  constructor(private http: HttpClient) { }


  public getAllNombres(): Observable<any> {
    return this.http.get(this.API_PRUEBA);
  }
  public getN_Pedido(): Observable<any> {
    return this.http.get(this.API_N_Pedido);
  }
  public getDni(id: any): Observable<any> {
    return this.http.get(this.API_DNI + id)
  }
}
