import { Component, Input, OnInit } from '@angular/core';
import { ProyectoService } from '../service/proyecto.service';
import { FormGroup, NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Proyecto } from '../model/proyecto.model';
import { PedidoService } from '../service/pedido.service';
import { Pedido } from '../model/pedido.model';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
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
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  fechaActual = '';
  proyectos = [];
  foods: Food[] = [
    { value: 'steak-0', viewValue: '1' },
    { value: 'pizza-1', viewValue: '2' },
    { value: 'tacos-2', viewValue: '3' },
  ];
  constructor(
    public service: ProyectoService,
    public service2: PedidoService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('es');
  }


  ngOnInit(): void {
  }
 

  addProyecto(ProyectoForm: NgForm) {
    let data = {
      proyecto_nombre: ProyectoForm.value.NombrePedido,
      codigo_pedido: ProyectoForm.value.ID,
      fecha_inicio_edicion: ProyectoForm.value.F_Evento
    };
    console.log(data);
    this.service.registro(data).subscribe(
      (res) => { console.log("DATA: ", res)},
      (err) => console.error(err)
    );
  }

  createPdf(ContratoForm: NgForm){
    var proyecto_nombre = ContratoForm.value.Cliente;
    const  codigo_pedido = ContratoForm.value.ID;
    const  fecha_inicio_edicion = ContratoForm.value.F_Evento;
    const pdfDefinition : any = {
      content: [
        // if you don't need styles, you can use a simple string to define a paragraph
        'Edwin De La Cruz',
    
        // using a { text: '...' } object lets you set styling properties
        { text: 'CONTRATO DE VIDEO', style: 'header' },
    
        // if you set the value of text to an array instead of a string, you'll be able
        // to style any part individually
        {
          text: [
            "Conste por el presente documento, contrato de video que se celebran de una parte Foto Video D' la Cruz representado por el Sr. EDWIN DE LA CRUZ quien en adelante se denominará EL CONTRATADO y de la otra parte ",
            { text: proyecto_nombre, fontSize: 15 },
            ' quien se denominará EL O LA CONTRATANTE.'
            
          ]
        },

        'En los términos siguientes:'
      ],

      styles: {
        header: {
          fontSize: 15,
          alignment: "center",
          bold: true,
          margin: 16
        },
        anotherStyle: {
          italics: true,
          alignment: 'right'
        }
      }
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }



}
