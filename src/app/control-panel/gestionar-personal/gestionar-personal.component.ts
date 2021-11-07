import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PersonalService } from './service/personal.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { PersonalListar } from './model/personal.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-gestionar-personal',
  templateUrl: './gestionar-personal.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./gestionar-personal.component.css']
  
})
export class GestionarPersonalComponent implements OnInit {
 
  columnsToDisplay = [
        'ID',
        'Nombres y apellidos',
        'Cargo',
        'DNI',
        'Estado',
        'Acciones'
  ];
  dataSource!: MatTableDataSource<any>;
  personal=[];
  id2 =0;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    public service: PersonalService,
    config: NgbModalConfig, private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  
  ngOnInit(): void {
    this.getEmpleados();
   
  }

  getEmpleados() {
    this.service.getEmpleados().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  open(content:any,p:PersonalListar) {
    this.modalService.open(content);
    this.getEmpleadoView(p);
  }
  getEmpleadoView(p:PersonalListar) {
    
    this.service.selectListar = p;
    console.log(p.Correo);

    
  }
}
