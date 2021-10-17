import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  selectProyecto: Proyecto = {
    PK_Pro_Cod: 0,
    Pro_Nombre: '',
    FK_P_Cod: 0,
    EPro_Fecha_Inicio_Edicion: '',
    Pro_Fecha_Fin_Edicion: '',
    Pro_Revision_Edicion: 0,
    Pro_Revision_Multimedia: 0,
    Pro_Enlace: '',
    Pro_Asignado: 0,
    FK_ESPro_Cod: 0,
    Pro_Observacion: '',
  };

  proyecto: Proyecto[] = [];
  private API_PRUEBA = 'https://tp2021database.herokuapp.com/proyecto/';
  constructor(private http: HttpClient) {}

  public getAllNombres(): Observable<any> {
    return this.http.get(this.API_PRUEBA + 'consulta/getAllProyecto');
  }

  //  registro(data:any): Observable<any> {
  //   const fd = new FormData();
  //   fd.append('proyecto_nombre', data.proyecto_nombre);
  //   fd.append('codigo_pedido', data.codigo_pedido);
  //   fd.append('fecha_inicio_edicion', data.fecha_inicio_edicion);
  //   return this.http.post('https://tp2021database.herokuapp.com/proyecto/registro​/postProyecto', fd);
  // }

  registro(data: any) {
    const headers = { 'Content-Type': 'application/json'};
    return this.http.post(this.API_PRUEBA + 'registro​/postProyecto', data, {headers} );
  }


  public postProyectos(
    proyecto_nombre: string,
    codigo_pedido: number,
    fecha_inicio_edicion: string
  ) {
    this.http
      .post(this.API_PRUEBA + 'registro​/postProyecto' , {
        proyecto_nombre: proyecto_nombre,
        codigo_pedido: codigo_pedido,
        fecha_inicio_edicion: fecha_inicio_edicion,
      })
      .subscribe(
        (data) => {},
        (response) => {},
        () => {}
      );
  }
}
