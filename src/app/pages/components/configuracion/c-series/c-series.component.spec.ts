import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSeriesComponent } from './c-series.component';

describe('CSeriesComponent', () => {
  let component: CSeriesComponent;
  let fixture: ComponentFixture<CSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
