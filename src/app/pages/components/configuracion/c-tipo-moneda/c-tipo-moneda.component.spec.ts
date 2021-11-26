import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTipoMonedaComponent } from './c-tipo-moneda.component';

describe('CTipoMonedaComponent', () => {
  let component: CTipoMonedaComponent;
  let fixture: ComponentFixture<CTipoMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTipoMonedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTipoMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
