import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTipoCuentasComponent } from './c-tipo-cuentas.component';

describe('CTipoCuentasComponent', () => {
  let component: CTipoCuentasComponent;
  let fixture: ComponentFixture<CTipoCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTipoCuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTipoCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
