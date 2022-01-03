import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCentroCostosComponent } from './c-centro-costos.component';

describe('CCentroCostosComponent', () => {
  let component: CCentroCostosComponent;
  let fixture: ComponentFixture<CCentroCostosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCentroCostosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCentroCostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
