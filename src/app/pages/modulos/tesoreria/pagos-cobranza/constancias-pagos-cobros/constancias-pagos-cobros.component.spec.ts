import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstanciasPagosCobrosComponent } from './constancias-pagos-cobros.component';

describe('ConstanciasPagosCobrosComponent', () => {
  let component: ConstanciasPagosCobrosComponent;
  let fixture: ComponentFixture<ConstanciasPagosCobrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstanciasPagosCobrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstanciasPagosCobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
