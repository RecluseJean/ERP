import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRubroContableComponent } from './c-rubro-contable.component';

describe('CRubroContableComponent', () => {
  let component: CRubroContableComponent;
  let fixture: ComponentFixture<CRubroContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRubroContableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRubroContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
