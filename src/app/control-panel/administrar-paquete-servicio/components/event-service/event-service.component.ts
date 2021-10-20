import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EventoServicioService } from '../../service/evento-servicio.service';
import { Detalle } from '../../model/detalle-servicios.model';
import { EventoAllServiciosService } from './../../service/detalle-servicios.service';

@Component({
  selector: 'app-event-service',
  templateUrl: './event-service.component.html',
  styleUrls: ['./event-service.component.css']
})
export class EventServiceComponent implements OnInit {

  servicios = [];
  columnsToDisplay = ['evento','precio', 'descripcion','titulo','acciones']
  dataSource2! : MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  // @Input() evento: string='';
  // @Input() servicio: string='';
  // @Input() precio: string='';
  // @Input() descripcion: string='';
  // @Input() titulo: string='';
  @Input() id: number = 0;
  constructor(private service: EventoServicioService, private service3: EventoAllServiciosService, public service4: EventoAllServiciosService) { }

  ngOnInit(): void {
    console.log("EVENT SERVICE  ID: " + this.id);
    /* 
      1. Obtengo el id
      2. llamo a mi servicio detalle con el id que obtengo
      3. Muestras en la tabla la de tu servicio
    */
    this.getServicio();
  }
  getServicio() {
      this.service.api(this.id).subscribe((response:any) => {
      console.log("RESPONSE> " + response);
      this.servicios = response;
      this.dataSource2 = new MatTableDataSource(response);
      this.dataSource2.paginator = this.paginator;
      this.dataSource2.sort = this.matSort;
  });
  }

  getServicio1(servicio: Detalle) {
    this.service3.selectProyecto = servicio;
    console.log(this.service3.selectProyecto);
  }

  filterData2($event: any) {
    this.dataSource2.filter = $event.target.value;
  }

  getServicioID(valor: number) {
    this.service4.getAllNombresID(valor).subscribe((responde) => {
      this.service4.selectProyecto = responde[0];
      console.log(this.service4.selectProyecto);
    });
  }
  

}
