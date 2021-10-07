import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PaqueteServicioService } from 'src/app/control-panel/administrar-paquete-servicio/service/paquete-servicio.service';

@Component({
  selector: 'app-administrar-paquete-servicio',
  templateUrl: './administrar-paquete-servicio.component.html',
  styleUrls: ['./administrar-paquete-servicio.component.css']
})
export class AdministrarPaqueteServicioComponent implements OnInit {

  base: boolean = true;
  paquete: any[] = [];
  columnsToDisplay = ['ID','nombre','enlace']
  constructor(private service: PaqueteServicioService) {}

  ngOnInit(): void {
    this.getPaquete();
    console.log(this.paquete);
  }

  getPaquete() {
    this.service.getAllNombres().subscribe((response) => {
      this.paquete = response;
      console.log(this.paquete);
    });
  }

  prueba(event: number){  
    if(event === 1) this.base = false; console.log("Id: ", event)
    if(event === 2) console.log("no hay data");
  }

}
