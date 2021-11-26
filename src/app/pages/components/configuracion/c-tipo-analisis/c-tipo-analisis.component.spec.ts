import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTipoAnalisisComponent } from './c-tipo-analisis.component';

describe('CTipoAnalisisComponent', () => {
  let component: CTipoAnalisisComponent;
  let fixture: ComponentFixture<CTipoAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTipoAnalisisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTipoAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
