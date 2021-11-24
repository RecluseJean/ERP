import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanillaAsientosComponent } from './planilla-asientos.component';

describe('PlanillaAsientosComponent', () => {
  let component: PlanillaAsientosComponent;
  let fixture: ComponentFixture<PlanillaAsientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanillaAsientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanillaAsientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
