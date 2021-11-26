import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliacionTComponent } from './conciliacion-t.component';

describe('ConciliacionTComponent', () => {
  let component: ConciliacionTComponent;
  let fixture: ComponentFixture<ConciliacionTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConciliacionTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciliacionTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
