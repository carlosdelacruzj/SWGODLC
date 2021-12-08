import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReportesEstadisticos } from './services/reportes-estadisticos.service';
import { Equipos, Proyecto, Data } from './models/reportes-estadisticos.model';
import { single, single2, single4, single3 } from './data';

@Component({
  selector: 'app-reportes-estadisticos',
  templateUrl: './reportes-estadisticos.component.html',
  styleUrls: ['./reportes-estadisticos.component.css'],
})
export class ReportesEstadisticosComponent implements OnInit {
  ngOnInit(): void {
    this.obtenerEquipos();
    this.obtenerProyectos();
  }

  equipos: Equipos[] = [];

  single: any[] = [];
  single2: any[] = [];
  view: any[] = [200, 200];

  single4: any[] = [];
  Ganancias: boolean = false;

  proyectos: Proyecto = {} as Proyecto;

  data : any[] = [];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  showXAxis = true;
  showYAxis = true;
  gradient2 = false;
  showLegend2 = true;
  showXAxisLabel = true;
  xAxisLabel = 'Cantidad';
  showYAxisLabel = true;
  yAxisLabel = 'Mes';

  constructor(private service: ReportesEstadisticos) {
    Object.assign(this, { single });
    Object.assign(this, { single3 });
    Object.assign(this, { single2 });
    Object.assign(this, { single4 });
  }

  obtenerEquipos() {
    this.service.getEquipos().subscribe((res) => {
      this.equipos = res;
    });
  }

  obtenerProyectos() {
    this.service.getProyectos().subscribe((res) => {
      this.proyectos = res[0];
      const values = Object.values(res[0])

      for(let i = 0 ; i < 6 ; i++){
        var obj = {
          name : 'mes'+ (i+1).toString(),
          value : values[i]
        }
        this.data.push(obj)
      }
      console.log(this.data)

    });
  }

  showGanancias() {
    this.Ganancias = true;
  }
  showProyectos() {
    this.Ganancias = false;
  }
}
