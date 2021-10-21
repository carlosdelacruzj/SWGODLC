import { Component, OnInit } from '@angular/core';
import { PedidoService } from './service/pedido.service';
import { VisualizarService } from './service/visualizar.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { NgForm } from '@angular/forms';

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-gestionar-pedido',
  templateUrl: './gestionar-pedido.component.html',
  styleUrls: ['./gestionar-pedido.component.css'],
})
export class GestionarPedidoComponent implements OnInit {
  cars: Car[] = [
    { value: '1', viewValue: 'Solicitado' },
    { value: '2', viewValue: 'Aceptado' },
    { value: '3', viewValue: 'Cancelado' },
    { value: '4', viewValue: 'En Curso' },
    { value: '5', viewValue: 'Finalizado' },
    { value: '6', viewValue: 'Anulado' },
  ];

  pedidos = [];
  columnsToDisplay = [
    'ID',
    'Nombre',
    'Fecha',
    'Servicio',
    'Evento',
    'Cliente',
    'Estado',
    'Visualizar',
  ];

  botonVisualizar = true;
  botonRegistrar = true;
  pedidos_ready = false;

  pedido = {
    Empleado: '',
    N_Pedido: 0,
    Cliente: '',
    F_Registro: '',
    EstadoPedido: '',
    Costo_Total: 0,
    Acuenta: 0,
    EstadoPago: '',
    Evento: '',
    Servicio: '',
    F_Evento: '',
    Hora_Evento: '',
    Direccion: '',
    Descripcion: '',
    NombrePedido: '',
  };
  idPedido = 0;
  idregistrar = 0;
  saldo = 0;
  servicioSeleccionado = 1;
  servicios: any[] = [];
  descripciones: any[] = [];
  eventoSeleccionado = 1;
  evento: any[] = [];
  nPedido = 0;
  NombrePed: any;
  fechaActual = '';
  dniCliente = 0;
  infoCliente = { Nombre: '', Apellido: '' };
  estadoEditado = 0;
  fechaEditada = { day: '', month: '', year: '' };
  fecharegistrada = { day: '', month: '', year: '' };

  horaEditada = '';

  constructor(
    private service: PedidoService,
    private service2: VisualizarService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.pedidos_ready = false;
    this.botonVisualizar = true;
    this.getPedido();
  }
  getPedido() {
    this.service.getAllNombres().subscribe((response) => {
      this.pedidos = response;
      this.pedidos_ready = true;
    });
  }
  mostrarDetalles(valor: number) {
    this.botonVisualizar = false;
    this.idPedido = valor;
    this.getPedidoID(this.idPedido);
  }
  mostrarRegistro() {
    this.botonRegistrar = false;
    this.getN_Pedido2();
    this.asignarFechaActual();
    this.getServi();
    this.getEventos();
    this.getDescripcion();
  }
  buscarCliente(valor: number) {
    this.getDataCliente(valor);
  }
  cerrarDetalles() {
    this.botonVisualizar = true;
  }
  cerrarRegistro() {
    this.botonRegistrar = true;
  }
  getN_Pedido2() {
    this.service.getN_Pedido().subscribe((responde) => {
      this.nPedido = responde[0].N_Pedido + 1;
    });
  }
  getDataCliente(valor: number) {
    this.service.getDni(valor).subscribe((responde) => {
      this.infoCliente = responde[0];
    });
  }
  getPedidoID(valor: number) {
    this.service2.getPedidoID(valor).subscribe((responde) => {
      this.pedido.Empleado = responde[0].Empleado;
      this.pedido.N_Pedido = responde[0].N_Pedido;
      this.pedido.Cliente = responde[0].Cliente;
      this.pedido.F_Registro = responde[0].F_Registro;
      this.pedido.EstadoPedido = responde[0].EstadoPedido;
      this.pedido.Costo_Total = responde[0].Costo_Total;
      this.pedido.Acuenta = responde[0].Acuenta;
      this.pedido.EstadoPago = responde[0].EstadoPago;
      this.pedido.Evento = responde[0].Evento;
      this.pedido.Servicio = responde[0].Servicio;
      this.pedido.F_Evento = responde[0].F_Evento;
      this.pedido.Hora_Evento = responde[0].Hora_Evento;
      this.pedido.Direccion = responde[0].Direccion;
      this.pedido.Descripcion = responde[0].Descripcion;
      this.pedido.NombrePedido = responde[0].NombrePedido;
      this.saldo = this.pedido.Costo_Total - this.pedido.Acuenta;
    });
  }

  asignarFechaActual() {
    var today = new Date();
    var hoy;
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    hoy = dd + '/' + mm + '/' + yyyy;
    this.fechaActual = hoy;
  }
  closeResult = '';

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  editarModal() {
    let day = this.fechaEditada.day.toString();
    let month = this.fechaEditada.month.toString();
    let year = this.fechaEditada.year.toString();

    let fecha = year + '-' + month + '-' + day;

    this.service2.putPedido(4, fecha, '17:00:00', 8).subscribe({
      next: (res) => {
        alert(JSON.stringify(res));
      },
      error: (error) => {
        alert(JSON.stringify(error));
      },
    });
  }
  //SERVICIOS

  getServi() {
    this.service.getServicios().subscribe((responde) => {
      this.servicios = responde;
    });
  }
  asignarServicio(event: number) {
    this.servicioSeleccionado = event;
    this.getDescripcion();
  }

  // EVENTOS
  getEventos() {
    this.service.getEventos().subscribe((responde) => {
      this.evento = responde;
    });
  }
  asignarEvento(event: number) {
    this.eventoSeleccionado = event;
    this.getDescripcion();
  }

  fechaRegistro() {
    let day = this.fecharegistrada.day.toString();
    let month = this.fecharegistrada.month.toString();
    let year = this.fecharegistrada.year.toString();

    let fecharegistro = year + '-' + month + '-' + day;
    return fecharegistro;
  }

  getDescripcion() {
    this.service2
      .getEventoServicio(this.eventoSeleccionado, this.servicioSeleccionado)
      .subscribe((res) => {
        this.descripciones = res;
      });
  }



  addPedido(ProyectoForm: NgForm) {
    //Para poder cambiar el orden de como mando la fecha

    // console.log(fecha.substr(2,4)); //-MM-
    // console.log(fecha.substr(0,2)); //dd
    // console.log(fecha.substr(6)); //yyyy
    // this.fechaOk = fecha.substr(6) + fecha.substr(2, 4) + fecha.substr(0, 2); //yyyy-MM-dd

    let data = {
      proyecto_nombre: ProyectoForm.value.NombrePedido,
      codigo_pedido: ProyectoForm.value.ID,
      // fecha_inicio_edicion: this.fechaOk,
    };
    console.log(data);
    // this.service.registro(data).subscribe(
    //   (res) => {
    //     console.log('DATA: ', res);
    //   },
    //   (err) => console.error(err)
    // );
  }
  //  postPedido() {
  //    this.service2.postPedido(
  //     2, this.fechaActual, this.nPedido, this.infoCliente.Nombre, this.infoCliente.Apellido, this.eventoSeleccionado,this.servicioSeleccionado,
  //     this.fechaRegistro(),"21:00:00","Av.prueba123","Foto123prue").subscribe((responde) => {
  //       alert(responde)

  //     }
  // }
}
