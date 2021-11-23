import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposMovimientosAlmacenComponent } from './tipos-movimientos-almacen.component';

describe('TiposMovimientosAlmacenComponent', () => {
  let component: TiposMovimientosAlmacenComponent;
  let fixture: ComponentFixture<TiposMovimientosAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposMovimientosAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposMovimientosAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
