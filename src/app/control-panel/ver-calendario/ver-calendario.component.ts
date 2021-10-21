import { Component, OnInit, ViewChild, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { add } from 'date-fns';
import { CitaCalendario } from './model/calendario.model';
import { CalendarioService } from './service/calendario.service';

@Component({
  selector: 'app-ver-calendario',
  templateUrl: './ver-calendario.component.html',
  styleUrls: ['./ver-calendario.component.css'],
})
export class VerCalendarioComponent implements OnInit {
  mockCitas: CitaCalendario[];

  

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
    showNonCurrentDates: false,
  };

  constructor(public service: CalendarioService, private _cdRef: ChangeDetectorRef) {
    // this.mockCitas = [
    //   // {id:'1',title:'Katya y Carlos',date:'2021-11-30 20:00:00',end:'2021-11-30 22:00:00', allDay: false},
    //   // {id:'2',title:'Cumpleaños Ricardo',date:'2021-11-30 20:00:00',end:'2021-11-30 22:00:00', allDay: false}
    //   {  title: 'Evento 1', date: '2021-10-30 19:30:00', allDay: false,end: '2021-10-30 20:30:00', id: '1'   },
    //   { title: 'Evento 2', date: '2021-10-29 19:30:00',allDay: false,end: '2021-10-29 20:30:00', id: '2' }
    // ];
  }

  async ngOnInit() {
    await this.getEventos();
    this.addCitas(this.mockCitas);
  }

  async getEventos() {
    try {
      // const data = await this.service.getAllEventos();
      this.mockCitas = await this.service.getAllEventos();
      this.mockCitas.map(p => {
        p.allDay = false;
        p.id = p.id.toString();
        return p;
      });
      // console.log('CITAS SERVICE: ', data);
      
    } catch (error) {
      console.log(error);
    }
  }

  eventClick(arg: any) {
    alert(JSON.stringify(arg));
  }

  addCitas(citas: CitaCalendario[]) {
    console.log('CITAS: ', citas);
    this.calendarOptions.events = citas;
    this._cdRef.detectChanges();
    console.log('CALENDAR: ', this.calendarOptions);
  }
}
