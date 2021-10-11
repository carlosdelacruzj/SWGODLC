import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../model/evento-servicio.model';

@Injectable({
  providedIn: 'root'
})
export class EventoServicioService {

  selectProyecto: Servicio = {
    ID: 0,
    Evento: '',
    Servicio: '',
    Precio: 0,
    Descripcion: '',
    Enlace: ''
  };

  private API_PRUEBA = 
  'https://tp2021database.herokuapp.com/eventos_servicios/consulta/getAllServiciosByEvento/1';
  constructor(private http: HttpClient) {}

  public getAllNombres2(): Observable<any> {
    return this.http.get(this.API_PRUEBA);
  }
}