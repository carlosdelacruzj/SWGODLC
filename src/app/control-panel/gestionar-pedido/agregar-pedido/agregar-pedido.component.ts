import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PedidoService } from '../service/pedido.service';
import { VisualizarService } from '../service/visualizar.service';

@Component({
  selector: 'app-agregar-pedido',
  templateUrl: './agregar-pedido.component.html',
  styleUrls: ['./agregar-pedido.component.css']
})
export class AgregarPedidoComponent implements OnInit {


  columnsToDisplay = ['Ubicacion','Direccion','Coordenadas','Quitar'];
  columnsToDisplay1 = ['Descripcion','Precio', 'Seleccionar'];
  eventoxsevicio: any[] = [];
  servicios: any[] = [];
  servicioSeleccionado = 1;
  eventoSeleccionado = 1;
  evento: any[] = [];
  dataSource!: MatTableDataSource<any>;
  dataSource1!: MatTableDataSource<any>;
  desID = 0;
  infoCliente = { Nombre: '-', Apellido: '-' };
  dniCliente: any;
  fechaCreate: Date = new Date();
  minimo: string;
  maximo: string;

  selectedDescripcion;
  
  constructor(
    public pedidoService: PedidoService,
    public visualizarService: VisualizarService,) { }
    
  ngOnInit(): void {
    this.getEventos();
    this.getServicio();
    this.getEventoxServicio();
    this.visualizarService.selectAgregarPedido.fechaCreate= this.fechaCreate.toLocaleDateString();
    this.fechaValidate(this.fechaCreate);
}
  fechaValidate(date){
  this.minimo= this.addDaysToDate(date, 14);
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

  getDataCliente(dni: number) {
    this.pedidoService.getDni(dni).subscribe((res) => {
        if(res.length==0){
          this.infoCliente;
        }else{
         this.infoCliente = res[0];
        } },
          err =>{console.log(err);});}

  buscarCliente(dni: number) {
    this.getDataCliente(dni);}

  getServicio() {
    this.pedidoService.getServicios().subscribe((responde) => {
      this.servicios = responde;
    });}

  asignarServicio(event: number) {
    this.servicioSeleccionado = event;
    this.getEventoxServicio();
  }

  getEventos() {
    this.pedidoService.getEventos().subscribe((responde) => {
      this.evento = responde; });
  }

  asignarEvento(event: number) {
    this.eventoSeleccionado = event;
    this.getEventoxServicio();}

  asignarDescripcion(id: number) {
    this.desID = id;}

  getEventoxServicio() {
    this.visualizarService
      .getEventosServicio(this.eventoSeleccionado, this.servicioSeleccionado).subscribe((res) => {
        this.eventoxsevicio = res;
        this.dataSource1 = new MatTableDataSource(res);
      });}


      radioSelected () {
        this.asignarDescripcion(this.selectedDescripcion);
    }

}
