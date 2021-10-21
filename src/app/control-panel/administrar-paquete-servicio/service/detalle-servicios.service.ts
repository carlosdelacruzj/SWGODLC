import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detalle } from '../model/detalle-servicios.model';

@Injectable({
    providedIn: 'root'
  })
  export class EventoAllServiciosService {
  
      selectProyecto: Detalle = {
      ID:0,
      servicio: 0,
      evento: 0,
      precio: 0,
      descripcion: "",
      titulo: ""
    };
  

    private API_PRUEBA = 
    'https://tp2021database.herokuapp.com/servicio/consulta/getAllServicios';
    constructor(private http: HttpClient) {}
    
    public registro(data:any): Observable<any> {

      console.log(data);
  
      const url = 'https://tp2021database.herokuapp.com/eventos_servicios/registro/postEventoxServicio';
      return this.http.post(url, data);
    }

    public getAllNombresID(id: any): Observable<any> {
      return this.http.get('https://tp2021database.herokuapp.com//eventos_servicios/actualiza/putByIdEventoxServicio/'+ id);
    }
    


    public getAllServicios(): Observable<any> {
      return this.http.get(this.API_PRUEBA);
    }
  }