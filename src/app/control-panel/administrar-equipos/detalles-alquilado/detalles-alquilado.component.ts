import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdministrarEquiposService } from '../service/service.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import {formatDate } from '@angular/common';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalles-alquilado',
  templateUrl: './detalles-alquilado.component.html',
  styleUrls: ['./detalles-alquilado.component.css']
})
export class DetallesAlquiladoComponent implements OnInit {
  @ViewChild(MatSort) matSort!: MatSort;

  @Input() id=0;
  @Input() serie='';

  hoy: number = Date.now();
  sHoy = '';

  dataSource!: MatTableDataSource<any>;

  columnsToDisplay = ['tipoEquipo','marca','modelo','serie','fechaEntrada','fechaSalida','estado','proyectoAsig','empleadoAsig'];

  constructor(public service: AdministrarEquiposService, config: NgbModalConfig, private modalService: NgbModal) {
      config.backdrop = 'static';
      config.keyboard = false;
      this.sHoy = formatDate(this.hoy,'yyyy-MM-dd','en-US');
   }

  ngOnInit(): void {
    this.getDetalleEquipoAlquilado();
  }
  getDetalleEquipoAlquilado(){
    this.service.getDetallesAlquilado(this.id).subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.matSort;
    });
  }
  // Modal para actualizar el equipo
  open(content:any) {
    this.modalService.open(content);
    //this.service.registerEquipo.fecha = this.sHoy;
    //this.service.
  }
  //Actualizar equipo
  updateAlquilado(equipoForm: NgForm){

  }
}
