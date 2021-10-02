import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  selectProyecto: Proyecto = {
    ID: 0,
    name: '',
    age: 0,
  };

  private API_PRUEBA =
    'https://tp2021database.herokuapp.com/user/consultaUsuarios/3';
  constructor(private http: HttpClient) {}

  public getAllNombres(): Observable<any> {
    return this.http.get(this.API_PRUEBA);
  }
}
