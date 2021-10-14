import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PaqueteServicioService } from 'src/app/control-panel/administrar-paquete-servicio/service/paquete-servicio.service';
import { EventoServicioService } from 'src/app/control-panel/administrar-paquete-servicio/service/evento-servicio.service';
import { EventoAllServiciosService } from 'src/app/control-panel/administrar-paquete-servicio/service/detalle-servicios.service';
import { DetalleServiciosComponent } from './components/detalle-servicios/detalle-servicios.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-administrar-paquete-servicio',
  templateUrl: './administrar-paquete-servicio.component.html',
  styleUrls: ['./administrar-paquete-servicio.component.css']
})
export class AdministrarPaqueteServicioComponent implements OnInit {

  base: boolean = true;
  servicioId: number = 0;
  paquete: any[] = [];
  servicio: any[] = [];
  serviciosf: any[] = [];

  columnsToDisplay = ['ID','nombre','enlace']
  constructor(private service: PaqueteServicioService,private service2: EventoServicioService, public dialog: MatDialog, private allserivicios: EventoAllServiciosService) {}

  ngOnInit(): void {
    this.getPaquete();
    this.getServicio();
    this.getAllService();
    //this.postDetalle();
    console.log(this.paquete);
  }

  getPaquete() {
    this.service.getAllNombres().subscribe((response) => {
      this.paquete = response;
      console.log(this.paquete);
    });
  }

  getServicio() {
    this.service2.getAllNombres2().subscribe((response) => {
      this.servicio = response;
      console.log(this.servicio);
    });
  }

  openDialog() {
    const dialogPaq = this.dialog.open(DetalleServiciosComponent);
  }

  getAllService() {
    this.allserivicios.getAllServicios().subscribe((response) => {
      this.serviciosf = response.servicios;
      console.log(this.serviciosf)
    });
  }


  prueba(event: number){  
    this.base = false; this.servicioId = event; console.log("Id: ", this.servicioId)
  }

}
