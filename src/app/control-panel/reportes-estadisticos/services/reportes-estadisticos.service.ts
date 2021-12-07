import { Injectable, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipos,Proyecto } from '../models/reportes-estadisticos.model';

@Injectable({
  providedIn: 'root',
})
export class ReportesEstadisticos {
  constructor(private http: HttpClient) {}

  private EQUIPOS =
    'https://tp2021database.herokuapp.com/dashboard/consulta/getReporteListaEquipo';

  private PROYECTOS = 'https://tp2021database.herokuapp.com/dashboard/consulta/getReporteProyectosXMes'

  public getEquipos(): Observable<Equipos[]> {
    return this.http.get<Equipos[]>(this.EQUIPOS);
  }
  public getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.PROYECTOS);
  }
}
