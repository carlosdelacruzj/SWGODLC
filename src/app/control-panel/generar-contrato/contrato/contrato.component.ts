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
import { Contrato } from '../model/contrato.model';

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
    var pedido_cliente = ContratoForm.value.Cliente;
    var pedido_servicio = ContratoForm.value.Servicio;
    var pedido_evento = ContratoForm.value.Evento;
    var pedido_fecha = ContratoForm.value.F_Evento;
    var pedido_hora = ContratoForm.value.Hora_Evento;
    var pedido_ubicacion = ContratoForm.value.Direccion;
    var pedido_descripcion = ContratoForm.value.Descripcion;
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    const pdfDefinition : any = {
      content: [
        // if you don't need styles, you can use a simple string to define a paragraph
        'Edwin De La Cruz',
    
        // using a { text: '...' } object lets you set styling properties
        { text: 'CONTRATO DE VIDEO', style: 'header' },
    
        // if you set the value of text to an array instead of a string, you'll be able
        // to style any part individually
        
        {text: "Conste por el presente documento, contrato de video que se celebran de una parte Foto Video D' la Cruz representado por el Sr. EDWIN DE LA CRUZ quien en adelante se denominará EL CONTRATADO y de la otra parte "+pedido_cliente+" quien se denominará EL O LA CONTRATANTE en los términos siguientes:", marginBottom : 8},

        
        {text:"1.  Foto Video D' la Cruz brindará el servicio de "+pedido_servicio+" en los días, direcciones y horas que se detallan."},
        {text:"Fecha del "+pedido_evento+" : ....."+pedido_fecha.substring(0,2)+".....de....."+pedido_fecha.substring(3,5) + ".....del....."+pedido_fecha.substring(6,10)+".....",marginTop: 10},
        {text:"Hora:....."+pedido_hora+".....Lugar:....."+pedido_ubicacion+".....", marginTop: 10, marginBottom: 10},    
        {text:"2.  Foto Video D' la Cruz utilizará su equipo y personal, siendo protestad del mismo el de dejar el lugar de trabajo, en caso sucedieran hechos que atenten contra el normal desenvolvimiento de su trabajo, o cuando consideren innecesaria su presencia en el lugar de trabajo."},
        {text:"3.  El plazo de entrega del trabajo final será 20 días aproximadamente después de realizado el trabajo."},
        {text:"4.  Foto Video D' la Cruz se compromete a realizar su trabajo de filmación en función a la muestra que previamente ha sido visualizada por el contratante, respetando las pautas que, con anterioridad, sean sugeridas."},
        {text:"5.  EL CONTRATANTE se compromete a facilitar a todo el personal de Foto Video D' la Cruz el ingreso, ubicación y desplazamiento con absoluta libertad donde se realice el evento."},
        {text:"6.  Foto Video D' la Cruz tendrá especial cuidado para realizar el trabajo, sin embargo, si falláramos en el cumplimiento de los terminos de este contrato por eventos o actos ajenos a su control la responsabilidad presente o futura limitada a la devolución del depósito como total y única compensación, sin ninguna otra responsabilidad presente o futura."},

        {
          text: [
            
            { text: "Nota:   ", bold: true },
            "Queda expresamente acordado en la eventualidad de posponer o cancelar el trabajo cualquiera sea la causa que lo motive Foto Video D' la Cruz retendrá el total de los depósitos pagados en compensación por los daños y perjuicios ocasionados"
            
          ]
        },

        {text:"Detalles: "+pedido_descripcion},
        {text:"Lima..."+hoy.toLocaleDateString().substring(0,2)+"..."+hoy.toLocaleDateString().substring(3,5)+"..."+hoy.toLocaleDateString().substring(6,10)+"...", marginTop: 30, marginBottom: 30, alignment: "right"},
        {
          columns: [
            {
              // auto-sized columns have their widths based on their content
              marginRight: 10, marginLeft: 20, width: "50%",
              text: '__________________'
            },
            {
              // star-sized columns fill the remaining space
              // if there's more than one star-column, available width is divided equally
              marginRight: 20, marginLeft: 10, width: "50%",
              text: '__________________'
            }
          ],
          // optional space between columns
          alignment: "center"
        },
        {
          columns: [
            {
              // auto-sized columns have their widths based on their content
              marginRight: 10, marginLeft: 20, width: "50%",
              text: 'Edwin De la cruz'
            },
            {
              // star-sized columns fill the remaining space
              // if there's more than one star-column, available width is divided equally
              marginRight: 20, marginLeft: 10, width: "50%",
              text: pedido_cliente
            }
          ],
          // optional space between columns
          alignment: "center"
        },

        
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
