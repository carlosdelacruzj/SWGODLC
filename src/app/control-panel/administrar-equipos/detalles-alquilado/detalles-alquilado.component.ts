import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdministrarEquiposService } from '../service/service.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

interface Proyecto {
  ID: number;
  Nombre: string;
  Fecha: string;
  Servicio: string;
  Evento: string;
  Estado: number;
}

interface Empleado {
  ID: number;
  Nombre: string;
  Apellido: string;
  Car_Nombre: string;
  DNI: string;
  Celular: string;
  Correo: string;
  Autonomo: number;
  Cargo: string;
  Estado: string;
}

@Component({
  selector: 'app-detalles-alquilado',
  templateUrl: './detalles-alquilado.component.html',
  styleUrls: ['./detalles-alquilado.component.css'],
})
export class DetallesAlquiladoComponent implements OnInit {
  @ViewChild(MatSort) matSort!: MatSort;

  @Input() id = 0;
  @Input() serie = '';

  proyecto: Proyecto[] = [];
  empleado: Empleado[] = [];

  hoy: number = Date.now();
  sHoy = '';

  dataSource!: MatTableDataSource<any>;

  columnsToDisplay = [
    'tipoEquipo',
    'marca',
    'modelo',
    'serie',
    'fechaEntrada',
    'fechaSalida',
    'estado',
    'proyectoAsig',
    'empleadoAsig',
  ];

  constructor(
    public service: AdministrarEquiposService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.sHoy = formatDate(this.hoy, 'yyyy-MM-dd', 'en-US');
  }

  ngOnInit(): void {
    this.getDetalleEquipoAlquilado();
  }
  getDetalleEquipoAlquilado() {
    this.service.getDetallesAlquilado(this.id).subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.matSort;
    });
  }
  getEmpleados() {
    this.service.getAllEmpleados().subscribe((response) => {
      this.empleado = response;
    });
  }
  getProyectos() {
    this.service.getAllProyectos().subscribe((response) => {
      this.proyecto = response;
    });
  }
  // Modal para actualizar el equipo
  open(content: any) {
    this.modalService.open(content);
    this.getProyectos();
    this.getEmpleados();
    this.service.upAlquilados.codigo = this.id;
  }

  clear(equipoForm: NgForm) {
    equipoForm.reset();
  }
  //Actualizar equipo
  updateAlquilado(equipoForm: NgForm) {
    swal
        .fire({
          title: 'Esta seguro del cambio?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, actualizar ahora!',
          cancelButtonText: 'Cancelar',
        })
        .then((options) => {
          if (options.isConfirmed) {
            swal.fire({
              text: 'Cambio exitoso',
              icon: 'success',
              showCancelButton: false,
              customClass: {
                confirmButton: 'btn btn-success',
              },
              buttonsStyling: false,
            });
            let data = {
              proyecto: equipoForm.value.nProyecto,
              fechaSalida: equipoForm.value.fechaSalida,
              empleado: equipoForm.value.nEmpleado,
              codigo: equipoForm.value.ID,
            };
            this.service.rEquipoA(data).subscribe(
              (res) => {
                this.clear(equipoForm);
                this.getDetalleEquipoAlquilado();
              },
              (err) => {
                console.error(err);
                swal.fire({
                  text: 'Ocurrió un error, volver a intentar.',
                  icon: 'warning',
                  showCancelButton: false,
                  customClass: {
                    confirmButton: 'btn btn-warning',
                  },
                  buttonsStyling: false,
                });
              }
            );
          }
        });
  }
}
