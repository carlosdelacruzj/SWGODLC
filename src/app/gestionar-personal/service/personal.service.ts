import { Injectable, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personal } from '../model/personal.model';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  selectPersonal: Personal = {
        nombre: '',
        apellido: '',
        correo : '',
        contrasena : '',
        celular : '',
        doc : '',
        direccion : '',
        autonomo: 0,
        cargo: 0
  };
  private  URL_API = 'https://tp2021database.herokuapp.com/empleado/';

 
  constructor(private http: HttpClient) {}

  public createEmpleado(data:any): Observable<any> {
    return this.http.post(this.URL_API+'registro/postEmpleado',data);
  }

  public getEmpleados(): Observable<any> {
    return this.http.get(this.URL_API+'consulta/getAllEmpleadosList');
  }

  public getEmpleadoID(id: any): Observable<any> {
    return this.http.get('consulta/getEmpleadoByID/'+ id);
  }
}