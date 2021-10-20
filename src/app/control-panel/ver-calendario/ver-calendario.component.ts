import { Component, OnInit, ViewChild,AfterContentInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridnPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/core/locales/es';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import esLocale from '@fullcalendar/core/locales/es';
import { CitaCalendario } from './model/calendario.model';
import { CalendarioService } from './service/calendario.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatTab } from '@angular/material/tabs';
import { trackByWeekAllDayEvent } from 'angular-calendar/modules/common/util';

@Component({
  selector: 'app-ver-calendario',
  templateUrl: './ver-calendario.component.html',
  styleUrls: ['./ver-calendario.component.css']
})

export class VerCalendarioComponent implements OnInit{
  /*
  displayedColumns = ['ID','Nombre','Estado','Fecha','Hora','Direccion','Cliente','Telefono'];
  displayedColumns2 = ['ID','Nombre','Estado','Fecha','Hora','Direccion','Cliente','Telefono'];
  
  dataSource!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  */
   /*mockCitas: Citacalendario[] = [
    {
      //title:'Matrimonio',
      ID:'',
      title:'',
      EstadoProyecto:'',
   //   start:'',
      date:'',
      HoraEvento: '',
      Direccion: '',
      Cliente: '',
      Telefono: ''
     // 2021-11-30T00:00:00.000Z
    },
   ];

   */

  
   mockCitas: CitaCalendario[] = [
    { title: '', date: '',end: '',id:'' },
  ];

/*
  mockCitas: CitaCalendario[] = [
    { title: 'Evento 1', date: '2021-10-30 19:30:00', end: '2021-10-30', id: '1'   },
    { title: 'Evento 2', date: '2021-10-29 19:30:00',end: '2021-10-29 20:30:00', id: '2' }
  ];
*/

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventClick: this.eventClick.bind(this),
    locale: esLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridDay',
    },
    dayMaxEvents: true,
    dayMaxEventRows: 5,
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      meridiem: false,
    },
     events: this.mockCitas,
    showNonCurrentDates: false,
  };

  constructor(public service : CalendarioService) {}
  
  ngOnInit(): void {
      this.getEventos();
      console.log('MOCKS', this.mockCitas);
      this.addEventCalendar(this.mockCitas);

      //this.getEventos1(this.service.selectcalendario);      
 }

 


  getEventos(){
   this.service.getAllEventos().subscribe((response: any)=>{
   //   alert(JSON.stringify(response))
        this.mockCitas=response;
      // alert(JSON.stringify(this.mockCitas));
        console.log(this.mockCitas);
        
   });

   
  }


  eventClick(arg:any ) {
    alert(JSON.stringify(arg));
   // console.log(arg);
  }

  addEventCalendar(mockCitas: CitaCalendario[]):void {
   // for(String i=0,i<(mockCitas).length,i++){
    
    this.calendarOptions.events = this.mockCitas;
    console.log(this.calendarOptions);
  // 
                }

  
}
