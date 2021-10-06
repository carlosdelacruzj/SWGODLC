import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProyectoService } from 'src/app/control-panel/gestionar-proyecto/service/proyecto.service';


@Component({
  selector: 'app-gestionar-proyecto',
  templateUrl: './gestionar-proyecto.component.html',
  styleUrls: ['./gestionar-proyecto.component.css'],
})
export class GestionarProyectoComponent implements OnInit {
  proyectos = [];
  columnsToDisplay = ['ID','nombre', 'fecha'];
  pageSize = 5;
  desde: number = 0;
  hasta: number = 5;
  constructor(private service: ProyectoService) {}

  cambiarpagina(e: PageEvent) {
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  ngOnInit(): void {
    this.getProyecto();
  }
  getProyecto() {
    this.service.getAllNombres().subscribe((response) => {
      this.proyectos = response;
    });
  }
}
