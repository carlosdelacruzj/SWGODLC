import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detalle } from '../model/detalle-servicios.model';

@Injectable({
    providedIn: 'root'
  })
  export class EventoAllServiciosService {
  
      selectProyecto: Detalle = {
      ID: 0,
      Nombre: ''
    };
  
    private API_PRUEBA = 
    'https://tp2021database.herokuapp.com/servicio/consulta/getAllServicios';
    constructor(private http: HttpClient) {}
    
    public getAllServicios(): Observable<any> {
      return this.http.get(this.API_PRUEBA);
    }
  }