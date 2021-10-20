import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventoAllServiciosService } from '../../service/detalle-servicios.service';
import { EventoServicioService } from '../../service/evento-servicio.service';
import { EventServiceComponent } from '../event-service/event-service.component';


interface sServicios {
  ID: number;
  Nombre: string;
}

@Component({
  selector: 'app-detalle-servicios',
  templateUrl: './detalle-servicios.component.html',
  styleUrls: ['./detalle-servicios.component.css']
})
export class DetalleServiciosComponent implements OnInit {
  serviciosf = [];
  @Input() ID: number=0;
  @Input() Nombre: string='';

  

  sServicio: sServicios[] = [];

  constructor(
    public service: EventoAllServiciosService,
    private service2: EventoServicioService,
    public service4: EventoAllServiciosService
  ) {}


  ngOnInit(): void {
    this.getSelect();
  }
  
  getSelect(){
    this.service.getAllServicios().subscribe(
      res =>{this.sServicio= res;
      },err => console.error(err)
    )}
  
  addServicio(ServicioForm: NgForm) {
    let data = {
      evento:1, //COLOCAR EL ID POR EL EVENTO A REGISTRAR
      servicio: ServicioForm.value.servicio,
      precio: ServicioForm.value.precio,
      titulo: ServicioForm.value.titulo,
      descripcion: ServicioForm.value.descripcion
    };
    this.service.registro(data).subscribe(
      (res) => { console.log("DATA: ", res)},
      (err) => console.error(err)
    );
  }

}
