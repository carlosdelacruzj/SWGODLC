import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-service',
  templateUrl: './event-service.component.html',
  styleUrls: ['./event-service.component.css']
})
export class EventServiceComponent implements OnInit {
  @Input() titulo: string='';
  @Input() servicio: string='';
  @Input() precio: string='';
  @Input() descripcion: string='';
  @Input() imagen: string='';
  @Input() id: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
