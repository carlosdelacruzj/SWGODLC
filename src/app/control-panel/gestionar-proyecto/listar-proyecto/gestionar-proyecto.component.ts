import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProyectoService } from 'src/app/control-panel/gestionar-proyecto/service/proyecto.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Proyecto } from '../model/proyecto.model';
import { PedidoService } from '../service/pedido.service';
import { Pedido } from '../model/pedido.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gestionar-proyecto',
  templateUrl: './gestionar-proyecto.component.html',
  styleUrls: ['./gestionar-proyecto.component.css'],
})
export class GestionarProyectoComponent implements OnInit {
  displayedColumns = [
    'PK_Pro_Cod',
    'Pro_Nombre',
    'FK_P_Cod',
    'EPro_Fecha_Inicio_Edicion',
    'Pro_Fecha_Fin_Edicion',
    'actions',
  ];
  displayedColumns2 = [
    'Nombre',
    'Fecha',
    'Servicio',
    'Evento',
    'Cliente',
    'Estado',
    'actions',
  ];

  dataSource!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginator2') paginator2!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  

  constructor(
    public service: ProyectoService,
    public service2: PedidoService,private modalService: NgbModal
  ) {}
  fechaActual = '';
  ngOnInit(): void {
    this.getProyecto();
    this.getPedido();
  }
  getProyecto() {
    this.service.getAllNombres().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator2;
      this.dataSource.sort = this.matSort;
    });
  }

  getPedido() {
    this.service2.getAllNombres().subscribe((response: any) => {
      this.dataSource2 = new MatTableDataSource(response);
      this.dataSource2.paginator = this.paginator;
      this.dataSource2.sort = this.matSort;
    });
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  filterData2($event: any) {
    this.dataSource2.filter = $event.target.value;
  }
  getProyecto1(proyecto: Proyecto) {
    this.service.selectProyecto = proyecto;
    // console.log(this.service.selectProyecto);
  }
  getPedido1(pedido: Pedido) {
    this.service2.selectPedido = pedido;
    console.log(this.service2.selectPedido);
  }

 //DESDE AQUI BORRAS
  closeResult = '';

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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


  
}
