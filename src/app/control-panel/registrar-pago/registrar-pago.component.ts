import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
];
@Component({
  selector: 'app-registrar-pago',
  templateUrl: './registrar-pago.component.html',
  styleUrls: ['./registrar-pago.component.css'],
})
export class RegistrarPagoComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Proyecto', 'Fecha', 'Editar'];
  displayedColumns2: string[] = ['Codigo', 'Fecha', 'Monto', 'Imagen'];
  dataSource = ELEMENT_DATA;
  costo = 's./12.00';
  estado = 'Aceptado';

  constructor() {}

  ngOnInit(): void {}
}
