import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventoAllServiciosService } from './../../service/detalle-servicios.service';
import { EventoServicioService } from '../../service/evento-servicio.service';

@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styleUrls: ['./editar-servicio.component.css']
})
export class EditarServicioComponent implements OnInit {
  servicio = [];
  data: any;
  

  constructor(
    public service5: EventoAllServiciosService,
    public service: EventoAllServiciosService,
    public service4: EventoAllServiciosService
  ) { }

  ngOnInit(): void {
  }

  addServicio(ServicioForm: NgForm) {
    let data = {
      evento: this.data,
      servicio: ServicioForm.value.servicio,
      precio: ServicioForm.value.precio,
      titulo: ServicioForm.value.titulo,
      descripcion: ServicioForm.value.descripcion
    };
    this.service4.registro(data).subscribe(
      (res) => { console.log("DATA: ", res)},
      (err) => console.error(err)
    );
  }


  editarServicio(ServicioForm: NgForm){
    let data = {
      evento: ServicioForm.value.Evento,
      servicio: ServicioForm.value.Servicio,
      precio: ServicioForm.value.Precio,
      titulo: ServicioForm.value.Titulo,
      descripcion: ServicioForm.value.Descripcion
    };
    this.service4.registro(data).subscribe(
      (res) => { console.log("DATA: ", res)},
      (err) => console.error(err)
    );
  }

}
