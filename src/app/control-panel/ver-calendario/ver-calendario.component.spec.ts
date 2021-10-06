import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCalendarioComponent } from './ver-calendario.component';

describe('VerCalendarioComponent', () => {
  let component: VerCalendarioComponent;
  let fixture: ComponentFixture<VerCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
