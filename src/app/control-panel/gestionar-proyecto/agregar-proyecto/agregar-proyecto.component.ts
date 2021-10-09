import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})


export class AgregarProyectoComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Boda'},
    {value: 'pizza-1', viewValue: 'Matrimonio'},
    {value: 'tacos-2', viewValue: ''}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
