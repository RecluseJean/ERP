import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoVentaTComponent } from './punto-venta-t.component';

describe('PuntoVentaTComponent', () => {
  let component: PuntoVentaTComponent;
  let fixture: ComponentFixture<PuntoVentaTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoVentaTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoVentaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
