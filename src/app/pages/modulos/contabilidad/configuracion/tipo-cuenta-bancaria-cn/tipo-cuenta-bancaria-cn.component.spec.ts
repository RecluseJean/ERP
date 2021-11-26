import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCuentaBancariaCnComponent } from './tipo-cuenta-bancaria-cn.component';

describe('TipoCuentaBancariaCnComponent', () => {
  let component: TipoCuentaBancariaCnComponent;
  let fixture: ComponentFixture<TipoCuentaBancariaCnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoCuentaBancariaCnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCuentaBancariaCnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
