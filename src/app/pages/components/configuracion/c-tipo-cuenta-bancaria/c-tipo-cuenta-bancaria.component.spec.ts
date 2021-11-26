import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTipoCuentaBancariaComponent } from './c-tipo-cuenta-bancaria.component';

describe('CTipoCuentaBancariaComponent', () => {
  let component: CTipoCuentaBancariaComponent;
  let fixture: ComponentFixture<CTipoCuentaBancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTipoCuentaBancariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTipoCuentaBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
