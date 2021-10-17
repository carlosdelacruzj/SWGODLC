import { Component, Input, OnInit } from '@angular/core';
import { ProyectoService } from '../service/proyecto.service';
import { FormGroup, NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Proyecto } from '../model/proyecto.model';
import { PedidoService } from '../service/pedido.service';
import { Pedido } from '../model/pedido.model';
import { DateAdapter } from '@angular/material/core';
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
  fechaActual='';
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Boda' },
    { value: 'pizza-1', viewValue: 'Matrimonio' },
    { value: 'tacos-2', viewValue: '' },
  ];
  constructor(
    public service: ProyectoService,
    public service2: PedidoService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('es');
  }
  asignarFechaActual() {
    var today = new Date();
    var hoy;
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    hoy = dd + '/' + mm + '/' + yyyy;
    this.fechaActual = hoy;
  }
  ngOnInit(): void {
    this.asignarFechaActual();
    console.log(this.fechaActual);
  }
  getProyecto1(proyecto: Proyecto) {
    this.service.selectProyecto = proyecto;
  }
  getPedido1(pedido: Pedido) {
    this.service2.selectPedido = pedido;
  }
  
  onSubmit(ProyectoForm: NgForm){
    let data = {
      ID: ProyectoForm.value.ID,
      Evento: ProyectoForm.value.Evento,
      fechaActual: ProyectoForm.value.fechaActual
    };
  }
}
