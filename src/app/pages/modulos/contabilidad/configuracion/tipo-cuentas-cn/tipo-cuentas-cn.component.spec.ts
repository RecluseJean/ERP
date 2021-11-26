import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCuentasCnComponent } from './tipo-cuentas-cn.component';

describe('TipoCuentasCnComponent', () => {
  let component: TipoCuentasCnComponent;
  let fixture: ComponentFixture<TipoCuentasCnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoCuentasCnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCuentasCnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
