import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoMercaderiaComponent } from './movimiento-mercaderia.component';

describe('MovimientoMercaderiaComponent', () => {
  let component: MovimientoMercaderiaComponent;
  let fixture: ComponentFixture<MovimientoMercaderiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientoMercaderiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoMercaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
