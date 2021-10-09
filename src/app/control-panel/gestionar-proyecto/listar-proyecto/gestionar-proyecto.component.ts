import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProyectoService } from 'src/app/control-panel/gestionar-proyecto/service/proyecto.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-gestionar-proyecto',
  templateUrl: './gestionar-proyecto.component.html',
  styleUrls: ['./gestionar-proyecto.component.css'],
})
export class GestionarProyectoComponent implements OnInit {

  displayedColumns = ['PK_Pro_Cod','Pro_Nombre','EPro_Fecha_Inicio_Edicion','actions'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator; 
  @ViewChild(MatSort) matSort! : MatSort;


  constructor(private service: ProyectoService) {}


  ngOnInit(): void {
    this.getProyecto();
  }
  getProyecto() {
    this.service.getAllNombres().subscribe((response:any) =>{
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })
  }
  getRecord(nombre: any){
    alert(nombre);
  }
  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }
}
