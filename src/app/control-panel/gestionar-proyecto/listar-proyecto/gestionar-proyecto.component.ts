import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProyectoService } from 'src/app/control-panel/gestionar-proyecto/service/proyecto.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Proyecto } from '../model/proyecto.model';
import { PedidoService } from '../service/pedido.service';
import { Pedido, Pedido2 } from '../model/pedido.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

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
    'ID',
    'Nombre',
    'Fecha',
    'Servicio',
    'Evento',
    'Cliente',
    'Estado',
    'EstadoPago',
    'actions',
  ];
  id2 = 0;
  dataSource!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginator2') paginator2!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  @ViewChild(MatSort) gato!: MatSort;

  constructor(
    public service: ProyectoService,
    public service2: PedidoService,
    private modalService: NgbModal
  ) { }
  fechaActual = '';
  ngOnInit(): void {
    this.getProyecto();
    this.getPedido();

  }

  // para llenar las tablas
  getProyecto() {
    this.service.getAllNombres().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator2;
      this.dataSource.sort = this.gato;
    });
  }

  getPedido() {
    this.service2.getAllNombres().subscribe((response: any) => {
      this.dataSource2 = new MatTableDataSource(response);
      this.dataSource2.paginator = this.paginator;
      this.dataSource2.sort = this.matSort;
    });
  }

  // para hacer los filtros
  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  filterData2($event: any) {
    this.dataSource2.filter = $event.target.value;
  }

  getProyecto1(proyecto: Proyecto) {
    this.service.selectProyecto = proyecto;
  }

  // para guardar el dato escogido
  getPedido1(pedido: Pedido) {
    this.service2.selectPedido = pedido;
    console.log(this.service2.selectPedido);
  }

  getPedidoID(valor: number) {
    this.service2.getAllNombresID(valor).subscribe((responde) => {
      this.service2.selectPedido2 = responde[0];
      console.log(this.service2.selectPedido2);
    });
  }

  //DESDE AQUI BORRAS
  closeResult = '';

  open(content: any, id: number) {
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
    this.id2 = id;
    this.service.selectProyecto.PK_Pro_Cod = this.id2;
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

  updateProyecto(ProyectoForm2: NgForm) {
    let data = {
      id: ProyectoForm2.value.id,
      nombreProyecto: ProyectoForm2.value.ID,
      fechaFinEdicion: ProyectoForm2.value.F_Evento
    };
    console.log(data);
    // this.service.registro(data).subscribe(
    //   (res) => { console.log("DATA: ", res)},
    //   (err) => console.error(err)
    // );
  }
}
