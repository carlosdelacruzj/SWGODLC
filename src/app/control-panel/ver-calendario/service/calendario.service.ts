import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
 

  private API_PRUEBA =
  "https://tp2021database.herokuapp.com/api-doc/#/proyecto/get_proyecto_consulta_getAllEventosByMonth__mes_";
  constructor(private http: HttpClient) {}

  public getAllEventoByMonth(): Observable<any> {
    return this.http.get(this.API_PRUEBA);
  }
}
