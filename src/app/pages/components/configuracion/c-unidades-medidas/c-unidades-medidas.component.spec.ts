import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUnidadesMedidasComponent } from './c-unidades-medidas.component';

describe('CUnidadesMedidasComponent', () => {
  let component: CUnidadesMedidasComponent;
  let fixture: ComponentFixture<CUnidadesMedidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUnidadesMedidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUnidadesMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
