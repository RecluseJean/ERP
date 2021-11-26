import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposConceptoCComponent } from './tipos-concepto-c.component';

describe('TiposConceptoCComponent', () => {
  let component: TiposConceptoCComponent;
  let fixture: ComponentFixture<TiposConceptoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposConceptoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposConceptoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
