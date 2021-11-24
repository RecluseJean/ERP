import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoAprobarComponent } from './presupuesto-aprobar.component';

describe('PresupuestoAprobarComponent', () => {
  let component: PresupuestoAprobarComponent;
  let fixture: ComponentFixture<PresupuestoAprobarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestoAprobarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoAprobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
