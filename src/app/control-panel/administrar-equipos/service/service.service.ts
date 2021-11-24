import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { countEstadosPorModelo, EquipoAll, EquipoAllGroup, EquipoAllMARCA, EquipoAllMarcaTipo, EquipoRegistrar, EquipoTipoAll, EquipoTipoAllID, EquipoTipoAllIDMARCAMODELO, existeSerie, updateStatus } from '../models/modeloprueba.model';

@Injectable({
  providedIn: 'root'
})
export class AdministrarEquiposService {
  selectTipoAll: EquipoTipoAll = {
    PK_TE_Cod: 0,
    TE_Nombre: ''
  };

  selectAll: EquipoAll = {
    Nombre: '',
    Marca: '',
    Modelo: '',
    Estado: ''
  };

  selectTipoAllID: EquipoTipoAllID = {
    Codigo: '',
    Marca: '',
    Modelo: '',
    Estado: ''
  };

  selectTipoAllIDMARCAMODELO: EquipoTipoAllIDMARCAMODELO = {
    Equipo: '',
    Marca: '',
    Modelo: '',
    Serie: '',
    Fecha: '',
    Estado: ''
  };

  selectGroup: EquipoAllGroup = {
    Equipo: '',
    Marca: '',
    Modelo: '',
    IdEquipo: 0,
    IdMarca: 0,
    IdModelo: 0,
    Cantidad: 0
  };

  selectAllMarca: EquipoAllMARCA = {
    Id: 0,
    Nombre: ''
  }

  selectMarcaTipo: EquipoAllMarcaTipo = {
    Id: 0,
    Nombre: ''
  }

  registerEquipo: EquipoRegistrar = {
    idEquipo: '',
    fecha: '',
    modelo: 0
  };

  cEstadosModelo: countEstadosPorModelo = {
    Disponible: 0,
    EnUso: 0,
    Mantenimiento: 0,
    NoDisponible: 0
  }

  putStatus: updateStatus = {
    idEquipo: ''
  }

  esSerie: existeSerie = {
    existe: 0
  }

  private EQUIPO_TIPOALL =
    'https://tp2021database.herokuapp.com/equipo/consulta/getAllTipoEquipo';

  private EQUIPO_ALL =
    'https://tp2021database.herokuapp.com/equipo/consulta/getAllEquipo';

  private EQUIPO_TIPOALLID =
    'https://tp2021database.herokuapp.com/equipo/consulta/getByTipoEquipo/';

  private EQUIPO_TIPOIDMARCAMODELO =
    'https://tp2021database.herokuapp.com/equipo/consulta/getAllEquiposByIdGroup'; //FECHA?

  private EQUIPO_ALLGROUP =
    'https://tp2021database.herokuapp.com/equipo/consulta/getAllEquiposGroup';

  private EQUIPO_ALLMARCA =
    'https://tp2021database.herokuapp.com/equipo/consulta/getAllMarca';

  private EQUIPO_ALLMODELO =
    'https://tp2021database.herokuapp.com/equipo/consulta/getAllModelo/';

  private REGISTER_EQUIPO =
    'https://tp2021database.herokuapp.com/equipo/registro/postEquipo';

  private COUNT_ESTADOS =
    'https://tp2021database.herokuapp.com/equipo/consulta/getAllContadoresEquiposEstado';

  private PUT_STATUS =
    'https://tp2021database.herokuapp.com/equipo/actualiza/putEstadoEquipo';

  private EXI_SERIE =
    'https://tp2021database.herokuapp.com/equipo/consulta/getExistEquipo'

  constructor(private http: HttpClient) {}

  // definir los gets
  public getAll(): Observable<any> {
    return this.http.get(this.EQUIPO_ALL);
  }
  // TRAER DATOS | ( EQUIPO, MARCA, MODELO)
  public getAllGroup(): Observable<any> {
    return this.http.get(this.EQUIPO_ALLGROUP);
  }
  // POR TIPO DE EQUIPO
  public getTipoEquipo(): Observable<any> {
    return this.http.get(this.EQUIPO_TIPOALL);
  }
  // POR MARCA DE EQUIPO
  public getMarcaEquipo(): Observable<any> {
    return this.http.get(this.EQUIPO_ALLMARCA);
  }
  // POR EQUIPO MARCA MODELO https://tp2021database.herokuapp.com/equipo/consulta/getAllEquiposByIdGroup/1/1/1
  public getEquipoMarcaModelo(idEquipo: number,idMarca:number,idModelo:number): Observable<any> {
    return this.http.get(`${this.EQUIPO_TIPOIDMARCAMODELO}/${idEquipo}/${idMarca}/${idModelo}`);
  }
  //Para sacar la leyenda de estados recibe el ID del modelo
  public getCountEstados(idModelo:number): Observable<any> {
    return this.http.get(`${this.COUNT_ESTADOS}/${idModelo}`);
  }
  //Actualizar estado por serie=idequipo, se envia cambia de estado entre disponible o mantenimieto
  public updateStatus(idEquipo: string): Observable<any> {
    const body = {
      idEquipo
    };
    return this.http.put(`${this.PUT_STATUS}`,body);
  }
  //Existe serie o no
  public getExisteSerie(idEquipo: string): Observable<any> {
    return this.http.get(`${this.EXI_SERIE}/${idEquipo}`);
  }
  //registro de un nuevo equipo uwu
  public rEquipo(data:any): Observable<any> {
    return this.http.post(this.REGISTER_EQUIPO,data);
  }
}
