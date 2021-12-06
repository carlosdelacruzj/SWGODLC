import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../service/pedido.service';
import { VisualizarService } from '../service/visualizar.service';
import { FormGroup,FormControl} from '@angular/forms';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-actualizar-pedido',
  templateUrl: './actualizar-pedido.component.html',
  styleUrls: ['./actualizar-pedido.component.css']
})
export class ActualizarPedidoComponent implements OnInit {
  ID=this._route.snapshot.paramMap.get('id');
  minimo: string;
  maximo: string;
  fechaCreate: Date = new Date();
  estados: any[] = [
    { value: '2', viewValue: 'Aceptado' },
    { value: '3', viewValue: 'Cancelado' },
    { value: '4', viewValue: 'En Curso' },
    { value: '5', viewValue: 'Finalizado' },
    { value: '6', viewValue: 'Anulado' },
  ];

  constructor(public pedidoService: PedidoService, private datepipe:DatePipe,
  public visualizarService: VisualizarService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.getDetallePedidoView(Number(this.ID));
    this.fechaValidate(this.fechaCreate);
  }
  fechaValidate(date){
    this.minimo= this.addDaysToDate(date, 5);
    this.maximo= this.addDaysToDate(date, 365); }
    convert(str) { 
      var date = new Date(str),
       mnth = ("0" + (date.getMonth() + 1)).slice(-2), 
       day = ("0" + date.getDate()).slice(-2); 
       return [date.getFullYear(), mnth, day].join("-"); }
  
    addDaysToDate(date, days){
        var res = new Date(date);
        res.setDate(res.getDate() + days);
       return this.convert(res);}
  getDetallePedidoView(ID:Number) {
    
    this.visualizarService.getPedidoID(ID).subscribe(
      response =>{
        
        console.log(response[0].F_Evento);
        this.visualizarService.selectProyecto=response[0];
        this.visualizarService.selectProyecto.F_Evento = (response[0].F_Evento);
        console.log(this.visualizarService.selectProyecto.F_Evento);
        
    });
  }
  putPedido(){
    
  }

}
