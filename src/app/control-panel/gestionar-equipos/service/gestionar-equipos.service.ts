import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto, Empleado } from '../model/gestionar-equipos.model';

@Injectable({
  providedIn: 'root',
})
export class GestionarEquipos {
  selectProyecto: Proyecto = {
    PK_Pro_Cod: 0,
    Pro_Nombre: '',
    FK_P_Cod: 0,
    EPro_Fecha_Inicio_Edicion: '',
    Pro_Fecha_Fin_Edicion: '',
    Pro_Revision_Edicion: 0,
    Pro_Revision_Multimedia: 0,
    Pro_Enlace: '',
  };

  selectEmpleado: Empleado = {
    ID: 0,
    Nombre: '',
    Apellido: '',
    Car_Nombre: '',
  };

  private PROYECTOS_ASIGNAR =
    'https://tp2021database.herokuapp.com/proyecto/consulta/getAllAsignarEquipos';

  private PROYECT_ID =
    'https://tp2021database.herokuapp.com/proyecto/consulta/getByIdProyecto/';

  private EMPLEADOS =
    'https://tp2021database.herokuapp.com/empleado/consulta/getAllEmpleados';

  private TIPOS_EQUIPO =
    'https://tp2021database.herokuapp.com/equipo/consulta/getAllTipoEquipo';

  private EQUIPO_ID =
    'https://tp2021database.herokuapp.com/equipo/consulta/getByTipoEquipo/';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(this.PROYECTOS_ASIGNAR);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(this.PROYECT_ID + `${id}`);
  }

  public getEmpleados(): Observable<any> {
    return this.http.get(this.EMPLEADOS);
  }

  public getTiposEquipo(): Observable<any> {
    return this.http.get(this.TIPOS_EQUIPO);
  }

  public getEquipoId(id: number): Observable<any> {
    return this.http.get(this.EQUIPO_ID + `${id}`);
  }
}
