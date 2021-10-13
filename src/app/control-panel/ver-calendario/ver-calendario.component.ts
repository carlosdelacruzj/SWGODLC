import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridnPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/core/locales/es';
import esLocale from '@fullcalendar/core/locales/es';
import { Citacalendario } from './model/calendario.model';
import { CalendarioService } from './service/calendario.service';

@Component({
  selector: 'app-ver-calendario',
  
  templateUrl: './ver-calendario.component.html',
  styleUrls: ['./ver-calendario.component.css']
})

export class VerCalendarioComponent {
  mockCitas: Citacalendario[] = [
    {
      title:'Matrimonio',
      id:'id',
      estadoproyecto:'estadoproyecto',
      date: '2021-10-30T00:00:00.000Z',
      horaevento: 'horaevento',
      direccion: 'direccion',
      cliente: 'cliente',
     telefono: 'telefono',
    },
   ];

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

  constructor(private service: CalendarioService) {
    this.service.getAllEventoByMonth().subscribe((response) => {
      this.mockCitas=response;
    });

    this.addEventCalendar(this.mockCitas);
  }

  addEventCalendar(eventos: Citacalendario[]) {
    this.calendarOptions.events = eventos;
  }
  eventClick(arg: any) {
    console.log(arg);
  }

}
