import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventoAllServiciosService } from '../../service/detalle-servicios.service';

@Component({
  selector: 'app-detalle-servicios',
  templateUrl: './detalle-servicios.component.html',
  styleUrls: ['./detalle-servicios.component.css']
})
export class DetalleServiciosComponent implements OnInit {
  serviciosf = [];
  @Input() ID: number=0;
  @Input() Nombre: string='';
  
  constructor(
    public service: EventoAllServiciosService
  ) {}
  ngOnInit(): void {
  }

  addServicio(ServicioForm: NgForm) {
    let data = {
      proyecto_nombre: ServicioForm.value.Nombre,
      codigo_pedido: ServicioForm.value.ID,
      fecha_inicio_edicion: ServicioForm.value.fechaActual
    };
    console.log(data);
    this.service.registro(data).subscribe(
      (res) => { console.log("DATA: ", res)},
      (err) => console.error(err)
    );
  }

}
