import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/visualizar.model';
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

  private API_VISUALIZAR =
    'https://tp2021database.herokuapp.com/pedido/consulta/getByIDPedido/';
  constructor(private http: HttpClient) { }

  public getPedidoID(id: any): Observable<any> {
    return this.http.get(this.API_VISUALIZAR + id)
  }

}
