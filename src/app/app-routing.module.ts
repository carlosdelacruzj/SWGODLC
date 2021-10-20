import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './control-panel/dashboard/dashboard.component';
import { GestionarEquiposComponent } from './control-panel/gestionar-equipos/gestionar-equipos.component';
import { GestionarProyectoComponent } from './control-panel/gestionar-proyecto/listar-proyecto/gestionar-proyecto.component';
import { AgregarProyectoComponent } from './control-panel/gestionar-proyecto/agregar-proyecto/agregar-proyecto.component';
import { GestionarPedidoComponent } from './control-panel/gestionar-pedido/gestionar-pedido.component';
import { GenerarContratoComponent } from './control-panel/generar-contrato/generar-contrato.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gestionar-equipos', component: GestionarEquiposComponent },
  { path: 'gestionar-proyecto', component: GestionarProyectoComponent },
  { path: 'gestionar-proyecto/agregar-proyecto', component: AgregarProyectoComponent },
  { path: 'gestionar-pedido', component: GestionarPedidoComponent },
  { path: 'generar-contrato', component: GenerarContratoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
