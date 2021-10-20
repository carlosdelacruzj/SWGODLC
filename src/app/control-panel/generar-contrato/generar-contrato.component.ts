import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ContratoService } from './service/contrato.service';

@Component({
  selector: 'app-generar-contrato',
  templateUrl: './generar-contrato.component.html',
  styleUrls: ['./generar-contrato.component.css']
})
export class GenerarContratoComponent implements OnInit {
  contratos = [];
  columnsToDisplay = ['ID','nombre', 'fecha', 'servicio','evento','cliente', 'estado', 'estadoPago','acciones']
  constructor(private service: ContratoService) {}

  ngOnInit(): void {
    this.getContrato();
  }
  getContrato() {
    this.service.getAllContratos().subscribe((response) => {
      this.contratos = response;
    });
  }

}