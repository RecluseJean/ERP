import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTipoConceptosComponent } from './c-tipo-conceptos.component';

describe('CTipoConceptosComponent', () => {
  let component: CTipoConceptosComponent;
  let fixture: ComponentFixture<CTipoConceptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTipoConceptosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTipoConceptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
