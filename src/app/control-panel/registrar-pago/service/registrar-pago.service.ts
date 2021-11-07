import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrarPagoService {
  private GET_PEDIDOS_CONTRATADOS =
    'https://tp2021database.herokuapp.com/voucher/consulta/getAllPedidoVoucher/2';
  private GET_PEDIDOS_PAGADOS =
    'https://tp2021database.herokuapp.com/voucher/consulta/getAllPedidoVoucher/3';
  private GET_VOUCHER_PEDIDO =
    'https://tp2021database.herokuapp.com/voucher/consulta/getVoucherByPedido/';
  private GET_VOUCHERS =
    'https://tp2021database.herokuapp.com/voucher/consulta/getAllVoucherByPedido/';
  private GET_METODOS =
    'https://tp2021database.herokuapp.com/voucher/consulta/getAllMetodoPago';

  constructor(private http: HttpClient) {}

  public getPedidosContratados(): Observable<any> {
    return this.http.get(this.GET_PEDIDOS_CONTRATADOS);
  }

  public getPedidosPagados(): Observable<any> {
    return this.http.get(this.GET_PEDIDOS_PAGADOS);
  }

  public getVoucherPedido(id: number): Observable<any> {
    return this.http.get(this.GET_VOUCHER_PEDIDO + `${id}`);
  }

  public getVouchersPedido(id: number): Observable<any> {
    return this.http.get(this.GET_VOUCHERS + `${id}`);
  }

  public getMetodosPago(): Observable<any> {
    return this.http.get(this.GET_METODOS);
  }
}
