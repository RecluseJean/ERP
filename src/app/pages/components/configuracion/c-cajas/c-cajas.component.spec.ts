import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCajasComponent } from './c-cajas.component';

describe('CCajasComponent', () => {
  let component: CCajasComponent;
  let fixture: ComponentFixture<CCajasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCajasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
