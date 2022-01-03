import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CResponsableComponent } from './c-responsable.component';

describe('CResponsableComponent', () => {
  let component: CResponsableComponent;
  let fixture: ComponentFixture<CResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
