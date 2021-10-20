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
  
    private API_POST='https://tp2021database.herokuapp.com/eventos_servicios/registro/postEventoxServicio';

    private API_PRUEBA = 
    'https://tp2021database.herokuapp.com/servicio/consulta/getAllServicios';
    constructor(private http: HttpClient) {}
    


    
    public getAllServicios(): Observable<any> {
      return this.http.get(this.API_PRUEBA);
    }

    public registro(data:any): Observable<any> {
      // const fd = new FormData();
      // fd.append('proyecto_nombre', data.proyecto_nombre);
      // fd.append('codigo_pedido', data.codigo_pedido);
      // fd.append('fecha_inicio_edicion', data.fecha_inicio_edicion);
      console.log('Probando');
      // const data1 = {
      //   "proyecto_nombre": "PRUEBA SIN TOKEN",
      //   "codigo_pedido": 8,
      //   "fecha_inicio_edicion": "2021-10-18"
      // };
      const url = 'https://tp2021database.herokuapp.com/eventos_servicios/registro/postEventoxServicio';
      return this.http.post(url, data);
    }
  }