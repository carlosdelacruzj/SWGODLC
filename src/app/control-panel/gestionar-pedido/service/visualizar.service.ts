import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgregarPedido, EditarPedido, Proyecto, EventServi2 } from '../model/visualizar.model';
import { Pedido } from '../../gestionar-proyecto/model/pedido.model';
@Injectable({
  providedIn: 'root',
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
    NombrePedido: '',

  };

  putEditarPedido: EditarPedido = {
    EP_Cod: 0,
    fecha: '',
    hora: '',
    id: 0,

  };

  selectAgregarPedido: AgregarPedido = {
    NombrePedido: '',
    ExS: 0,
    doc: '',
    fechaCreate: '',
    fechaEvent: '',
    horaEvent: '',
    CodEmp: 0,
    Direccion: '',
    Observacion: '',

  };


  private API_VISUALIZAR =
    'https://tp2021database.herokuapp.com/pedido/consulta/getByIDPedido/';

  private API_EDITARPEDIDO =
    'https://tp2021database.herokuapp.com/pedido/actualiza/putByIdPedido';

  private API_AGREGARPEDIDO =
    'https://tp2021database.herokuapp.com/pedido/registro/postPedido';
    
  private GET_EVENTO_BY_SERVICIOS =
  'https://tp2021database.herokuapp.com/eventos_servicios/consulta/getAllServiciosByEventoServ/';

  constructor(private http: HttpClient) { }


  public getPedidoID(id: any): Observable<any> {
    return this.http.get(this.API_VISUALIZAR + id);
  }
  public getEventosServicio(evento:number,servicio:number):Observable<any>{
    return this.http.get(this.GET_EVENTO_BY_SERVICIOS + `${evento}` + '/' + `${servicio}`);
  }
  public putPedido(estado: number, fecha: string, hora: string, id: number): Observable<any> {
    return this.http.put(this.API_EDITARPEDIDO, {
      "EP_Cod": estado,
      "fecha": fecha,
      "hora": hora,
      "id": id
    })
  }


  // public postPedido(Nombre: string, ExS:number,doc: string, fechaCreate: string, fechaEvent: string, horaEvent: string, CodEmp: number, Direccion: string): Observable<any> {
  //   return this.http.post<AddPedido>(this.API_AGREGARPEDIDO + "/gestionar-pedido", AddPedido);
  // }

  public postPedidos(Nombre: string, ExS: number, doc: string, fechaCreate: string, fechaEvent: string, horaEvent: string, CodEmp: number, Direccion: string, Observacion:string) {
    return this.http.post(this.API_AGREGARPEDIDO, {
      Nombre: Nombre,
      ExS: ExS,
      doc: doc,
      fechaCreate: fechaCreate,
      fechaEvent: fechaEvent,
      horaEvent: horaEvent,
      CodEmp: CodEmp,
      Direccion: Direccion,
      Observacion:Observacion,
    })
  }

}