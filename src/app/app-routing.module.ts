import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './control-panel/dashboard/dashboard.component';
import { GestionarEquiposComponent } from './control-panel/gestionar-equipos/gestionar-equipos.component';
import { GestionarProyectoComponent } from './control-panel/gestionar-proyecto/gestionar-proyecto.component';
import { AdministrarPaqueteServicioComponent } from './control-panel/administrar-paquete-servicio/administrar-paquete-servicio.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gestionar-equipos', component: GestionarEquiposComponent },
  { path: 'gestionar-proyecto', component: GestionarProyectoComponent },
  { path: 'administrar-paquete-servicio', component: AdministrarPaqueteServicioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
