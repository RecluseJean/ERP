import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasCorreosComponent } from './cuentas-correos.component';

describe('CuentasCorreosComponent', () => {
  let component: CuentasCorreosComponent;
  let fixture: ComponentFixture<CuentasCorreosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasCorreosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasCorreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
