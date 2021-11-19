import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { FormGroup, NgForm, NgModel } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../model/cliente.model';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  constructor(public service: ClienteService){ }

  ngOnInit(): void {
  }

  addCliente(ClienteForm: NgForm) {
    let data = {
      cliente_nombre: ClienteForm.value.nombre,
      cliente_apellido: ClienteForm.value.apellido,
      cliente_correo: ClienteForm.value.correo,
      cliente_numDoc: ClienteForm.value.numDoc,
      cliente_celular: ClienteForm.value.celular,
      cliente_direccion: ClienteForm.value.direccion,
    };
    console.log(data);
    this.service.addCliente(data).subscribe(
      (res) => { console.log("DATA: ", res)},
      (err) => console.error(err)
    );
  }
}
