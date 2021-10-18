import { Component, OnInit } from '@angular/core';
import { PedidoService } from './service/pedido.service';
import { VisualizarService } from './service/visualizar.service';



interface Food {
  value: string;
  viewValue: string;
  
}

@Component({
  selector: 'app-gestionar-pedido',
  templateUrl: './gestionar-pedido.component.html',
  styleUrls: ['./gestionar-pedido.component.css'],
})
export class GestionarPedidoComponent implements OnInit {
  pedidos = [];
  columnsToDisplay = ['ID', 'Nombre', 'Fecha', 'Servicio', 'Evento', 'Cliente', 'Estado', 'Visualizar',]


  botonVisualizar = true;
  botonRegistrar = true;
  botonEditar = true;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Boda' },
    { value: 'pizza-1', viewValue: 'Matrimonio' },
    { value: 'tacos-2', viewValue: 'Divorcio' },
  ];

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
    NombrePedido: ''
  }
  idPedido = 0;
  idregistrar = 0;
  saldo = 0;
  servicios = [];
  nPedido = 0;
  NombrePed: any;
  fechaActual = '';
  dniCliente = 0;
  infoCliente = { Nombre: '', Apellido: '' };
  constructor(private service: PedidoService, private service2: VisualizarService) { }

  ngOnInit(): void {
    this.botonVisualizar = true;
    this.getPedido();
  }
  getPedido() {
    this.service.getAllNombres().subscribe((response) => {
      this.pedidos = response;

    });

  }
  mostrarEditable(){
    this.botonEditar=false;
    
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
    })
  }
  getDataCliente(valor: number) {
    this.service.getDni(valor).subscribe((responde) => {
      this.infoCliente = responde[0];
    })
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
    })
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
}