import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-servicios',
  templateUrl: './detalle-servicios.component.html',
  styleUrls: ['./detalle-servicios.component.css']
})
export class DetalleServiciosComponent implements OnInit {
  serviciosf = [];
  @Input() ID: number=0;
  @Input() Nombre: string='';

  ngOnInit(): void {
  }


}
