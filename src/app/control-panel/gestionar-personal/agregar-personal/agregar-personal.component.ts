import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonalService } from '../service/personal.service';
 
@Component({
  selector: 'app-agregar-personal',
  templateUrl: './agregar-personal.component.html',
  styleUrls: ['./agregar-personal.component.css']
})
export class AgregarPersonalComponent implements OnInit {

  public data: any;
  empleado = [];

  constructor( public service: PersonalService) { }

  ngOnInit(): void {
  }

  AddEmpleado(EmpleadoForm: NgForm) {
    let data = {
      evento:this.data, 
      
        nombre: EmpleadoForm.value.nombre,
        apellido: EmpleadoForm.value.apellido,
        correo: EmpleadoForm.value.correo,
        celular: EmpleadoForm.value.celular,
        doc: EmpleadoForm.value.doc,
        direccion:EmpleadoForm.value.direccion,
        autonomo: EmpleadoForm.value.autonomo,
        cargo: EmpleadoForm.value.cargo
    };
    this.service.createEmpleado(data).subscribe(
      (res) => { console.log("DATA: ", res);
    },
      (err) => console.error(err)
    );
    
  }

}
