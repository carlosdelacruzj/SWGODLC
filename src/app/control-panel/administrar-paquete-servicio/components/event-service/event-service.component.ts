import { Component, Input, OnInit } from '@angular/core';
import { EventoServicioService } from '../../service/evento-servicio.service';

@Component({
  selector: 'app-event-service',
  templateUrl: './event-service.component.html',
  styleUrls: ['./event-service.component.css']
})
export class EventServiceComponent implements OnInit {

  servicios = [];
  columnsToDisplay = ['evento','precio', 'descripcion','titulo','acciones']
  // @Input() evento: string='';
  // @Input() servicio: string='';
  // @Input() precio: string='';
  // @Input() descripcion: string='';
  // @Input() titulo: string='';
  @Input() id: number = 0;
  constructor(private service: EventoServicioService) { }

  ngOnInit(): void {
    console.log("EVENT SERVICE  ID: " + this.id);
    /* 
      1. Obtengo el id
      2. llamo a mi servicio detalle con el id que obtengo
      3. Muestras en la tabla la de tu servicio
    */
    this.getServicios();
  }
  getServicios() {
    this.service.api(this.id).subscribe((response) => {
      console.log("RESPONSE> " + response);
      this.servicios = response;
  });

  

  }
  

}
