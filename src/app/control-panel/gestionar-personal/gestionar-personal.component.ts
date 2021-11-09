import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PersonalService } from './service/personal.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PersonalListar } from './model/personal.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

interface Cargo {
  ID: string;
  Nombre: string;
}


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

  cargos: Cargo[]=[];
  dataSource!: MatTableDataSource<any>;
  form = new FormGroup({
    cargoF: new FormControl(null, Validators.required)
  });
  
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
  getCargos() {
    this.service.getCargos().subscribe(
      response =>{
        this.cargos=response;
        console.log(response);
        console.log(this.cargos);
        
    });
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  open(content:any,ID:Number) {
    this.modalService.open(content);
    this.getEmpleadoView(ID);
    this.getCargos();
  }
  getEmpleadoView(ID:Number) {
    
    this.service.getEmpleadoID(ID).subscribe(
      response =>{
        this.service.selectListar=response;
    });
  }
}
