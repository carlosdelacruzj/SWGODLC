import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
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

  constructor(
    public service: CalendarioService,
    private _cdRef: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    await this.getEventos();
    this.addCitas(this.mockCitas);
  }

  async getEventos() {
    try {
      this.mockCitas = await this.service.getAllEventos();
      this.mockCitas.map((p) => {
        p.allDay = false;
        p.id = p.id.toString();
        return p;
      });
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
