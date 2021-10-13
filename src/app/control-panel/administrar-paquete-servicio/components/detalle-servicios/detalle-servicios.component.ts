import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-servicios',
  templateUrl: './detalle-servicios.component.html',
  styleUrls: ['./detalle-servicios.component.css']
})
export class DetalleServiciosComponent implements OnInit {
  servicios = [];
  columnsToDisplay = ['ID','nombre', 'fecha']
  @Input() titulo: string='';
  @Input() servicio: string='';
  @Input() precio: string='';
  @Input() descripcion: string='';
  @Input() imagen: string='';
  @Input() id: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
