
import { Component, OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, } from '@angular/core';

import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours,
  } from 'date-fns';

  import { Subject } from 'rxjs';
  import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
  import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarView,
  } from 'angular-calendar';
  
  const colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };
  
  @Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

export class AppComponent {
  title = 'SWGODLC';
 
}
