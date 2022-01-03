import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPeriodosComponent } from './c-periodos.component';

describe('CPeriodosComponent', () => {
  let component: CPeriodosComponent;
  let fixture: ComponentFixture<CPeriodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPeriodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPeriodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
