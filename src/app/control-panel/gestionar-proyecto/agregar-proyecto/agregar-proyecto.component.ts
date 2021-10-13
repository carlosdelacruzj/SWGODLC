import { Component, Input, OnInit } from '@angular/core';
import { ProyectoService } from '../service/proyecto.service';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Proyecto } from '../model/proyecto.model';
import { PedidoService } from '../service/pedido.service';
import { Pedido } from '../model/pedido.model';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css'],
})
export class AgregarProyectoComponent implements OnInit {
  formUser!: FormGroup;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Boda' },
    { value: 'pizza-1', viewValue: 'Matrimonio' },
    { value: 'tacos-2', viewValue: '' },
  ];
  constructor(public service: ProyectoService, public service2: PedidoService) {}

  ngOnInit(): void {
    
  }
  getProyecto1(proyecto :Proyecto) {
    this.service.selectProyecto = proyecto;
}
getPedido1(pedido :Pedido) {
  this.service2.selectPedido = pedido;
}
}
