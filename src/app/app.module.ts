import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { GestionarEquiposComponent } from './control-panel/gestionar-equipos/gestionar-equipos.component';
import { DashboardComponent } from './control-panel/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getSpanishPaginatorIntl } from './shared/angular-material/spanish-paginator-intl';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { GenerarContratoComponent } from './control-panel/generar-contrato/generar-contrato.component';


import { AdministrarPaqueteServicioComponent } from './control-panel/administrar-paquete-servicio/administrar-paquete-servicio.component';
import { EventCardComponent } from './control-panel/administrar-paquete-servicio/components/event-card/event-card.component';
import { EventServiceComponent } from './control-panel/administrar-paquete-servicio/components/event-service/event-service.component';
import { DetalleServiciosComponent } from './control-panel/administrar-paquete-servicio/components/detalle-servicios/detalle-servicios.component';
import { GestionarProyectoComponent } from './control-panel/gestionar-proyecto/listar-proyecto/gestionar-proyecto.component';
import { AgregarProyectoComponent } from './control-panel/gestionar-proyecto/agregar-proyecto/agregar-proyecto.component';
import { GestionarPedidoComponent } from './control-panel/gestionar-pedido/gestionar-pedido.component';
import { ActualizarProyectoComponent } from './control-panel/gestionar-proyecto/actualizar-proyecto/actualizar-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GestionarProyectoComponent,
    GestionarEquiposComponent,
    DashboardComponent,
    AgregarProyectoComponent,
    GestionarPedidoComponent,
    AdministrarPaqueteServicioComponent,
    EventCardComponent,
    EventServiceComponent,
    DetalleServiciosComponent,
    ActualizarProyectoComponent,
    GenerarContratoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    ReactiveFormsModule, 
    NgbModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
