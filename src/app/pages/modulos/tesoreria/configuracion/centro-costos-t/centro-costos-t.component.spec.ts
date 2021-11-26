import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroCostosTComponent } from './centro-costos-t.component';

describe('CentroCostosTComponent', () => {
  let component: CentroCostosTComponent;
  let fixture: ComponentFixture<CentroCostosTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroCostosTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroCostosTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
