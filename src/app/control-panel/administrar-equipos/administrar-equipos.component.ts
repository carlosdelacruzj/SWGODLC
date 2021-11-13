import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EquipoAll, EquipoAllGroup } from './models/modeloprueba.model';
import { AdministrarEquiposService } from './service/service.service';

interface TEquipo {
  PK_TE_Cod: number;
  TE_Nombre: string;
}

interface MEquipo {
  Id: number;
  Nombre: string;
}

@Component({
  selector: 'app-administrar-equipos',
  templateUrl: './administrar-equipos.component.html',
  styleUrls: ['./administrar-equipos.component.css']
})
export class AdministrarEquiposComponent implements OnInit {
  @ViewChild(MatSort) matSort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;
  dataSource!: MatTableDataSource<any>;
  equipos: TEquipo[]=[];
  marcas: MEquipo[]=[];
  esPrincipal: boolean=true;
  idEquipo: number=0;
  idMarca: number=0;
  idModelo: number=0;

  columnsToDisplay = ['equipo','marca','modelo','ver'];

  constructor(private service: AdministrarEquiposService) {}

  ngOnInit(): void {
    this.getEquipos();
    this.getTipoEquipos();
    this.getMarcaEquipos();
  }
  //Muestra de tabla
  getEquipos() {
    this.service.getAllGroup().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }
  //FiLTROS
  getTipoEquipos() {
    this.service.getTipoEquipo().subscribe(
      response =>{
        this.equipos=response;
    });
  }
  getMarcaEquipos() {
    this.service.getMarcaEquipo().subscribe(
      response =>{
        this.marcas=response;
    });
  }
  // FILTRO GENERAL
  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  verDetalle(idEquipo: number, idMarca: number, idModelo:number){
    this.esPrincipal = false;
    this.idEquipo = idEquipo;
    this.idMarca = idMarca;
    this.idModelo = idModelo;
  }

}
