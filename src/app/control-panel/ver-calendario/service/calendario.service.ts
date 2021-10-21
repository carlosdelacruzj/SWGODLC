import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
       
  private API_PRUEBA =
  "https://tp2021database.herokuapp.com/proyecto/consulta/getAllEventosProyectos";
  constructor(private http: HttpClient) {}

  public getAllEventos(): Promise<any> {
    return this.http.get(this.API_PRUEBA).toPromise();
    //HOLA CARLOS NO SE POR QUE NO SE PUSHEA BIEN
  }
}
