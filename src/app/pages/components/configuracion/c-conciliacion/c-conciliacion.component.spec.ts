import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CConciliacionComponent } from './c-conciliacion.component';

describe('CConciliacionComponent', () => {
  let component: CConciliacionComponent;
  let fixture: ComponentFixture<CConciliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CConciliacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CConciliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
