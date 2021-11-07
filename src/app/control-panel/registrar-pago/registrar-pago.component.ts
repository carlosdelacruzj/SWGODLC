import { Component, OnInit } from '@angular/core';
import { RegistrarPagoService } from './service/registrar-pago.service';
import { PedidoVoucher } from './model/pedidosvoucher.model';
import { Monto } from './model/monto.model';
import { MetodoPago } from './model/metodopago.model';
import { Voucher } from './model/vouchers.model';

@Component({
  selector: 'app-registrar-pago',
  templateUrl: './registrar-pago.component.html',
  styleUrls: ['./registrar-pago.component.css'],
})
export class RegistrarPagoComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Proyecto', 'Fecha', 'Editar'];
  displayedColumns2: string[] = ['Codigo', 'Fecha', 'Monto', 'Imagen'];
  costo = 's./12.00';
  estado = 'Aceptado';
  pedidosContratados: PedidoVoucher[] = [];
  pedidosPagados: PedidoVoucher[] = [];
  informacionPagos: Monto[] = [];
  vouchersPago: Voucher[] = [];
  metodosPago: MetodoPago[] = [];
  monto = {
    total: 0,
    abonado: 0,
    pendiente: 0,
  };
  detallePedido = false;
  listadoPedidos = true;

  constructor(private service: RegistrarPagoService) {}

  ngOnInit(): void {
    this.listadoPedidos = true;
    this.detallePedido = false;
    this.getPedidosContratados();
    this.getPedidosPagados();
  }

  async getPedidosContratados() {
    this.service.getPedidosContratados().subscribe((response: any) => {
      this.pedidosContratados = response;
    });
  }

  async getPedidosPagados() {
    this.service.getPedidosPagados().subscribe((response: any) => {
      this.pedidosPagados = response;
    });
  }

  async getVoucherPedido(id: number) {
    this.service.getVoucherPedido(id).subscribe((response: any) => {
      this.monto.abonado = response[0].MontoAbonado;
      this.monto.total = response[0].CostoTotal;
      this.monto.pendiente = this.monto.total - this.monto.abonado;
    });
  }

  async getMetodosPago() {
    this.service.getMetodosPago().subscribe((response: any) => {
      this.metodosPago = response;
    });
  }

  async getVouchers(id: number) {
    this.service.getVouchersPedido(id).subscribe((response: any) => {
      this.vouchersPago = response;
    });
  }

  getIdPedido(id: number) {
    this.listadoPedidos = false;
    this.detallePedido = true;
    this.getMetodosPago();
    this.getVoucherPedido(id);
    this.getVouchers(id);
  }

  mostrarListado() {
    this.listadoPedidos = true;
    this.detallePedido = false;
  }
}
