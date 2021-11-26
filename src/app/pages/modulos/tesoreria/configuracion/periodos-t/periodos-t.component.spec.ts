import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodosTComponent } from './periodos-t.component';

describe('PeriodosTComponent', () => {
  let component: PeriodosTComponent;
  let fixture: ComponentFixture<PeriodosTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodosTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodosTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
