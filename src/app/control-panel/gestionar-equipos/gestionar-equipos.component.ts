import { NgModule, Component, OnInit } from '@angular/core';
import { GestionarEquipos } from './service/gestionar-equipos.service';
import { AsignarEquipos } from './model/gestionar-equipos.model';

@Component({
  selector: 'app-gestionar-equipos',
  templateUrl: './gestionar-equipos.component.html',
  styleUrls: ['./gestionar-equipos.component.css'],
})
export class GestionarEquiposComponent implements OnInit {
  proyectos = [];
  equipos_proyecto = [];
  columnsToDisplay = [
    'nombre',
    'fecha',
    'servicio',
    'evento',
    'estado',
    'asignar',
  ];
  columnsToDisplay2 = ['codigo', 'marca', 'modelo', 'estado'];
  columnsToDisplay3 = [
    'empleado',
    'codequipo',
    'tipoequipo',
    'nombreequipo',
    'eliminar',
  ];
  asignarPersonal = false;
  proyecto = {
    Nombre: '',
  };
  id_proyecto = 0;
  id_empleado = 1;
  id_tipo_equipo = 1;
  empleados: any[] = [];
  tipo_equipos: any[] = [];
  ready_empleados = false;
  ready_proyectos = false;
  asignar_equipo = false;
  equipos = [];
  lista_id: any[] = [];
  cantidad_asigacion = 0;
  constructor(private service: GestionarEquipos) {}

  ngOnInit(): void {
    this.asignarPersonal = false;
    this.ready_proyectos = false;
    this.ready_empleados = false;
    this.asignar_equipo = false;
    this.id_empleado = 1;
    this.id_tipo_equipo = 1;
    this.getProyectos();
    this.getEquiposId(1);
  }

  ngOnChanges(): void {
    this.eliminarAsignacion;
  }

  // GET DATA

  // GET TODOS LOS PROYECTOS
  getProyectos() {
    this.service.getAll().subscribe((data) => {
      this.proyectos = data;
    });
  }

  //GET PROYECTO POR ID
  getProyecto(id: number) {
    this.service.getById(id).subscribe((data) => {
      this.proyecto = {
        Nombre: data[0].Pro_Nombre,
      };
      //GET TODOS LOS EMPLEADOS
      this.service.getEmpleados().subscribe((data) => {
        this.empleados = data;
        this.ready_proyectos = true;
        this.ready_empleados = true;
      });

      //GET EQUIPOS BY PROYECTO ID
      this.service.getEquiposByProyecto(id).subscribe((data) => {
        this.equipos_proyecto = data;
        this.cantidad_asigacion = this.equipos_proyecto.length;
      });
    });
  }

  //GET TIPOS DE EQUIPOS
  getTiposEquipos() {
    this.service.getTiposEquipo().subscribe((data) => {
      this.tipo_equipos = data;
    });
  }

  //GET TIPOS DE EQUIPOS BY ID

  getEquiposId(id: number) {
    this.service.getEquipoId(id).subscribe((data) => {
      this.equipos = data;
    });
  }

  //ABRIR VENTAN PARA ASIGNAR PERSONAL
  ventanaAsignarPersonal(valor: number) {
    this.asignarPersonal = true;
    this.id_proyecto = valor;
    this.getProyecto(valor);
  }

  //CERRAR VENTANA PARA ASIGNAR PERSONAL

  closeAsignarPersonal() {
    this.asignarPersonal = false;
    this.ready_proyectos = false;
    this.ready_empleados = false;
  }

  //ABRIR VENTANA ASIGNAR EQUIPO
  ventanaAsignarEquipo() {
    if (this.id_empleado != 0) {
      this.asignar_equipo = true;
      this.getTiposEquipos();
    }
  }

  //CERRAR VENTANA ASIGNAR EQUIPOS
  closeAsingarEquipo() {
    this.asignar_equipo = false;
  }

  asignarEmpleado(event: number) {
    this.id_empleado = event;
  }

  asignarTipoEquipo(event: number) {
    this.id_tipo_equipo = event;
    this.getEquiposId(event);
  }

  registrarData(id_empleado: number, id_proyecto: number, id_equipo: string) {
    alert(id_proyecto);
    this.service.postEquiposProyectos(id_proyecto, id_empleado, id_equipo);
  }

  eliminarAsignacion(id: number) {
    this.service.deleteAsignacion(id).subscribe({
      next: (data) => {
        this.getProyecto(this.id_proyecto);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
