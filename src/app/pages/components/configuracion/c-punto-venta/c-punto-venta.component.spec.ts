import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPuntoVentaComponent } from './c-punto-venta.component';

describe('CPuntoVentaComponent', () => {
  let component: CPuntoVentaComponent;
  let fixture: ComponentFixture<CPuntoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPuntoVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPuntoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
