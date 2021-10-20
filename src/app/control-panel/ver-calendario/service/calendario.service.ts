import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Citacalendario } from '../model/calendario.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
       
  private API_PRUEBA =
  "https://tp2021database.herokuapp.com/proyecto/consulta/getAllEventosProyectos";
  constructor(private http: HttpClient) {}

  public getAllEventos(): Observable<any> {
    return this.http.get(this.API_PRUEBA);
  }
}
