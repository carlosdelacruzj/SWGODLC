import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PersonalService } from './service/personal.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
  id2 =0;
  dataSource!: MatTableDataSource<any>;

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

  getEmpleadoID(ID: number) {
    this.service.getEmpleadoID(ID).subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }
  open(content:any) {
    this.modalService.open(content);
  }
}
