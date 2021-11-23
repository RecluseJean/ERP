import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposConceptoComponent } from './tipos-concepto.component';

describe('TiposConceptoComponent', () => {
  let component: TiposConceptoComponent;
  let fixture: ComponentFixture<TiposConceptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposConceptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposConceptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
