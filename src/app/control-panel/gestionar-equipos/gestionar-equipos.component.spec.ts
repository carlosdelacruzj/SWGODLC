import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEquiposComponent } from './gestionar-equipos.component';

describe('GestionarEquiposComponent', () => {
  let component: GestionarEquiposComponent;
  let fixture: ComponentFixture<GestionarEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
