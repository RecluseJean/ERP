import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestosHonorariosComponent } from './impuestos-honorarios.component';

describe('ImpuestosHonorariosComponent', () => {
  let component: ImpuestosHonorariosComponent;
  let fixture: ComponentFixture<ImpuestosHonorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpuestosHonorariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestosHonorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
