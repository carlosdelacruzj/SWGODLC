import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './control-panel/dashboard/dashboard.component';
import { GestionarEquiposComponent } from './control-panel/gestionar-equipos/gestionar-equipos.component';
import { GestionarProyectoComponent } from './control-panel/gestionar-proyecto/listar-proyecto/gestionar-proyecto.component';
import { AgregarProyectoComponent } from './control-panel/gestionar-proyecto/agregar-proyecto/agregar-proyecto.component';
import { GestionarPedidoComponent } from './control-panel/gestionar-pedido/gestionar-pedido.component';

import { AdministrarPaqueteServicioComponent } from './control-panel/administrar-paquete-servicio/administrar-paquete-servicio.component';
import { DetalleServiciosComponent } from './control-panel/administrar-paquete-servicio/components/detalle-servicios/detalle-servicios.component';
import { EditarServicioComponent } from './control-panel/administrar-paquete-servicio/components/editar-servicio/editar-servicio.component';
import { GestionarPersonalComponent } from './control-panel/gestionar-personal/gestionar-personal.component';
import { AgregarPersonalComponent } from './control-panel/gestionar-personal/agregar-personal/agregar-personal.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gestionar-equipos', component: GestionarEquiposComponent },
  { path: 'gestionar-proyecto', component: GestionarProyectoComponent },
  { path: 'gestionar-proyecto/agregar-proyecto', component: AgregarProyectoComponent },
  { path: 'administrar-paquete-servicio/editar-servicio', component: EditarServicioComponent },
  
  { path: 'administrar-paquete-servicio', component: AdministrarPaqueteServicioComponent},
  //PEDIDO RUTAS
  { path: 'gestionar-pedido', component: GestionarPedidoComponent },
  //PERSONAL RUTAS
  { path: 'gestionar-personal', component: GestionarPersonalComponent},
  { path: 'gestionar-personal/agregar', component: AgregarPersonalComponent},
  
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
