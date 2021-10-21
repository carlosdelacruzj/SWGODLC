import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddPedido, EditarPedido, Proyecto } from '../model/visualizar.model';
@Injectable({
  providedIn: 'root'
})
export class VisualizarService {
  selectProyecto: Proyecto = {
    Empleado: '',
    N_Pedido: 0,
    Cliente: '',
    F_Registro: '',
    EstadoPedido: '',
    Costo_Total: 0,
    Acuenta: 0,
    EstadoPago: '',
    Evento: '',
    Servicio: '',
    F_Evento: '',
    Hora_Evento: '',
    Direccion: '',
    Descripcion: '',
    NombrePedido: ''

  };

  putEditarPedido: EditarPedido = {
    EP_Cod: 0,
    fecha: '',
    hora: '',
    id: 0

  };

  selectAgregarPedido: AddPedido = {
    EP_Cod: 0,
    F_Registro: '',
    N_Pedido: 0,
    Nombre: '',
    Apellido: '',
    Evento: '',
    Servicio: '',
    F_Evento: '',
    Hora_Evento: '',
    Direccion: '',
    Descripcion: '',

  };

  private API_VISUALIZAR =
    'https://tp2021database.herokuapp.com/pedido/consulta/getByIDPedido/';

  private API_EDITARPEDIDO =
    'https://tp2021database.herokuapp.com/pedido/actualiza/putByIdPedido';

  private API_AGREGARPEDIDO =
    'https://tp2021database.herokuapp.com/pedido/registro/postPedido';
  constructor(private http: HttpClient) { }


  public getPedidoID(id: any): Observable<any> {
    return this.http.get(this.API_VISUALIZAR + id)
  }
  public putPedido(estado: number, fecha: string, hora: string, id: number): Observable<any> {
    return this.http.put(this.API_EDITARPEDIDO, {
      "EP_Cod": estado,
      "fecha": fecha,
      "hora": hora,
      "id": id
    })
  }


  public registro(data:any): Observable<any> {

    console.log('Probando');

    
    return this.http.post(this.API_AGREGARPEDIDO, data);
  }


  public postPedido(
    EP_Cod: number,
    F_Registro: string,
    N_Pedido: number,
    Nombre: string,
    Apellido: string,
    Evento: String,
    Servicio: String,
    F_Evento: String,
    Hora_Evento: String,
    Direccion: string,
    Descripcion: Event
  ): Observable<any> {
    return this.http.post(this.API_AGREGARPEDIDO, {

      EP_Cod: EP_Cod,
      F_Registro: F_Registro,
      N_Pedido: N_Pedido,
      Nombre: Nombre,
      Apellido: Apellido,
      Evento: Evento,
      Servicio: Servicio,
      F_Evento: F_Evento,
      Hora_Evento: Hora_Evento,
      Direccion: Direccion,
      Descripcion: Descripcion,
    })
  }
}
