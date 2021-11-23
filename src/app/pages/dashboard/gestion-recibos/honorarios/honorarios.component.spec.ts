import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorariosComponent } from './honorarios.component';

describe('HonorariosComponent', () => {
  let component: HonorariosComponent;
  let fixture: ComponentFixture<HonorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonorariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
