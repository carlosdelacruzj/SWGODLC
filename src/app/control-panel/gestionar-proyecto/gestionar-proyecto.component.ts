import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/control-panel/gestionar-proyecto/service/proyecto.service';

@Component({
  selector: 'app-gestionar-proyecto',
  templateUrl: './gestionar-proyecto.component.html',
  styleUrls: ['./gestionar-proyecto.component.css'],
})
export class GestionarProyectoComponent implements OnInit {
  proyectos = [];
  columnsToDisplay = ['ID','name', 'age']
  constructor(private service: ProyectoService) {}

  ngOnInit(): void {
    this.getProyecto();
  }
  getProyecto() {
    this.service.getAllNombres().subscribe((response) => {
      this.proyectos = response;

      console.log(this.proyectos);
    });
  }
}
