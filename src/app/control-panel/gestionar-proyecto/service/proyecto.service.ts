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
    Pro_Enlace: ''
  };

  private API_PRUEBA =
    'https://tp2021database.herokuapp.com/proyecto/consulta/getAllProyecto';
  constructor(private http: HttpClient) {}

  public getAllNombres(): Observable<any> {
    return this.http.get(this.API_PRUEBA);
  }
}
