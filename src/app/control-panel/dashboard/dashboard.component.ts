import { Component, OnInit } from '@angular/core';
import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  personajes: any = [];
  columnsToDisplay = ['id', 'name', 'species'];
  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getAllNombres().subscribe((resp) => {
      this.personajes = resp.results;
    });
  }
}
