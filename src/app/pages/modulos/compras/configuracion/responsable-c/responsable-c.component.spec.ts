import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableCComponent } from './responsable-c.component';

describe('ResponsableCComponent', () => {
  let component: ResponsableCComponent;
  let fixture: ComponentFixture<ResponsableCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsableCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
