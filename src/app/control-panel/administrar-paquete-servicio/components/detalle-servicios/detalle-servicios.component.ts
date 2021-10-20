import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventoAllServiciosService } from '../../service/detalle-servicios.service';
import { EventoServicioService } from '../../service/evento-servicio.service';

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
    private service2: EventoServicioService
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
      servicio_precio: ServicioForm.value.precio,
      servicio_pedido: ServicioForm.value.titulo,
      fecha_inicio_edicion: ServicioForm.value.descripcion
    };
    console.log(data);
    this.service.registro(data).subscribe(
      (res) => { console.log("DATA: ", res)},
      (err) => console.error(err)
    );
  }

}
