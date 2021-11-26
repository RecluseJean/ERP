import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCondicionesPagoComponent } from './c-condiciones-pago.component';

describe('CCondicionesPagoComponent', () => {
  let component: CCondicionesPagoComponent;
  let fixture: ComponentFixture<CCondicionesPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCondicionesPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCondicionesPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
