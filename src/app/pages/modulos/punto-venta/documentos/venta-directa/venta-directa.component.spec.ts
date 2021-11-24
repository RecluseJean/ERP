import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaDirectaComponent } from './venta-directa.component';

describe('VentaDirectaComponent', () => {
  let component: VentaDirectaComponent;
  let fixture: ComponentFixture<VentaDirectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaDirectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaDirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
