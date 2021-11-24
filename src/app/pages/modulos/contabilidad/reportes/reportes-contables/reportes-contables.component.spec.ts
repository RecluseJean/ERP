import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesContablesComponent } from './reportes-contables.component';

describe('ReportesContablesComponent', () => {
  let component: ReportesContablesComponent;
  let fixture: ComponentFixture<ReportesContablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesContablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesContablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
